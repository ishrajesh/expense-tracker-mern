import React, {createContext, useReducer} from "react"
import AppReducer from './AppReducer'
import axios from 'axios';

// const initialState = {
//     transactions: [
//         {id: 1, text: "Flower", amount: -50},
//         {id: 2, text: "Salary", amount: +1500},
//         {id: 3, text: "Drinks", amount: -30},
//         {id: 4, text: "Camera", amount: +300} ,
//     ],
//     error:null,
//     loading:true
// }
const initialState = {
    transactions: [],
    error:null,
    loading:true
}

// Create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider =  ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    // Actions 
    async function getTransactions(){
        try{
            const res = await axios.get('/api/v1/transactions'); 
            //console.log('axios:: get response ')
            //console.log(res);
           dispatch({
            type:'GET_TRANSACTIONS',
            payload: res.data.data
           })
        } catch(err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err.response.date.error,
            })
        }
    }

    async function deleteTransaction(id){
        // dispatch : here we are dispatching actions
        // console.log("deleteTransaction function call")
        try{
            await axios.delete(`/api/v1/transactions/${id}`);  

            dispatch({
                type: "DELETE_TRANSACTION",
                payload:id,
            })
        }catch (err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err.response.date.error,
            })
        }
    }

    
    async function addTransaction(transaction){
        // dispatch : here we are dispatching actions
        // console.log("addTransaction function call")
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try{
            const res = await axios.post('/api/v1/transactions', transaction,config)
            dispatch({
                type: "ADD_TRANSACTION",
                payload:res.data.data,
            })    
        } catch (err){
            dispatch({
                type:'TRANSACTION_ERROR',
                payload: err.response.date.error,
            })
        }

    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        error:state.error,
        loading: state.loading,
        deleteTransaction,
        getTransactions,
        addTransaction
    }}>
            {children}
        </GlobalContext.Provider>
    )
}
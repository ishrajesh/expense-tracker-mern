import React, {createContext, useReducer} from "react"
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        {id: 1, text: "Flower", amount: -50},
        {id: 2, text: "Salary", amount: +1500},
        {id: 3, text: "Drinks", amount: -30},
        {id: 4, text: "Camera", amount: +300} ,
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider =  ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer, initialState);

    // Actions 
    function deleteTransaction(id){
        // dispatch : here we are dispatching actions
        // console.log("deleteTransaction function call")
        dispatch({
            type: "DELETE_TRANSACTION",
            payload:id,
        })
    }

    
    function addTransaction(transaction){
        // dispatch : here we are dispatching actions
        // console.log("addTransaction function call")
        dispatch({
            type: "ADD_TRANSACTION",
            payload:transaction,
        })
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
            {children}
        </GlobalContext.Provider>
    )
}
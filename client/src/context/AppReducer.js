//  Reducer is basically how we specify the application state changes, 
//  in response to certain actions to or store


export default (state, action) => { 
    // here we recieve the dispatched action
    // console.log("state object")
    // console.log(state)
    // console.log("action object")
    // console.log(action)
    switch(action.type){
        case "GET_TRANSACTIONS":
            return {
                ...state,
                loading:false,
                transactions:action.payload
            }
        case "DELETE_TRANSACTION" :
            // console.log('case: DELETE_TRANSACTION')
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case "ADD_TRANSACTION" :
            // console.log('case: ADD_TRANSACTION')
            return {
                ...state,
                transactions: [ ...state.transactions, action.payload ]
            }
        case "TRANSACTION_ERROR":
            return {
                ...state,
                error:action.payload
            }
        default: 
            // console.log('switch called')
            return state;
    }
 }



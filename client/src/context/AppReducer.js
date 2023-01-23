//  Reducer is basically how we specifythe application state changes, 
//  in response to certain actions to or store


export default (state, action) => { 
    // here we recieve the dispatched action
    // console.log("state object")
    // console.log(state)
    // console.log("action object")
    // console.log(action)
    switch(action.type){
        case "DELETE_TRANSACTION" :
            // console.log('case: DELETE_TRANSACTION')
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case "ADD_TRANSACTION" :
            // console.log('case: ADD_TRANSACTION')
            return {
                ...state,
                transactions: [action.payload, ...state.transactions ]
            }
        default: 
            // console.log('switch called')
            return state;
    }
 }



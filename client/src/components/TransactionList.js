import React, { useContext,useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  
  useEffect(()=>{
    console.log("Calling useEffect Hook")
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
        <h3>History</h3>
        <ul className="list" id="list">
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>)  )}
        </ul>
    </>
  )
}

export default TransactionList
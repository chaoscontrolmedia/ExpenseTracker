import React, { useContext } from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

const Transactions = () => {
    const { transactions } = useContext(GlobalContext);
  return (
    <>
    <div className="inc-exp-container">
    <div className="form-control">
    
      <ul className="list">
      <h3>History</h3>
          {transactions.map (transaction => (<Transaction key={transaction.id}
          transaction={transaction}/> ))}


      </ul>
        
      </div>
      </div>
    </>
  )
}

export default Transactions

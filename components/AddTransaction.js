import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = e => {
      e.preventDefault();

      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
  }


  return (
    <>
      


      <form onSubmit={onSubmit}>
      
        <div className="inc-exp-container">

        <div className="form-control">
        <h3>Add Transaction</h3>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Transaction: " />
        <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Amount(+/-): " />
        <button className="btn">Add transaction</button>
 
          
        </div>

          
        
       
       
        </div>

        
        
      </form>
    </>
  )






}

export default AddTransaction

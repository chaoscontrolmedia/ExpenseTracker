import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';

import './App.css';






function App() {
  return (
    <GlobalProvider>
      
      <div className = "container">
      
    <div class="inc-exp-container">
      <div class="row">
      
          <div class="col-md-6">
            <div ><Header/><div > 
              
            <Balance />
         </div>
      </div>


    
    </div>

   
        <div class="col-md-6">
        <div > <IncomeExpenses /></div>    
        </div>
        </div>

        
        </div>
        
        

        <div class="row">
        <div class="col-md-6"><AddTransaction/></div>
        <div class="col-md-6"><Transactions/></div>
        
        </div>
      </div>

    </GlobalProvider>
  );
}

export default App;

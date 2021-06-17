
import React,{useContext} from "react";
// import Global Context
import {GlobalContext} from '../context/GlobalState';

//import Transaction
import Transaction from "./Transaction";
export const TransactionHistory =() => {
    const{ transaction } = useContext(GlobalContext);
    debugger
    console.log(transaction);
    return (
      <div>
          <h3>Transaction Hisstory</h3>
          <ul className="list">
              {transaction.map(transaction =>(
                <Transaction key={transaction.id} transaction={transaction}/>
              ))}
            
              {/* <li className ="plus">
                  Project 1 Income
                  <span>$1,000</span>
                  <button className="delete-btn">X</button>
              </li> */}
              {/* <li className ="minus">
              Project 1 Salaries
                  <span>$1,000</span>
                  <button className="delete-btn">X</button>
              </li> */}
          </ul>
      </div>
    );
  }
  

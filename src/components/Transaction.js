
import React from "react";
//import the global provider
function Transaction(transaction) {
  return (
    <li className ="plus">
         {transaction.description}
         <span>$1,000</span>
         <button className="delete-btn">X</button>
     </li>
    
  );
}

export default Transaction;

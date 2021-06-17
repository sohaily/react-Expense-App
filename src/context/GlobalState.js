import { STATEMENT_OR_BLOCK_KEYS } from "@babel/types";
import React,{createContext,useReducer} from "react";
import AppReducer from "./AppReducer";
// create the initial state
const initialState = {
transaction:[
    {id:1,descriptn:"Income 1",transactionAmount:1000},
    {id:2,descriptn:"Income 2",transactionAmount:-100},
    {id:3,descriptn:"Income 3",transactionAmount:2000},
    {id:4,descriptn:"Income 4",transactionAmount:-500}
   ]
}

//Create the Global Context
export const GlobalContext = createContext(initialState);

// Create a provider for the Global Context

export const GlobalProvider = ({children})=>{
    const [state] =useReducer(AppReducer,initialState);
    return (
        <GlobalContext.Provider value={
            {transaction:state.transaction}
        }>
            {children}
        </GlobalContext.Provider>
    )
}
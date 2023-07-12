import React ,{useReducer,createContext, useRef} from "react";
import contextReducer from './contextReducer';
const initialState = JSON.parse(localStorage.getItem('transactions'))||[{"amount":2000,"category":"Salary","type":"Income","date":"2023-06-06","id":"ad1403bc-36a1-47b3-bac7-114a6c60604a"}];

export const PennywiseContext = createContext(initialState);

export const Provider = ({children})=>{
    const [transactions, dispatch] = useReducer(contextReducer, initialState);
    //Action Creators
    const deleteTransaction =(id)=>{
        dispatch({type:'DELETE_TRANSACTION', payload: id});
    }
    const addTransaction =(transaction)=>{
        dispatch({type:'ADD_TRANSACTION',payload:transaction});
    }

    const balance = transactions.reduce((acc,currVal)=>{
           return (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount)
    },0)
 
    return(
    <PennywiseContext.Provider value={{
        deleteTransaction,
        addTransaction,
        transactions,
        balance
    }}>
        {children}
    </PennywiseContext.Provider>
    )
}
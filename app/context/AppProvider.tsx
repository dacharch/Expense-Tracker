import React, { createContext,useState,ReactNode,useContext } from 'react'



interface AppProviderProps{
      children:ReactNode;
}
interface MyContextType{
   keyboardVisible:boolean;
   setKeyboardVisible: (value:boolean) =>void;
   shopping:string,
   setShopping:(value:string) =>void;
   result :any,
   setResult: (value:any)=>void ;
   inputValue:string,
   setInputValue:(value:any)=>void,
   expense:number,
   setExpenses:(value:any)=>void,
   income:number,
   setIncome:(value:any)=>void,
   balance:number,
   setBalance:(value:any)=>void,
   selected:boolean,
   setSelected:(value:any)=>void,


}
const MyContext = createContext<MyContextType|undefined>(undefined) ;

export const AppProvider:React.FC<AppProviderProps>= ({children}:any) =>{
    const [keyboardVisible,setKeyboardVisible] = useState(false) ;
    const [shopping,setShopping] = useState('Shopping');
    const [result,setResult] = useState('');
    const[inputValue,setInputValue] = useState('');
    const [expense, setExpenses] = useState(0);
    const [income, setIncome] = useState(0);
    const [balance, setBalance] = useState(0);
    const [selected,setSelected] =useState(false);


    return(
         <MyContext.Provider value={{
              keyboardVisible,setKeyboardVisible,
              shopping,setShopping,
              inputValue,setInputValue,
              result,setResult,
              expense,setExpenses,
              income,setIncome,
              balance,setBalance,
              selected,setSelected,
              }}>
              {children}
         </MyContext.Provider>
    )
}
// Custom Hook that will use the AppProviderProps

export const useMyContext = () =>{
     const context = useContext(MyContext);
     if(!context){
        throw new Error('useMycontext must be used within a MyProvider') ;
     }
     return context ;
}

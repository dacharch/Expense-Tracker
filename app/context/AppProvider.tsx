import React, { createContext,useState,ReactNode,useContext } from 'react'



interface AppProviderProps{
      children:ReactNode;
}
interface MyContextType{
   keyboardVisible:boolean;
   setKeyboardVisible: (value:boolean) =>void;
   shopping:string,
   setShopping:(value:string) =>void;
   result :string,
   setResult: (value:string)=>void ;
   inputValue:string,
   setInputValue:(value:any)=>void
}
const MyContext = createContext<MyContextType|undefined>(undefined) ;

export const AppProvider:React.FC<AppProviderProps>= ({children}:any) =>{
    const [keyboardVisible,setKeyboardVisible] = useState(false) ;
    const [shopping,setShopping] = useState('Shopping');
    const [result,setResult] = useState('');
    const[inputValue,setInputValue] = useState('');


    return(
         <MyContext.Provider value={{keyboardVisible,setKeyboardVisible,shopping,setShopping,inputValue,setInputValue,result,setResult}}>
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

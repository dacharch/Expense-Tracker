import React, { createContext,useState,ReactNode,useContext } from 'react'



interface AppProviderProps{
      children:ReactNode;
}
interface MyContextType{
   keyboardVisible:boolean;
   setKeyboardVisible: (value:boolean) =>void;
}
const MyContext = createContext<MyContextType|undefined>(undefined) ;

export const AppProvider:React.FC<AppProviderProps>= ({children}:any) =>{
    const [keyboardVisible,setKeyboardVisible] = useState(true) ;


    return(
         <MyContext.Provider value={{keyboardVisible,setKeyboardVisible}}>
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

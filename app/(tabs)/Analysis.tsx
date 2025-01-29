import React, { useState } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { PieChart } from "react-native-gifted-charts";
import { useMyContext } from '../context/AppProvider';
import RecordIcon from '../components/RecordIcon';



const Analysis = () => {
  const {selectedIcon,resultOutput} = useMyContext();
  const [totalPercentage,setPercentage] =useState();


  const updtedObject = resultOutput.map((obj: { [x: string]: any; currentValue: any; }) => {
    const { currentValue, ...rest } = obj;

    return {
      ...rest,
      value: currentValue,
      
    };
  });
  

 
  return (
     <View  style={style.main_container}>
         <View style={style.container}>
               <Text style={style.text_container}>Charts</Text>
         </View>

         {
          selectedIcon? (
              <>
               <View style={style.chart_container}>
                   <PieChart 
                      data={updtedObject}
                      centerLabelComponent={()=>{
                         return <Text style={{fontSize:30}}>{totalPercentage}</Text>
                      }}
                    />
               </View>
               
              </>
          ):(
             <RecordIcon/>
          )
         }
          
     </View>




  
  )
}


const style = StyleSheet.create({
   
   container: {
     backgroundColor: '#B58B00', 
     height:100,
     padding:10,
   },

   main_container:{
     flex:1,
   },
   
   chart_container:{
       display:'flex',
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center',
       marginTop:30
   },

   text_container:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
   }

})


export default Analysis

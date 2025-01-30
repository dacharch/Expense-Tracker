import React, { useState } from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { PieChart } from "react-native-gifted-charts";
import { useMyContext } from '../context/AppProvider';
import RecordIcon from '../components/RecordIcon';
import Records from '../components/Records';
import PercentageRecord from '../components/PercentageRecord';



const Analysis = () => {
  const {selectedIcon,resultOutput,income} = useMyContext();
  

  const updatedObject = resultOutput.map((obj: { [x: string]: any; currentValue: any; }) => {
    const { currentValue, ...rest } = obj;

    return {
      ...rest,
      value: Math.abs(currentValue),
      
    };
  });

  const newUpdate =updatedObject.map((obj: { [x: string]: any; currentValue: any; }) => {
     
      obj.text =(obj.value*100/income).toFixed(2);
      return obj ;

    
  });
  console.log(newUpdate);
 
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
                      showText
                      textSize={20}
                      
                      data={newUpdate}
                      centerLabelComponent={()=>{
                         return <Text style={{fontSize:30}}>{income}</Text>
                      }}
                    />
               </View>
               <View  style={style.bottom_container}>
                        <PercentageRecord/>
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

   bottom_container:{
        marginTop:10,
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

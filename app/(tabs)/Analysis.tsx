import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import { PieChart } from "react-native-gifted-charts";



const Analysis = () => {
  const pieData = [
    {value: 54, color: '#177AD5', text: '54%'},
    {value: 40, color: '#79D2DE', text: '30%'},
    {value: 20, color: '#ED6665', text: '26%'},
];
  return (
     <View style={style.container}>
         <View>
               <Text style={style.text_container}> Charts</Text>
         </View>
     </View>


  
  )
}


const style = StyleSheet.create({
   container: {
     backgroundColor: '#B58B00', 
     height:100,
     padding:10,
     
   },
   text_container:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
   }
})


export default Analysis

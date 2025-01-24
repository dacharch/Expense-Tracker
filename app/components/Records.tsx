import React, { useState } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome' 


const Records = () => {
 
  const getDate = ()=>{
    const event = new Date() ;
    return event.toDateString();
 }

  return (
    <View style={styles.record_container}>
     
        <View style={styles.record_date_container}>
             <View>
                <Text>{getDate()}</Text>
             </View>
             <View style={styles.expense_income_container}>
               <View>
               <Text>Expense</Text>
               <Text></Text>
               </View>
               <View>
               <Text>Income</Text>
                  <Text></Text>
               </View>
             </View>
        </View>

        <View style={styles.icon_container}>
          <View style={styles.icon_text_container}>
          <View style={styles.icon}>
                <Icon name="shopping-bag" size={25}/>
          </View>
            <View>
                <Text style={styles.font_text}>Shopping</Text>
            </View>
            
          </View>
          <View>
              <Text>500</Text>
          </View>
          
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
   record_container:{
    paddingLeft:5,
    paddingRight:5,
    marginTop:5,
    height:100,
    position:'relative',
    borderBottomWidth:1,
   },

   record_date_container:{
     display:'flex',
     flexDirection:'row',
     borderColor:'black',
     borderBottomWidth:1,
     justifyContent:'space-between',
   },
   expense_income_container:{
    display:'flex',
    flexDirection:'row'
   },
   icon_container:{
     paddingLeft:5,
     paddingRight:5,
     paddingTop:5,
     display:'flex',
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
    
   },
   icon_text_container:{
      paddingLeft:5,
      paddingRight:5,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      gap:10,
   },
   font_text:{
      fontWeight:'bold',
      fontSize:20,
   },
  

   icon:{
     borderRadius:'50%',
     backgroundColor:'gray',
     padding:10

   }
})

export default Records

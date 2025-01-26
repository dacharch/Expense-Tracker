import React, { useState } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome' 
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from  'react-native-vector-icons/MaterialIcons'
import { useMyContext } from '../context/AppProvider'

interface Item{
   id:number,
   category:string,
   name:string,
   currentValue:number,
   iconName:string

}

interface ItemProps {
    item:Item
}
const Records:React.FC<ItemProps> = ({item}) => {
  
  const {income,expense,iconName} = useMyContext();
  

  const getDate = ()=>{
    const event = new Date() ;
    return event.toDateString();
 }

 console.log(item.category)



  return (

    <View style={styles.record_container}>
     
        <View style={styles.record_date_container}>
             <View>
                <Text>{getDate()}</Text>
             </View>
             <View style={styles.expense_income_container}>
               <View >
               <Text>Expense</Text>
               <Text>{expense}</Text>
               </View>
               <View>
               <Text>Income</Text>
                  <Text>{income}</Text>
               </View>
             </View>
        </View>

        <View style={styles.icon_container}>
          <View style={styles.icon_text_container}>
          <View style={styles.icon}>
            {
              item.iconName == "fast-food"? (
                 <Icon2 name={item.iconName} size={25}/>
              ):
              (
                <Icon name={item.iconName} size={25}/>
              )
            }
                
          </View>
            <View>
                <Text style={styles.font_text}>{item.name}</Text>
            </View>
            
          </View>
          <View>
              <Text>{item.currentValue}</Text>
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
    flexDirection:'row',
    gap:10,
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

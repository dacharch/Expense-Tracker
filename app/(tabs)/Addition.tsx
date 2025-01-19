import React from 'react'
import { Pressable, View } from 'react-native'
import { StyleSheet,Text } from 'react-native'
const Addition = () => {
  return (
     <View style={styles.container}>  
         <View>
            <Text style={styles.text_container}>Addition</Text>
         </View>
         <View style={styles.box_container}>
            <View>
               <Pressable>
                  <Text> Income</Text>
               </Pressable>
            </View>
             <View>
               <Pressable>
                   <Text>Expense</Text>
               </Pressable>
             </View>
            
         </View>
          
     </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#B58B00',
        textAlign:"center",
        color:'black',
    },

    text_container:{
        marginTop:10,
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    box_container:{
       
    }
    

  
})

export default Addition

import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
const Records = () => {
  return (
    <View style={styles.record_container}>
     
        <View style={styles.record_date_container}>
             <View>
                  
             </View>
             <View>
                 
             </View>
        </View>
        <View>
            
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
   record_container:{
    width:100,
    borderBottomColor:'black',
    borderBottomWidth:1
   },

   record_date_container:{
     display:'flex',
     justifyContent:'space-between',

   }
})

export default Records

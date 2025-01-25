import React from 'react'
import { View,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'


const RecordIcon = () => {
  return (
     <View style={styles.container}>
         <Icon 
            name='book-open'
            size={100}
         />
          
     </View>
  )
}

const  styles = StyleSheet.create({
   
    container:{
      marginTop:'70%',
      display:'flex',
      alignItems:'center' 
    }
      
})

export default RecordIcon

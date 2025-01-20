import React from 'react'
import { View,StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6';


const IncomeAssets = () => {


  return (
     <View style={styles.container}>
      <View style={styles.icon_container}>
      <View style={styles.icon} >
        <Pressable>
        <Icon
             name='wallet'
             size={40}
          />
        </Pressable>
         
      </View>
      <View style={styles.icon}>
         <Pressable>
         <Icon
              name="business-time"
              size={40}
           />
         </Pressable>
          
      </View>
      <View style={styles.icon}>
        <Pressable>
        <Icon
               name="gift"
               size={40}
             />
        </Pressable>
           
      </View>
      <View style={styles.icon}>
        <Pressable>
        <Icon
              name="dollar"
              size={40}
           />
        </Pressable>
         
      </View>
      </View>
     </View>
  )
}

const styles = StyleSheet.create({
   container:{
       padding:20,
       borderColor:'black',
  
   },

   icon_container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
   },

    icon:{
       backgroundColor:'gray',
       borderRadius:'50%',
       width:65,
       height:65,
       alignItems:'center',
       padding:10,
    }
})

export default IncomeAssets



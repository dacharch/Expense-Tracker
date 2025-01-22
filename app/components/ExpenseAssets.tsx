import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from  'react-native-vector-icons/MaterialIcons'
import Icon4 from 'react-native-vector-icons/FontAwesome6'
const ExpenseAssets = () => {
  return (


      <View style={styles.container}>
         <View style={styles.icon_container}>

             <View style={styles.icon}>
                <Pressable>
                     <Icon
                        name="shopping-bag"
                        size={40}
                     />
                </Pressable>
             </View>

             <View style={styles.icon}>
                <Pressable>
                     <Icon2
                        name="fast-food"
                        size={40}
                     />
                </Pressable>
             </View>
             
             <View style={styles.icon}>
                <Pressable>
                     <Icon
                        name="mobile-phone"
                        size={40}
                     />
                </Pressable>
             </View>

             <View style={styles.icon}>
                <Pressable>
                     <Icon
                        name="tv"
                        size={40}
                     />
                </Pressable>
             </View>
         </View>
         {/* Second Container*/}
         <View style={styles.icon_container}>
             <View style={styles.icon}>
                  <Pressable>
                      <Icon
                         name="book"
                         size={40}
                      />
                  </Pressable>
             </View>

             <View style={styles.icon}>
                  <Pressable>
                      <Icon
                         name='female'
                         size={40}
                      />
                  </Pressable>
             </View>

             <View style={styles.icon}>
                  <Pressable>
                       <Icon3
                          name="sports"
                          size={40}
                        />
                  </Pressable>
             </View>
             <View style={styles.icon}>
                  <Pressable>
                       <Icon2
                           name="people"
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
    justifyContent:'space-between',
    marginBottom:15
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

export default ExpenseAssets

import { View,StyleSheet,Text,Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from  'react-native-vector-icons/MaterialIcons'
import React from 'react'

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
          <Text style={styles.text_icon}>Shopping</Text>
       </View>

       <View style={styles.icon}>
          <Pressable>
               <Icon2
                  name="fast-food"
                  size={40}
               />
          </Pressable>
          <Text style={styles.text_icon}>Food</Text>
       </View>
       
       <View style={styles.icon}>
          <Pressable>
               <Icon
                  name="mobile-phone"
                  size={40}
               />
          </Pressable>
          <Text style={styles.text_icon}>Smart Phone</Text>
       </View>

       <View style={styles.icon}>
          <Pressable>
               <Icon
                  name="tv"
                  size={40}
               />
          </Pressable>
          <Text style={styles.text_icon}>Entertainment</Text>
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
            <Text style={styles.text_icon}>Books</Text>
       </View>

       <View style={styles.icon}>
            <Pressable>
                <Icon
                   name='female'
                   size={40}
                />
            </Pressable>
            <Text style={styles.text_icon}>Clothes</Text>
       </View>

       <View style={styles.icon}>
            <Pressable>
                 <Icon3
                    name="sports"
                    size={40}
                  />
            </Pressable>
            <Text style={styles.text_icon}>Sports</Text>
       </View>
       <View style={styles.icon}>
            <Pressable>
                 <Icon2
                     name="people"
                     size={40}
                   />
            </Pressable>
            <Text style={styles.text_icon}>Social</Text>
       </View>
   </View>
   </View>
   
  )
}

const styles =  StyleSheet.create({
   container:{
      padding:20,
      borderColor:'black',
  },

  text_icon:{
     marginTop:20,
     marginBottom:20,
     height:30,
     width:120,
     textAlign:'center',
     fontWeight:'bold'
  },

  icon_container:{
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-between',
   marginBottom:35
  },
   icon:{
      backgroundColor:'gray',
      borderRadius:'50%',
      width:65,
      height:65,
      alignItems:'center',
      padding:10,
   },

   inputContainer: {
      marginBottom: 20,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
      color: "#555",
    },
    inputBox: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 8,
      padding: 12,
      backgroundColor: "#f9f9f9",
    },
    inputText: {
      fontSize: 16,
      color: "#333",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    keyboardContainer: {
      backgroundColor: "#fff",
      padding: 20,
      borderTopLeftRadius: 16,
      borderTopRightRadius: 16,
    },
    closeButton: {
      alignSelf: "flex-end",
      marginBottom: 20,
    },
    closeButtonText:{
       color:'red'
    }
}) 

export default ExpenseAssets

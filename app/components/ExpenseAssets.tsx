import { View,StyleSheet,Text,Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from  'react-native-vector-icons/MaterialIcons'
import React, { useState } from 'react'
import { useMyContext } from '../context/AppProvider'
import CustomKeyboardExample from './CustomKeybordExample'

const ExpenseAssets = () => {
 const {keyboardVisible,setKeyboardVisible} = useMyContext();
 const [color1,setColor1] = useState<string>('black');
 const [color2,setColor2] = useState<string>('black');
 const [color3,setColor3] = useState<string>('black') ;
 const [color4,setColor4] = useState<string>('black');
 const [color5,setColor5] = useState<string>('black');
 const [color6,setColor6] = useState<string>('black') ;
 const [color7,setColor7] = useState<string>('black');
 const [color8,setColor8] = useState<string>('black') ;


 

  const handlePress = (value:string)=>{
   if(value === "shopping-bag"){
       setColor1('yellow')
       setColor2('black')
       setColor3('black')
       setColor4('black')
       setColor5('black')
       setColor6('black')
       setColor7('black')
       setColor8('black')
       setKeyboardVisible(!keyboardVisible)
       
   }else if(value === "fast-food"){
      setColor1('black')
      setColor2('yellow')
      setColor3('black')
      setColor4('black')
      setColor5('black')
      setColor6('black')
      setColor7('black')
      setColor8('black')
      setKeyboardVisible(!keyboardVisible)
      
   }else if(value ==="mobile-phone"){
      setColor1('black')
      setColor2('black')
      setColor3('yellow')
      setColor4('black')
      setColor5('black')
      setColor6('black')
      setColor7('black')
      setColor8('black')
      setKeyboardVisible(!keyboardVisible)      
   }else if(value === "tv"){
      setColor1('black')
      setColor2('black')
      setColor3('black')
      setColor4('yellow')
      setColor5('black')
      setColor6('black')
      setColor7('black')
      setColor8('black')
      setKeyboardVisible(!keyboardVisible)
   }else if(value ==='book'){
      setColor1('black')
      setColor2('black')
      setColor3('black')
      setColor4('black')
      setColor5('yellow')
      setColor6('black')
      setColor7('black')
      setColor8('black')
      setKeyboardVisible(!keyboardVisible)
   }else if(value === "female"){
      setColor1('black')
      setColor2('black')
      setColor3('black')
      setColor4('black')
      setColor5('black')
      setColor6('yellow')
      setColor7('black')
      setColor8('black')
      setKeyboardVisible(!keyboardVisible)
   }else if(value === "sports"){
      setColor1('black')
      setColor2('black')
      setColor3('black')
      setColor4('black')
      setColor5('black')
      setColor6('black')
      setColor7('yellow')
      setColor8('black')
      setKeyboardVisible(!keyboardVisible)
   }else if(value === "people"){
      setColor1('black')
      setColor2('black')
      setColor3('black')
      setColor4('black')
      setColor5('black')
      setColor6('black')
      setColor7('black')
      setColor8('yellow')
      setKeyboardVisible(!keyboardVisible)

   }
      
  }


  return (
   <View style={styles.container}>
   <View style={styles.icon_container}>
       <View style={styles.icon}>
          <Pressable onPress={()=>handlePress('shopping-bag')} >
               <Icon
                  name="shopping-bag"
                  size={40}
                  color={color1}
                  
               />
               
          </Pressable>
          <Text style={styles.text_icon}>Shopping</Text>
       </View>

       <View style={styles.icon}>
          <Pressable onPress={()=>handlePress('fast-food')}>
               <Icon2
                  name="fast-food"
                  size={40}
                  color={color2}
               />
          </Pressable>
          <Text style={styles.text_icon}>Food</Text>
       </View>
       
       <View style={styles.icon}>
          <Pressable onPress={()=>handlePress('mobile-phone')}>
               <Icon
                  name="mobile-phone"
                  size={40}
                  color={color3}
               />
          </Pressable>
          <Text style={styles.text_icon}>Smart Phone</Text>
       </View>

       <View style={styles.icon}>
          <Pressable onPress={()=>handlePress('tv')}>
               <Icon
                  name="tv"
                  size={40}
                  color={color4}
               />
          </Pressable>
          <Text style={styles.text_icon}>Entertainment</Text>
       </View>
   </View>
   {/* Second Container*/}
   <View style={styles.icon_container}>
       <View style={styles.icon}>
            <Pressable onPress={()=>handlePress('book')}>
                <Icon
                   name="book"
                   size={40}
                   color={color5}
                />
            </Pressable>
            <Text style={styles.text_icon}>Books</Text>
       </View>

       <View style={styles.icon}>
            <Pressable onPress={()=>handlePress('female')}>
                <Icon
                   name='female'
                   size={40}
                   color={color6}
                />
            </Pressable>
            <Text style={styles.text_icon}>Clothes</Text>
       </View>

       <View style={styles.icon}>
            <Pressable onPress={()=>handlePress('sports')}>
                 <Icon3
                    name="sports"
                    size={40}
                    color={color7}
                  />
            </Pressable>
            <Text style={styles.text_icon}>Sports</Text>
       </View>
       <View style={styles.icon}>
            <Pressable onPress={()=>handlePress('people')}>
                 <Icon2
                     name="people"
                     size={40}
                     color={color8}
                   />
            </Pressable>
            <Text style={styles.text_icon}>Social</Text>
       </View>
   </View>
     <CustomKeyboardExample/>
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

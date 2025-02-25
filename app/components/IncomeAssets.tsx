import React from 'react'
import { View,StyleSheet,Text, Pressable } from 'react-native'
import { useState } from 'react';
import { useMyContext } from '../context/AppProvider';
import CustomKeyboardExample from './CustomKeybordExample';
import Icon from 'react-native-vector-icons/FontAwesome6';

const IncomeAssets = () => {
   const {keyboardVisible,setKeyboardVisible,setIconName,setCategoryName,setSelectedIcon} = useMyContext();
   const [color1,setColor1] = useState<string>('black');
   const [color2,setColor2] = useState<string>('black');
   const [color3,setColor3] = useState<string>('black') ;
   const [color4,setColor4] = useState<string>('black');
   
  const handlePress = (value:string) =>{
    
   if(value === "wallet"){
       setColor1('#3B5998') 
       setColor2('black')
       setColor3('black')
       setColor4('black')
       setIconName('wallet')
       setKeyboardVisible(!keyboardVisible)
       setCategoryName('Wallet')
       setSelectedIcon(true)
       
   }else if(value === "business-time" ){
     setColor1('black')
     setColor2('#3B5998')
     setColor3('black')
     setColor4('black')
     setIconName('business-time')
     setKeyboardVisible(!keyboardVisible)
     setCategoryName('Business')
     setSelectedIcon(true)

   }else if(value  === "gift"){
       setColor1('black')
       setColor2('black')
       setColor3('#3B5998')
       setColor4('black')
       setIconName('gift')
       setKeyboardVisible(!keyboardVisible)
       setCategoryName('Gift')
       setSelectedIcon(true)
   }else if(value === "dollar"){
       setColor1('black')
       setColor2('black')
       setColor3('black')
       setColor4('#3B5998')
       setIconName('dollar') 
       setKeyboardVisible(!keyboardVisible)
       setCategoryName('Other')
       setSelectedIcon(true)

   }
  }
  return (
     <View style={styles.container}>
      <View style={styles.icon_container}>
      <View style={styles.icon} >
        <Pressable onPress={()=>handlePress('wallet')}>
        <Icon
             name='wallet'
             size={40}
             color={color1}
          />
        </Pressable>
         <Text style={styles.text_icon}>Wallet</Text>
      </View>
      <View style={styles.icon}>
         <Pressable onPress={()=>handlePress('business-time')}>
         <Icon
              name="business-time"
              size={40}
              color={color2}
           />
         </Pressable>
         <Text style={styles.text_icon}>Business</Text>
      </View>

      <View style={styles.icon}>
        <Pressable onPress={()=>handlePress('gift')}>
        <Icon
               name="gift"
               size={40}
               color={color3}
             />
        </Pressable>
        <Text style={styles.text_icon}>Gift</Text>   
      </View>

      <View style={styles.icon}>
        <Pressable onPress={()=>handlePress('dollar')}>
        <Icon
              name="dollar"
              size={40}
              color={color4}
           />
        </Pressable>
        <Text style={styles.text_icon}>Other</Text>
      </View>
      </View>
        <CustomKeyboardExample/>
     </View>
  )
}

const styles = StyleSheet.create({
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
      fontWeight:'bold',
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



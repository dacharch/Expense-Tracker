import React from 'react'
import { Pressable, View } from 'react-native'
import { StyleSheet,Text } from 'react-native'
import { useState } from 'react'

const Addition = () => {
  const [selected,setSelected] = useState(false) ;


  

  return (
     <View style={styles.container}>  
         <View>
            <Text style={styles.text_container}>Addition</Text>
         </View>
         <View style={styles.box_container_center}>
         <View style={styles.box_container}>
            <View  >
               <Pressable onPress={()=>setSelected(!selected)}>
                  <Text style={selected ? styles.selectedContainer: styles.unselectedContainer}>Income</Text>
               </Pressable>
            </View>
              <View style={styles.verticleLine}/>
             <View>
               <Pressable  onPress={()=>setSelected(!selected)}>
                   <Text style={selected ? styles.unselectedContainer : styles.selectedContainer}>Expense</Text>
               </Pressable>
             </View>
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
    selectedContainer:{
          fontSize:20,
          fontWeight:'bold',
          width:150,
          backgroundColor:'black',
          color:'yellow',
          paddingLeft:20,
          paddingRight:20,
          paddingTop:10,
          paddingBottom:10,
        
    },
    unselectedContainer:{
      fontSize:20,
      fontWeight:'bold',
      width:150,
      paddingLeft:20,
      paddingRight:20,
      paddingTop:10,
      paddingBottom:10,

    },
    box_container_center:{
       width:'100%',
       display:'flex',
       alignItems:'center',
    },
    
    verticleLine:{
      height: '100%',
      width: 2,
      backgroundColor: '#000',
    },
    

    box_container:{
      display:'flex',
      flexDirection:'row',
      borderColor:'black',
      borderWidth:2,
      justifyContent:'space-between',
      width:350,
      padding:10,
      marginTop:20,
      marginBottom:10,
  
    },

})

export default Addition

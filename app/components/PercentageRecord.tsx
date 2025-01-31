import React from 'react'
import { View,StyleSheet,Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome6'


interface Item{
    id:number,
    category:string,
    name:string,
    value:number,
    iconName:string
    text:number,
}

interface ItemProps{
   item:Item
}


const PercentageRecord:React.FC<ItemProps> = ({item}) => {
  
  console.log(item)
  return (
    <View style={ style.view_container}>
      <View style={style.view_container2} >
      <View>
           <Icon
             name={item.iconName}
             size={50}
           />

           
       </View>
       <View>
           <Text style={style.font_text}>{item.name}</Text>
       </View>
       <View>
            <Text style={style.font_text}>{item.text+"%"}</Text>
       </View>
      </View>
      

    </View>
  )
}

const style = StyleSheet.create({
    view_container:{
      padding:20,
      borderWidth:1,
    },

    view_container2:{
     display:'flex',
     flexDirection:'row',
     justifyContent:'space-between',
     padding:20,
    },

    font_text:{
          fontWeight:'bold',
          fontSize:20,
          padding:10,
    }
})


export default PercentageRecord

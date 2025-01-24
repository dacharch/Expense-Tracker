import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react'
import { View, Text, StyleSheet,  TouchableOpacity,Platform } from 'react-native';
import Records from '../components/Records';
import { useMyContext } from '../context/AppProvider';

const Index = () => {
  const {income,expense,balance}  = useMyContext();



  return (

    <>
       <View style={styles.container}>
      <View >
        <Text style={styles.text_container}>Money Records</Text>
      </View>

      <View style={styles.sub_container}>

         <View>
            <TouchableOpacity >
             <Ionicons name="calendar-number-outline" size={30}/>
            </TouchableOpacity>
         </View>

        <View style={styles.box_container}>
          <Text>Expenses</Text>
          <Text>{expense}</Text>
        </View>

        <View style={styles.box_container}>
          <Text>Income</Text>
          <Text>{income}</Text>
        </View>

        <View style={styles.box_container}>
          <Text>Blance</Text>
          <Text>{balance}</Text>
        </View>

      </View>
    </View>
    <View>
       <Records/>
    </View> 
    </>
   
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B58B00',
    textAlign: 'center',
    color: 'black',
  },
  text_container: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  sub_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  box_container: {
    borderColor: 'black'
  },
  records_container:{
     flexDirection:'column'
    
  }
})

export default Index;
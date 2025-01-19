import { Ionicons } from '@expo/vector-icons';
import { useEffect } from 'react';
import * as Calendar from 'expo-calendar';
import React, { useState } from 'react'
import { View, Text, StyleSheet,  TouchableOpacity,Platform } from 'react-native';
import { Pressable } from 'react-native-gesture-handler';

const Index = () => {
  const [expense, setExpenses] = useState(0);
  const [income, setIncome] = useState(0);
  const [balance, setBalance] = useState(0);
 
  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === 'granted') {
        const calendars = await Calendar.getCalendarsAsync(Calendar.EntityTypes.EVENT);
        console.log('Here are all your calendars:');
        console.log({ calendars });
      }
    })();
  }, []);

 
  async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }
  async function createCalendar() {
    const defaultCalendarSource =
      Platform.OS === 'ios'
        ? await getDefaultCalendarSource()
        : { isLocalAccount: true, name: 'Expo Calendar' };
    const newCalendarID = await Calendar.createCalendarAsync({
      title: 'Expo Calendar',
      color: 'blue',
      entityType: Calendar.EntityTypes.EVENT,
      sourceId: defaultCalendarSource.id,
      source: defaultCalendarSource,
      name: 'internalCalendarName',
      ownerAccount: 'personal',
      accessLevel: Calendar.CalendarAccessLevel.OWNER,
    });
    console.log(`Your new calendar ID is: ${newCalendarID}`);
  }

  return (
    <View style={styles.container}>
      <View >
        <Text style={styles.text_container}>Money Records</Text>
      </View>

      <View style={styles.sub_container}>

         <View>
            <TouchableOpacity onPress={createCalendar}>
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

      <View style={styles.records_container}>


  
      </View>
    </View>
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
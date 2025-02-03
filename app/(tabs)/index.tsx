import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, Pressable } from 'react-native';
import Records from '../components/Records';
import { useMyContext } from '../context/AppProvider';
import RecordIcon from '../components/RecordIcon';
import { ScrollView } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";


const Index = () => {
  const { income, setIncome, expense, setExpenses, balance, setBalance, selectedIcon,setSelectedIcon, resultOutput } = useMyContext();

  const getDate = () => {
    const event = new Date();
    return event.toDateString();
  };

  useEffect(() => {
    const income = resultOutput.reduce((acc: any, record: any) => {
      return record.currentValue > 0 ? acc + record.currentValue : acc;
    }, 0);

    const expense = resultOutput.reduce((acc: any, record: any) => {
      return record.currentValue < 0 ? acc + record.currentValue : acc;
    }, 0);

    setBalance(income + expense);
    setIncome(income);
    setExpenses(expense);
  }, [resultOutput]);


  const removeItem = ()=>{
     
    AsyncStorage.removeItem('income') ;
    AsyncStorage.removeItem('balance') ;
    AsyncStorage.removeItem('expense') ;
    setBalance(0) ;
    setIncome(0) ;
    setExpenses(0) ;

    AsyncStorage.removeItem('dataForToday') ;
    setSelectedIcon(false) ;
    
  }
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text_container}>Money Records</Text>

        <View style={styles.sub_container}>
          <View style={styles.box_container}>
            <Text style={styles.text_font_container}>Expenses</Text>
            <Text style={styles.text_font}>{expense}</Text>
          </View>

          <View style={styles.box_container}>
            <Text style={styles.text_font_container}>Income</Text>
            <Text style={styles.text_font}>{income}</Text>
          </View>

          <View style={styles.box_container}>
            <Text style={styles.text_font_container}>Balance</Text>
            <Text style={styles.text_font}>{balance}</Text>
          </View>
        </View>

        <Pressable onPress={removeItem} style={styles.button_container}>
            <Text style={styles.button_font_text}>Remove all the records</Text>
        </Pressable>

        {selectedIcon && (
          <View style={styles.record_date_container}>
            <Text style={styles.date_text}>{getDate()}</Text>
            <View style={styles.expense_income_container}>
              <View style={styles.income_expense}>
                <Text style={styles.expense_label}>Expense</Text>
                <Text style={styles.expense_value}>{expense}</Text>
              </View>
              <View style={styles.income_expense}>
                <Text style={styles.income_label}>Income</Text>
                <Text style={styles.income_value}>{income}</Text>
              </View>
            </View>
          </View>
        )}
      </View>
      <ScrollView>
      <View>
       
          {selectedIcon ? (
            resultOutput.map((item: any) => <Records  key={item.id} item={item} />)
          ) : (
            <RecordIcon />
          )}
       
      </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F9F9F9',
    paddingTop: 30,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 30,
  },

  button_container:{
    backgroundColor: '#4A90E2',
    textAlign:'center',
    padding:20,
    marginBottom:5,
    borderRadius:10,

  },

  button_font_text:{
    color:'#fff',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20,
  },

  text_container: {
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    color: '#4A90E2',
  },

  sub_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: '100%',
  },

  box_container: {
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1, 
    height: 'auto', 
    marginHorizontal: 5, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderColor: '#E0E0E0',
    borderWidth: 1,
  },

  text_font_container: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5, // Added margin for spacing
    textAlign: 'center',
  },

  text_font: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4A90E2',
    textAlign: 'center', // Ensure text is centered
  },

  record_date_container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 20,
  },

  date_text: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },

  expense_income_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 20,
  },

  income_expense: {
    alignItems: 'center',
  },

  expense_label: {
    fontSize: 16,
    color: '#E74C3C',
    fontWeight: '600',
  },

  income_label: {
    fontSize: 16,
    color: '#27AE60',
    fontWeight: '600',
  },

  expense_value: {
    fontSize: 18,
    color: '#E74C3C',
    fontWeight: '700',
  },

  income_value: {
    fontSize: 18,
    color: '#27AE60',
    fontWeight: '700',
  },
});

export default Index;

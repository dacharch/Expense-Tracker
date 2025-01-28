import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Records from '../components/Records';
import { useMyContext } from '../context/AppProvider';
import RecordIcon from '../components/RecordIcon';
import { ScrollView } from 'react-native';

const Index = () => {

  const { income, setIncome, expense, setExpenses, balance, setBalance, selectedIcon, resultOutput } = useMyContext();
  console.log(resultOutput)

  const getDate = () => {
    const event = new Date();
    return event.toDateString();
  }

  useEffect(() => {
    const income = resultOutput.reduce((acc:any, record:any) => {
      return record.currentValue > 0 ? acc + record.currentValue : acc;
    }, 0);

    const expense = resultOutput.reduce((acc:any, record:any) => {
      return record.currentValue < 0 ? acc + record.currentValue : acc;
    }, 0);

    setBalance(income+expense)
    setIncome(income);
    setExpenses(expense);
  }, [resultOutput]);

  return (
    <>
      <View style={styles.container}>
        <View >
          <Text style={styles.text_container}>Money Records</Text>
        </View>

        <View style={styles.sub_container}>

          <View style={styles.box_container}>
            <Text>Expenses</Text>
            <Text>{expense}</Text>
          </View>

          <View style={styles.box_container}>
            <Text>Income</Text>
            <Text>{income}</Text>
          </View>

          <View style={styles.box_container}>
            <Text>Balance</Text>
            <Text>{balance}</Text>
          </View>
        </View>

        {
           selectedIcon?(
            <View style={styles.record_date_container}>
            <View>
              <Text>{getDate()}</Text>
            </View>
            <View style={styles.expense_income_container}>
              <View style={styles.income_expense}>
                <Text>Expense</Text>
                <Text>{expense}</Text>
              </View>
              <View style={styles.income_expense}>
                <Text>Income</Text>
                <Text>{income}</Text>
              </View>
            </View>
          </View>

           ):(
            <>
            </>
           )

        }
       


      </View>
      <View>
        <ScrollView

        >
          {
            selectedIcon ?
              resultOutput.map((item: any) => (
                <Records key={item.id} item={item} />
              ))
              : (
                <RecordIcon />
              )
          }

        </ScrollView>


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
  income_expense:{
   display:'flex',
   flexDirection:'row',
   gap:5,
  },
  text_container: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  record_date_container: {
    backgroundColor: '#fff',
    padding: 5,


    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
  },
  expense_income_container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  sub_container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  box_container: {
    borderColor: 'black'
  },
  records_container: {
    flexDirection: 'column'

  }
})

export default Index;
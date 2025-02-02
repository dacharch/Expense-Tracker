import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';
import { useMyContext } from '../context/AppProvider';
import RecordIcon from '../components/RecordIcon';
import PercentageRecord from '../components/PercentageRecord';

const Analysis = () => {
  const { selectedIcon, resultOutput, income } = useMyContext();

  // Updated object for absolute value
  const updatedObject = resultOutput.map((obj: { [x: string]: any; currentValue: any }) => {
    const { currentValue, ...rest } = obj;
    return {
      ...rest,
      value: Math.abs(currentValue),
    };
  });

  const newUpdate = updatedObject.map((obj: { [x: string]: any; currentValue: any }) => {
    obj.text = income !== 0 ? ((obj.value * 100) / income).toFixed(2) : '100.00';
    return obj;
  });

  const incomeObject = newUpdate.filter((item: { category: string }) => item.category === 'Income');

  return (
    <View style={styles.main_container}>
      <View style={styles.header_container}>
        <Text style={styles.header_text}>Analysis By Chart</Text>
      </View>

      {selectedIcon ? (
        <>
          <View style={styles.chart_container}>
            <PieChart
              showText
              textColor="#fff"
              showValuesAsLabels
              textSize={18}
              data={incomeObject}
              centerLabelComponent={() => <Text style={styles.centerLabel}>{income}</Text>}
              radius={120}
              
            />
          </View>

          <ScrollView style={styles.scrollView}>
            <View style={styles.bottom_container}>
              {incomeObject.map((item: any) => (
                <PercentageRecord key={item.id} item={item} />
              ))}
            </View>
          </ScrollView>
        </>
      ) : (
        <RecordIcon />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
     
  },
  header_container: {
    backgroundColor: '#4A90E2',  
    padding: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  header_text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
  },
  chart_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    width: '90%',
    marginLeft: '5%',
  },
  centerLabel: {
    fontSize: 30,
    fontWeight: '700',
    color: '#FF7043',  // Matching center label color with peachy theme
  },
  scrollView: {
    marginBottom: 20,
  },
  bottom_container: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  // Record item styling (light and clean)
  record_item: {
    backgroundColor: '#FFF3E0',  // Light beige for records
    marginBottom: 15,
    borderRadius: 10,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  record_text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  // Money records (Income in light shades of peach)
  income_record: {
    backgroundColor: '#FFCCBC',  // Light peach for income records
    borderRadius: 10,
    padding: 10,
    color: '#D32F2F',
  },
  expense_record: {
    backgroundColor: '#FFEBEE',  // Light pink for expenses
    borderRadius: 10,
    padding: 10,
    color: '#D32F2F',
  },
  record_value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D32F2F',  // Red for income and expense values
  },
  // Percentage text with light shades
  percentage_text: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FF7043',  // Peachy color for percentage text
  },
});

export default Analysis;

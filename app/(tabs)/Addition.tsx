import React from 'react'
import { Pressable, View } from 'react-native'
import { StyleSheet, Text } from 'react-native'

import IncomeAssets from '../components/IncomeAssets'
import ExpenseAssets from '../components/ExpenseAssets'
import { useMyContext } from '../context/AppProvider'

const Addition = () => {
  const { selected, setSelected } = useMyContext();

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text_container}>Addition</Text>

        <View style={styles.box_container_center}>
          <View style={styles.box_container}>
            <View>
              <Pressable onPress={() => setSelected(!selected)}>
                <Text style={selected ? styles.selectedContainer : styles.unselectedContainer}>Income</Text>
              </Pressable>
            </View>

            <View style={styles.verticleLine} />

            <View>
              <Pressable onPress={() => setSelected(!selected)}>
                <Text style={selected ? styles.unselectedContainer : styles.selectedContainer}>Expense</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>

      <View>
        {selected ? <IncomeAssets /> : <ExpenseAssets />}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4A90E2',  // Dark Blue Background
    textAlign: "center",
    color: 'black',
    paddingVertical: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    marginBottom: 30,
  },

  text_container: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',  // White color for better contrast on dark background
  },

  selectedContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 150,
    backgroundColor: '#4A90E2',  // Red for selected (vibrant and eye-catching)
    color: 'white',
    paddingVertical: 12,
    paddingHorizontal: 25,
    textAlign: 'center',
    borderRadius: 8,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },

  unselectedContainer: {
    fontSize: 20,
    fontWeight: 'bold',
    width: 150,
    paddingVertical: 12,
    paddingHorizontal: 25,
    textAlign: 'center',
    backgroundColor: '#FFF',  // White background for unselected
    color: '#333',  // Dark text for contrast
    borderRadius: 8,
    borderColor: '#B8B8B8',
    borderWidth: 1,
    marginBottom: 5,
  },

  box_container_center: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  verticleLine: {
    height: '80%',
    width: 2,
    backgroundColor: '#000',
    marginHorizontal: 10,
  },

  box_container: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#B8B8B8',
    borderWidth: 1,
    justifyContent: 'space-between',
    width: 350,
    padding: 10,
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 12,
    backgroundColor: '#FFF',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
});

export default Addition;

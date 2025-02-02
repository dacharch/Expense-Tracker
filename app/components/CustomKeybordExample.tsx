import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useMyContext } from "../context/AppProvider";

const CustomKeyboardExample = () => {
  const {
    keyboardVisible,
    setKeyboardVisible,
    inputValue,
    setInputValue,
    setResultOutput,
    selected,
    iconName,
    categoryName
  } = useMyContext();

  const submit_Data = () => {


    if (selected) {
      setResultOutput((prev: any) => [
        ...prev,
        {
          id: Date.now(),
          category: "Income",
          name: categoryName,
          currentValue: Math.abs(Number(inputValue)),
          iconName: iconName
        }
      ]);
      setInputValue('');
    } else {
      setResultOutput((prev: any) => [
        ...prev,
        {
          id: Date.now(),
          category: "Expense",
          name: categoryName,
          currentValue: Math.abs(Number(inputValue)) * -1,
          iconName: iconName,
        }
      ]);
      setInputValue('');
    }
  };

  const handleKeyPress = (key: any) => {
    if (key === "BACKSPACE") {
      setInputValue((prev: string | any[]) => prev.slice(0, -1));
    } else if (key === ".") {
      setInputValue((prev: any) => prev + key);
    } else if (key === "CHECK") {
      if(inputValue !==""){
        setKeyboardVisible(!keyboardVisible)
        submit_Data();
      }
         
        
    } else {
      setInputValue((prev: any) => prev + key);
    }
  };

  return (
    <View style={styles.container}>
      <Modal transparent={true} visible={keyboardVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.inputText}
            placeholder="Here is your Number"
            value={inputValue}
          />
          
          <View style={styles.keyboardContainer}>
            {[
              ["1", "2", "3"],
              ["4", "5", "6"],
              ["7", "8", "9"],
              [".", "0", "BACKSPACE"],
              ["CHECK"],
            ].map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((key) => (
                  <TouchableOpacity
                    key={key}
                    style={styles.key}
                    onPress={() => handleKeyPress(key)}
                  >
                    {key === "BACKSPACE" ? (
                      <Icon name="backspace" size={30} color="#333" />
                    ) : key === "CHECK" ? (
                      <Icon name="check" size={30} color="green" />
                    ) : (
                      <Text style={styles.keyText}>{key}</Text>
                    )}
                  </TouchableOpacity>
                ))}
              </View>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },

  inputText: {
    fontSize: 18,
    color: "#333",
    width: '100%',
    backgroundColor: '#fff',
    textAlign: 'right',
    paddingRight: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginVertical: 0,  // Removed any vertical margin between inputs
    paddingVertical: 10,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  keyboardContainer: {
    backgroundColor: "#fff",
    padding: 20,
  
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  key: {
    flex: 1,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    elevation: 3, // Slight shadow effect for buttons
  },

  keyText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },

  iconButton: {
    padding: 5,
  },
});

export default CustomKeyboardExample;
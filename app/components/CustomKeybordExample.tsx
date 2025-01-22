import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  TextInput
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5'

const CustomKeyboardExample = () => {
  const [keyboardVisible, setKeyboardVisible] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [result,setResult] = useState('') ;

  const handleKeyPress = (key:any) => {
    if (key === "BACKSPACE") {
      setInputValue((prev) => prev.slice(0, -1)); 
    } else if(key ==="."){
         setInputValue((prev)=>prev+key);
    }else if(key ==="Check"){
         setResult(inputValue) 
    }else {
      setInputValue((prev) => prev + key); 
    }

  };

  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        visible={keyboardVisible}
        animationType="slide"
        onRequestClose={() => setKeyboardVisible(false)}
      >
        
        <View style={styles.modalContainer}>
         <TextInput style={styles.inputText} placeholder="Type here your notes" value={inputValue}/>
         <TextInput style={styles.inputText} placeholder="Notes"  />
          <View style={styles.keyboardContainer}>
            {[
              ["1", "2", "3"],
              ["4", "5", "6"],
              ["7", "8", "9"],
              [".", "0", "BACKSPACE"],
              [,"CHECK",],
            ].map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {row.map((key) => (
                  <TouchableOpacity
                    key={key}
                    style={styles.key}
                    onPress={() => handleKeyPress(key)}
                  >
                    {
                        
                        key ==="BACKSPACE" ? (
                            <Icon name="backspace" size={30} />
                         ):
                        key == "CHECK" ?(
                             <Icon name="check" size={30} color="green"/>
                        ):
                        <Text style={styles.keyText}>{key}</Text>

                    }
                    
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
    width:'100%',
    backgroundColor:'#fff',
    textAlign:'right',
    paddingRight:20,
    borderBottomColor:'black',
    borderWidth:1
  },
  iconButton: {
    padding: 5,
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
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  keyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    
  },

 
});

export default CustomKeyboardExample;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import { useMyContext } from '../context/AppProvider';

interface Item {
  id: number;
  category: string;
  name: string;
  currentValue: number;
  iconName: string;
}

interface ItemProps {
  item: Item;
}

const Records: React.FC<ItemProps> = ({ item }) => {
  const { income, expense, iconName } = useMyContext();

  // Function to determine if this record is related to income or expense
  const getIconColor = (value: number) => {
    return value > 0 ? '#27ae60' : '#e74c3c'; // Green for income, Red for expense
  };

  const getTextColor = (value: number) => {
    return value > 0 ? '#27ae60' : '#e74c3c'; // Green for income, Red for expense
  };

  return (
    <View style={styles.record_container}>
      <View style={[styles.icon_container, { borderLeftColor: getIconColor(item.currentValue) }]}>
        <View style={styles.icon_text_container}>
          <View style={styles.icon}>
            {/* Conditionally render the icon based on the name */}
            {item.iconName === 'fast-food' ? (
              <Icon2 name={item.iconName} size={25} color={getIconColor(item.currentValue)} />
            ) : item.iconName === 'sports' ? (
              <Icon4 name={item.iconName} size={25} color={getIconColor(item.currentValue)} />
            ) : item.iconName === 'people' ? (
              <Icon2 name={item.iconName} size={25} color={getIconColor(item.currentValue)} />
            ) : item.iconName === 'wallet' ? (
              <Icon3 name={item.iconName} size={25} color={getIconColor(item.currentValue)} />
            ) : item.iconName === 'business-time' ? (
              <Icon3 name={item.iconName} size={25} color={getIconColor(item.currentValue)} />
            ) : item.iconName === 'gift' ? (
              <Icon3 name={item.iconName} size={25} color={getIconColor(item.currentValue)} />
            ) : item.iconName === 'dollar' ? (
              <Icon3 name={item.iconName} size={25} color={getIconColor(item.currentValue)} />
            ) : (
              <Icon name={item.iconName} size={25} color={getIconColor(item.currentValue)} />
            )}
          </View>
          <View>
            <Text style={[styles.font_text, { color: getTextColor(item.currentValue) }]}>{item.name}</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.amount_text, { color: getTextColor(item.currentValue) }]}>
            {item.currentValue}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  record_container: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    height: 80,
    position: 'relative',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#f9f9f9', // Light background for each record card
    borderRadius: 10,
    elevation: 5, // Shadow for a card-like effect
  },

  icon_container: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: 5, // Left border color to indicate type (Income/Expense)
    backgroundColor: '#ffffff',
    borderRadius: 10,
    paddingVertical: 12,
  },

  icon_text_container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  font_text: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
  },

  amount_text: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    paddingRight: 10,
  },

  icon: {
    borderRadius: '50%',
    backgroundColor: '#dcdcdc',
    padding: 10,
  },
});

export default Records;

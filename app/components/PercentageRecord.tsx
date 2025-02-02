import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

interface Item {
  id: number;
  category: string;
  name: string;
  value: number;
  iconName: string;
  text: number;
}

interface ItemProps {
  item: Item;
}

const PercentageRecord: React.FC<ItemProps> = ({ item }) => {
  // Function to determine if this record is related to income or expense
  const getIconColor = (value: number) => {
    return value > 0 ? '#27ae60' : '#e74c3c'; // Green for income, Red for expense
  };

  const getTextColor = (value: number) => {
    return value > 0 ? '#27ae60' : '#e74c3c'; // Green for income, Red for expense
  };

  return (
    <View style={styles.record_container}>
      <View style={[styles.icon_container, { borderLeftColor: getIconColor(item.value) }]}>
        <View style={styles.icon_text_container}>
          <View style={styles.icon}>
            <Icon
              name={item.iconName}
              size={30}
              color={getIconColor(item.value)}
            />
          </View>
          <View>
            <Text style={[styles.font_text, { color: getTextColor(item.value) }]}>{item.name}</Text>
          </View>
        </View>
        <View>
          <Text style={[styles.amount_text, { color: getTextColor(item.value) }]}>
            {item.text + ' %'}
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

export default PercentageRecord;

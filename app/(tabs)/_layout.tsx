import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#4A90E2', // Active tab icon color
        tabBarInactiveTintColor: '#b0b0b0', // Inactive tab icon color
        headerShown: false, // Hide header
        tabBarStyle: {
          backgroundColor: '#1e1e1e', // Default background color for the tab bar
          borderTopWidth: 0, // Remove the top border
          height: 90, // Increased height to make icons more prominent
          paddingBottom: 15, // Increased bottom padding for better spacing
          paddingTop: 15, // Increased top padding for better spacing
        },
      }}
    >
      {/* Home Tab */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home-sharp' : 'home-outline'}
              color={color}
              size={30} // Icon size for home
              style={{ transform: [{ scale: focused ? 1.2 : 1 }] }} // Scaling effect for focus
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />

      {/* Center Tab: "Add Item" */}
      <Tabs.Screen
        name="Addition"
        options={{
          title: 'Add Item',
          tabBarIcon: ({ color, focused }) => (
            <View
              style={{
                marginTop: -10, // Adjust vertical positioning to avoid clipping
                zIndex: 1, // Bring the central icon forward
              }}
            >
              <Ionicons
                name={focused ? 'add-circle-sharp' : 'add-circle-outline'}
                color={color}
                size={34} // Larger icon for Add Item
                style={{
                  transform: [{ scale: focused ? 1.3 : 1 }], // Scaling effect for focus
                }}
              />
            </View>
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />

      {/* Analysis Tab */}
      <Tabs.Screen
        name="Analysis"
        options={{
          title: 'Analysis',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'stats-chart-sharp' : 'stats-chart-outline'}
              color={color}
              size={30} // Icon size for analysis
              style={{ transform: [{ scale: focused ? 1.2 : 1 }] }} // Scaling effect for focus
            />
          ),
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      />
    </Tabs>
  );
}

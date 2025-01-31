import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {

  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: '#ffd33d',
        headerShown:false,
        headerStyle: {
          backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#fff',
        tabBarStyle: {
        backgroundColor: '#25292e',
        },
      }}
    >
      <Tabs.Screen
        name="index"

        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'receipt-sharp' : 'receipt-outline'} color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="Analysis"
        options={{
          title: 'Analysis',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'analytics-sharp' : 'analytics-sharp'} color={color} size={30}/>
          ),
        }}
      />
     
       <Tabs.Screen
        name="Addition"
        options={{
          title: 'Addition',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'add-circle' : 'add-circle-outline'} color={color} size={30}/>
          ),
        }}
      />    
    </Tabs>
  );
}

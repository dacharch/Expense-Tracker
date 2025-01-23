import { Stack } from 'expo-router';
import { AppProvider } from './context/AppProvider';

export default function RootLayout() {
  return (
   
           <Stack>
           <AppProvider>
           <Stack.Screen name="(tabs)" options={{ headerShown:false }} />
           <Stack.Screen name="+not-found" />
           </AppProvider>
     
    </Stack>
   
  
  );
}

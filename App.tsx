import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Main } from './Main';
import React from 'react';
import HomeScreen from './Screens/HomeScreen';
import CartScreen from './Screens/CartScreen';


const queryClient = new QueryClient();
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <QueryClientProvider client={new QueryClient}>
        <stack.Navigator screenOptions={{
    headerShown: false
  }}>
      <stack.Screen name = "HomeScreen" component = {HomeScreen}/>
      <stack.Screen name = "CartScreen" component = {CartScreen }/>

  </stack.Navigator>
      
      </QueryClientProvider>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({});

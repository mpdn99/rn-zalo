import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import TabBarNavigator from './src/navigation/TabBarNavigator'

export default function App() {
  return (
    <NavigationContainer>
        <TabBarNavigator/>
    </NavigationContainer>
  );
}

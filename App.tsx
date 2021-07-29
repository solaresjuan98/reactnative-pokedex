import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigation/Tabs';
//import { Navigator } from './src/navigation/Navigator';


const App = () => {
  return (
    <NavigationContainer>
      {/* <Navigator /> */}
      <Tabs />
    </NavigationContainer>
  )
}

export default App;
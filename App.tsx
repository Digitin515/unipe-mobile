import React from 'react';
import type {PropsWithChildren} from 'react';
import { View, SafeAreaView, Text, Button, StyleSheet, useColorScheme } from 'react-native';
import SplashScreen from './src/components/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator();
    return (
      
      <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
       <Stack.Screen name='Splash' component={SplashScreen}/>
       </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  whiteText: {
    color: '#fff'
  },
  blackText: {
    color: '#000',
    fontSize: 32
  },
  titleText: {
    fontSize: 40
  }
})

export default App;

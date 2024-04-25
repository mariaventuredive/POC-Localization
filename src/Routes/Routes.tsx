import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginPage';
import ChangeLanguage from '../screens/ChangeLanguage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Language" component={ChangeLanguage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import React from 'react';
import 'react-native-gesture-handler';
import { I18nextProvider } from 'react-i18next';
import i18n from './src/localization/18next/18n.config';
import LoginPage from './src/screens/LoginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LanguageScreen from './src/screens/ChangeLanguage';

export default function App() {

  const Stack = createStackNavigator();

 

    function MyStack() {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={LoginPage} />
          <Stack.Screen name="Language" component={LanguageScreen} />

        </Stack.Navigator>
      );
    }
    return (
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      </I18nextProvider>
    );
  }



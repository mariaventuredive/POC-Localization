import React from 'react';
import {I18nextProvider} from 'react-i18next';
import i18n from './src/localization/18next/18n.config';
import LoginPage from './src/screens/LoginPage';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <LoginPage />
      </NavigationContainer>
    </I18nextProvider>
  );
}

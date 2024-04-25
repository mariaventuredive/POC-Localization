import React from 'react';
import {View, Button} from 'react-native';
import {useTranslation} from 'react-i18next';

const LanguageScreen = () => {
  const {i18n} = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <View>
      <Button title="English" onPress={() => changeLanguage('en')} />
      <Button title="German" onPress={() => changeLanguage('de')} />
      <Button title="Arabic" onPress={() => changeLanguage('ar')} />
      <Button title="French" onPress={() => changeLanguage('fr')} />
      <Button title="Spanish" onPress={() => changeLanguage('es')} />
    </View>
  );
};
export default LanguageScreen;

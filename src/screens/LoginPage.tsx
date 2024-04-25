import React from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

export default function LoginScreen() {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const goToLanguageScreen = () => {
    navigation.navigate('Language');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('title')}</Text>
      <TextInput style={styles.input} placeholder={t('usernamePlaceholder')} />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder={t('passwordPlaceholder')}
      />
      <Button title={t('login')} color="#4a4a4a" />
      <TouchableOpacity
        onPress={goToLanguageScreen}
        style={styles.languageButton}>
        <Text>{t('changeLanguage')}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    width: '100%',
  },
  languageButton: {
    marginTop: 20,
  },
});

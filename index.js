/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import './src/localization/18next/18n.config';
AppRegistry.registerComponent(appName, () => App);

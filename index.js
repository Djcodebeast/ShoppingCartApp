/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';

import Amplify from 'aws-amplify';
import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

AppRegistry.registerComponent(appName, () => App);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler'
import React, { useEffect } from 'react';


import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Router from './src/components/router';
import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports';
import { Notifications } from 'aws-amplify'
import {
  InAppMessagingProvider,
  InAppMessageDisplay
} from 'aws-amplify-react-native';


Amplify.configure(awsconfig)

const { InAppMessaging } = Notifications;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
  };

  useEffect(() => {
    InAppMessaging.syncMessages();
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <InAppMessagingProvider>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Router />
        <InAppMessageDisplay />
      </InAppMessagingProvider>
    </SafeAreaView>
  );
};


export default App;

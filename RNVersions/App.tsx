/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import MyStack from './src/nav/nav';

function App(): React.JSX.Element {
  const backgroundStyle = {
    flex: 1,
    backgroundColor: '#ffffff',
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;

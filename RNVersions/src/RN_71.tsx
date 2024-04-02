//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';

const DATA = [1, 2, 3, 4, 5, 6, 7, 8];
// create a component
const ReactNative71 = () => {
  return (
    <ScrollView style={{}}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          {DATA.map((item, index) => (
            <View key={index} style={styles.box} />
          ))}

          <View>
            <Image
              style={{height: 300, width: 200}}
              // crossOrigin={'use-credentials'}
              source={require('./assets/boy.png')}
              // src="https://reactnative.dev/img/tiny_logo.png"
            />
          </View>

          <TextInput
            style={styles.input}
            enterKeyHint="done"
            autoComplete={'address-line1'}
            multiline
          />

          <Text style={styles.text}>hello</Text>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  box: {
    height: 80,
    width: 80,
    borderWidth: 1,
  },
  text: {
    fontWeight: '700',
    transform: [{rotate: '20deg'}],
    fontVariant: ['small-caps'],
  },
  input: {
    marginTop: 20,
    height: 50,
    width: '80%',
    borderWidth: 1,
  },
});

//make this component available to the app
export default ReactNative71;

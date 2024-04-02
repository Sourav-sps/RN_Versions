//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

// create a component
const ReactNative68 = () => {
  const requestPermission = () => {
    check(PERMISSIONS.IOS.BLUETOOTH)
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            break;
        }
      })
      .catch(error => {
        console.log('error=====>', error);

        // …
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log('Parent Container')}
        style={styles.box}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => console.log('Child Container')}>
            <View style={styles.child}>
              <Text>Child</Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={requestPermission} style={styles.section}>
        <Text style={styles.text}>Bluetooth Permission</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  box: {
    width: '80%',
    height: '20%',
    borderWidth: 1,
    backgroundColor: 'blue',
    overflow: 'hidden',
  },
  child: {
    borderWidth: 1,
    backgroundColor: 'red',
    width: '50%',
    height: 60,
    position: 'absolute',
    top: 100,
  },
  section: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    backgroundColor: 'blue',
  },
  text: {
    color: '#ffffff',
  },
});

//make this component available to the app
export default ReactNative68;

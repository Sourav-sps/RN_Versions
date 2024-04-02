//import liraries
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import PERMISSIONS, {openPhotoPicker, request} from 'react-native-permissions';
import RTNDeviceName from 'rtn-versions/js/NativeGetRNVersions';

// create a component
const ReactNative73 = () => {
  const [result, setResult] = useState<any>(null);
  const requestPermission = async () => {
    request(
      PERMISSIONS.PERMISSIONS.ANDROID.READ_MEDIA_VISUAL_USER_SELECTED,
    ).then(result => {
      console.log('resilt====>', result);

      openPicker();
    });
  };

  const openPicker = () => {
    openPhotoPicker()
      .then(res => {
        console.log('res=====>', res);
      })
      .catch(() => {
        console.warn('Cannot open photo library picker');
      });
  };

  console.log('result===>', result);

  return (
    <View style={styles.container}>
      <Text>{result ?? ''}</Text>
      <TouchableOpacity
        style={{marginVertical: 20}}
        onPress={requestPermission}>
        <Text>Request Photo</Text>
      </TouchableOpacity>

      <Button
        title="Device Model"
        onPress={async () => {
          const value = await RTNDeviceName?.getDeviceModel();
          setResult(value ?? null);
        }}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default ReactNative73;

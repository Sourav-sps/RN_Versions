//import liraries
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// create a component
const Home = () => {
  const {navigate} = useNavigation<any>();
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.section}
            onPress={() => navigate('ReactNative68')}>
            <Text style={styles.textStyle}>v0.68</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.section}
            onPress={() => navigate('ReactNative69')}>
            <Text style={styles.textStyle}>v0.69</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.section}
            onPress={() => navigate('ReactNative70')}>
            <Text style={styles.textStyle}>v0.70</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.section}
            onPress={() => navigate('ReactNative71')}>
            <Text style={styles.textStyle}>v0.71</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.section}
            onPress={() => navigate('ReactNative72')}>
            <Text style={styles.textStyle}>v0.72</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.section}
            onPress={() => navigate('ReactNative73')}>
            <Text style={styles.textStyle}>v0.73</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#316df7',
    marginTop: 20,
    borderRadius: 5,
  },
  textStyle: {
    color: '#ffffff',
    fontSize: 18,
  },
});

//make this component available to the app
export default Home;

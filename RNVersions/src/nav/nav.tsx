import {createStackNavigator} from '@react-navigation/stack';
import ReactNative68 from '../RN_68';
import ReactNative69 from '../RN_69';
import ReactNative70 from '../RN_70';
import ReactNative71 from '../RN_71';
import ReactNative72 from '../RN_72';
import Home from '..';
import ReactNative73 from '../RN_73';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ReactNative68" component={ReactNative68} />
      <Stack.Screen name="ReactNative69" component={ReactNative69} />
      <Stack.Screen name="ReactNative70" component={ReactNative70} />
      <Stack.Screen name="ReactNative71" component={ReactNative71} />
      <Stack.Screen name="ReactNative72" component={ReactNative72} />
      <Stack.Screen name="ReactNative73" component={ReactNative73} />
    </Stack.Navigator>
  );
}

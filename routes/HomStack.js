import { createStackNavigator } from '@react-navigation/stack';
import Login from '../components/Login/Login';
import LoginMenu from '../components/Login/LoginMenu';
import SinginMenu from '../components/Login/singinMenu';
import Home from '../components/Home/Home'
const Stack = createStackNavigator();
import { View, StyleSheet } from 'react-native';

export function HomStack() {
  return (
    <View style={styles.container}>
        <Stack.Navigator initialRouteName="Login"    screenOptions={{
          headerStyle: {
            backgroundColor: 'white',
          },
          headerTintColor: 'black', 
          headerTitleStyle: {
            fontWeight: 'bold', 
          },
        }}>
        <Stack.Screen name="Login" component={Login} options={{ title: 'SLPD' }}/>
        <Stack.Screen name="LoginMenu" component={LoginMenu} options={{ title: 'Back to Home' }} />
        <Stack.Screen name="SinginMenu" component={SinginMenu} options={{ title: 'Back to Home' }} />
        <Stack.Screen name="Home" component={Home} options={{title: 'TA'}} />
        
        </Stack.Navigator>
    </View>
    
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#040404',
    },
  });
  
import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import * as Font from 'expo-font';
import LoginStyles from '../../assets/css/LoginStyles';
import Logo from '../../assets/images/logo.png'
const Login = ({ navigation }) => {
  const [LoginbuttonPressed, setLoginButtonPressed] = useState(false);
  const [RegisterbuttonPressed, setRegisterButtonPressed] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'AntonSC-Regular': require('../../assets/fonts/AntonSC-Regular.ttf')
      });
      setFontsLoaded(true);
    };

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={LoginStyles.body}>
      <Image source={Logo} style={LoginStyles.logo} />
      <Text style={LoginStyles.title}>TA</Text>
      <Text style={LoginStyles.subText}>TA</Text>
      <View style={LoginStyles.buttonLayout}>
        <Pressable  
          style={[LoginStyles.signinButton, LoginbuttonPressed && LoginStyles.buttonPressed]} 
          onPressIn={() => setLoginButtonPressed(true)}
          onPressOut={() => setLoginButtonPressed(false)}
          onPress={() => navigation.navigate("LoginMenu")}
        >
          <Text style={[LoginStyles.text, LoginbuttonPressed && LoginStyles.textPressed ]}>Sign In</Text>
        </Pressable>

        <Pressable 
          style={[LoginStyles.registerButton, RegisterbuttonPressed && LoginStyles.buttonPressed]} 
          onPressIn={() => setRegisterButtonPressed(true)}
          onPressOut={() => setRegisterButtonPressed(false)}
          onPress={() => navigation.navigate("SinginMenu")}
        >
          <Text style={[LoginStyles.text, RegisterbuttonPressed && LoginStyles.textPressed ]}>Register</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;

import { StyleSheet } from "react-native";


const LoginStyles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 50
      
    },
    title: {
      color: 'black',
      fontSize: 40,
      textAlign: 'center',
      fontFamily: 'AntonSC-Regular', 
    },
    signinButton: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      alignItems: 'center',
      width: 300,
      marginTop: 10,
      borderRadius: 25,
      backgroundColor: 'purple'
    },
    registerButton: {
      borderWidth: 1,
      borderColor: 'black',
      padding: 10,
      alignItems: 'center',
      width: 300,
      marginTop: 20,
      borderRadius: 25,
      backgroundColor: 'purple'
    },
    buttonLayout: {
      marginTop: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonPressed: {
      backgroundColor: '#D5D426',
    },
    text: {
      fontFamily: 'AntonSC-Regular', 
      fontSize: 18,
      color: 'black',
    },
    textPressed: {
      color: 'black',
    },
    logo: {
      width: 100,
      height: 100,
      
    },
    subText: {
      fontWeight: 'bold'
    },
    btn: {
      marginTop: 10
    }
  });

export default LoginStyles;
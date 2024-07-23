import { StyleSheet } from "react-native";


const LoginMenuStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    },
    text: {
        color: '#D5D426',
        marginTop: 10,
        fontSize: 16,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#D5D426',
        width: 300,
        height: 50,
        marginTop: 20,
        paddingHorizontal: 10,
        color: 'black',
    },
});

export default LoginMenuStyles;
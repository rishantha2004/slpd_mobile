import { StyleSheet } from "react-native";


const SinginMenuStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
    },
    logo: {
        height: 110,
        width: 110,
        marginTop: 50
    },
    text: {
        color: 'black',
        marginTop: 100,
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'bold',
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'purple',
        width: 300,
        height: 50,
        marginTop: 40,
        color: 'black',
        borderRadius: 10,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },
    btn: {
        marginTop: 20,
    }
});

export default SinginMenuStyles;

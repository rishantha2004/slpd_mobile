import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
      },
      text: {
        fontWeight: 'bold',
        fontSize: 30,
        alignContent: 'center',
      },
      form: {
        marginTop: 50,
        width: 380,
        height: 600,
        backgroundColor: 'gray',
      },
      formText: {
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 32,
        fontWeight: 'bold'
      }
})

export default HomeStyles;
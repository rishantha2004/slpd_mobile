import React, { useState } from 'react';
import { View, TextInput, Button, Text, Alert } from 'react-native';
import axios from 'axios';
import LoginMenuStyles from '../../assets/css/LoginMenuStyles';
import { BASE_URL } from '../../environment';

const LoginMenu = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

        const handleFormSubmit = async () => {
            try {
                const response = await axios.post(`https://probable-yovonnda-ceylonis-a9d24c73.koyeb.app/api/user-login`, { firstName, password });
                console.log(response)

                    Alert.alert('Login Successful');
                    navigation.navigate("Home", {name: firstName});
                
            } catch (error) {
                console.error('AxiosError:', error);
              
                setError('Invalid username or password');
            }
        };
    

    return (
        <View style={LoginMenuStyles.container}>
            <TextInput
                style={LoginMenuStyles.textInput}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}
            />
            <TextInput
                style={LoginMenuStyles.textInput}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
           
            />
            {error ? <Text style={LoginMenuStyles.errorText}>{error}</Text> : null}
            <Button title="Login" onPress={handleFormSubmit} />
        </View>
    );
};

export default LoginMenu;

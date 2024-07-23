import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert, Image } from 'react-native';
import { Formik } from 'formik';
import axios from 'axios';
import SinginMenuStyles from '../../assets/css/SingingMenuStyles';
import BASE_URL from '../../environment'
const SinginMenu = ({ navigation }) => {
   

    
    const handleFormSubmit = async (values) => {
        try {
            const response = await axios.post(`https://probable-yovonnda-ceylonis-a9d24c73.koyeb.app/api/register`, values);
            if (response.status === 200) {
                Alert.alert('Successfully registered!');
                navigation.navigate("LoginMenu");
            }
            console.log(response.data);
        } catch (error) {
            Alert.alert('Error!');
        }
    };

   

    return (
        <View style={SinginMenuStyles.container}>
         
            <View>
           
                <Text style={SinginMenuStyles.text}>
                    {userData}
                </Text>
                <Formik initialValues={{ firstName: '', lastName: '', password: '' }}
                    onSubmit={(values) => {
                        handleFormSubmit(values)
                    }}
                >
                    {(props) => (
                        <View>
                            <TextInput
                                style={SinginMenuStyles.textInput}
                                placeholder='First Name'
                                onChangeText={props.handleChange('firstName')}
                                value={props.values.firstName}
                            />
                            <TextInput
                                style={SinginMenuStyles.textInput}
                                placeholder='Last Name'
                                onChangeText={props.handleChange('lastName')}
                                value={props.values.lastName}
                            />
                            <TextInput
                                style={SinginMenuStyles.textInput}
                                placeholder='Password'
                                secureTextEntry={true}
                                onChangeText={props.handleChange('password')}
                                value={props.values.password}
                            />

                            <Button title='Submit' color='maroon' onPress={props.handleSubmit} style={SinginMenuStyles.btn} />
                        </View>
                    )}
                </Formik>
            </View>
        </View>
    );
};

export default SinginMenu;

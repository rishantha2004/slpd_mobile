import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Alert } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import moment from 'moment';
import axios from 'axios';
import BASE_URL from '../../environment';

const Home = ({ route }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  // Simple regex for validating phone numbers (example: Sri Lankan numbers)
  const validatePhoneNumber = (text) => {
    const phoneRegex = /^\+94\d{9,10}$/; // Adjust regex based on your requirements
    if (phoneRegex.test(text)) {
      setError('');
      return true;
    } else {
      setError('Invalid phone number');
      return false;
    }
  };

  const handlePhoneChange = (text) => {
    setPhone(text);
    validatePhoneNumber(text); // Validate as user types
  };

  const { name } = route.params;

  const handleFormSubmit = async () => {
    if (!validatePhoneNumber(phone)) return; // Ensure phone is valid before submitting

    try {
      const response = await axios.post(`https://probable-yovonnda-ceylonis-a9d24c73.koyeb.app/api/cases/add-cases`, {
        firstName,
        lastName,
        address,
        phoneNumber: phone,
        description
      });
      Alert.alert('Success', 'New case added!');
      console.log(response.data);
    } catch (error) {
      console.error('AxiosError:', error);
      setError('Error submitting the form. Please try again.');
    }
  };

  const getGreeting = () => {
    const currentHour = moment().hour();
    if (currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const currentDate = moment().format('MMMM Do YYYY');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Test App</Text>
      <Text style={styles.date}>{currentDate}</Text>
      <Text style={styles.greeting}>{getGreeting()} {name}</Text>
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={text => setFirstName(text)}
        style={styles.input}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={text => setLastName(text)}
        style={styles.input}
      />
      <TextInput
        label="Address"
        value={address}
        onChangeText={text => setAddress(text)}
        style={styles.input}
      />
      <TextInput
        value={phone}
        onChangeText={handlePhoneChange}
        style={styles.input}
        keyboardType="phone-pad"
        placeholder="Enter phone number"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        label="Description"
        value={description}
        onChangeText={text => setDescription(text)}
        style={styles.input}
        multiline
      />
      <Button mode="contained" onPress={handleFormSubmit} style={styles.button}>
        Submit
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  date: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
  },
  greeting: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 16,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  }
});

export default Home;

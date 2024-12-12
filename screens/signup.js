import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import Logo from '../components/logo';

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo source={require('../assets/logo.jpeg')} />

      <Text style={styles.title}>Welcome to Smart Carpool</Text>
      <Text style={styles.subtitle}>Sign Up to continue</Text>

      <InputField placeholder="Name" />
      <InputField placeholder="Email" />
      <InputField placeholder="Phone Number" secureTextEntry />
      <InputField placeholder="Password" secureTextEntry />

      <Button text="Sign Up" onPress={() => navigation.navigate('Home')} />
      <Button
        text="Sign in with Google"
        onPress={() => alert('Google Sign Up pressed')}
        style={styles.googleButton}
        textStyle={styles.googleText} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    padding: 20,
    alignItems: 'center',
    marginTop:20
  },
  container2: {
    backgroundColor: '#F5F3FF',
    marginTop:20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  googleButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  googleText: {
    color: '#333',
  },
  loginText: {
    color: '#4A90E2',
    marginTop: 10,
    fontSize: 14,
  },
});

export default SignupScreen;

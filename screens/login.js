import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import InputField from '../components/InputField';
import LinkButton from '../components/LinkButton';
import Logo from '../components/logo';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Logo source={require('../assets/logo.jpeg')} />
      <Text style={styles.welcomeText}>Welcome to Smart Carpool</Text>
      <Text style={styles.subText}>Log in to continue</Text>

      <InputField placeholder="Email" />
      <InputField placeholder="Password" secureTextEntry />

      <LinkButton text="Forget Password?" style={styles.forgetPassword} />
      <Button text="Log In" onPress={() =>  navigation.navigate('Home')} />

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don’t have an account? </Text>
        <LinkButton
          text="Sign Up"
          onPress={() => navigation.navigate('SignUp')} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#707070',
    marginBottom: 20,
  },
  forgetPassword: {
    textAlign: 'right',
    marginLeft: 240,
    fontSize: 14,
    color: '#707070',
    marginBottom: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#707070',
  },
});

export default LoginScreen;
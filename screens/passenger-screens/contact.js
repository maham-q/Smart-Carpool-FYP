import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';
import CustomInput from '../../components/CustomInput';
import InputField from '../../components/InputField';

const ContactUsScreen = () => {
  const navigation = useNavigation();
  const handleSendMessage = () => {
    console.log('Message sent');
  };

  return (
    <><View style={styles.container3}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#EDE9F6" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Contact Us</Text>
      </View>
    </View>
    <ScrollView contentContainerStyle={styles.container}>
        <View>
          <InputField
            label="First Name"
            placeholder="Enter your first name"
            style={styles.input} />
          <InputField
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
            style={styles.input} />
          <InputField
            label="Phone Number"
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            style={styles.input} />
          <CustomInput
            label="Query"
            placeholder="Enter your query"
            multiline={true}
            style={[styles.textArea, styles.input]} />
          <View style={styles.button}>
          <Button text="Send Message" onPress={handleSendMessage} />
          </View>
        </View>
      </ScrollView></>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#EDE9F6',
  },
  container3:{
    flex: 1,
    backgroundColor: '#EDE9F6',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20,
    marginBottom: 20,
    borderWidth:1,
    height:45,
    backgroundColor:'#3B3B98',
    borderRadius: 6,
  },
  backButton: {
    marginRight: 15,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EDE9F6',
    marginLeft:90,
  },
  input: {
    marginBottom: 30,
  },
  textArea: {
    height: 200,
  },
  button: {
    width:378,
  },
  
});


export default ContactUsScreen;

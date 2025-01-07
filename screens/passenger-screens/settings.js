import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Button from "../../components/Button";

const SettingsScreen = () => {
    const navigation = useNavigation();
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <>
        <View style={styles.container2}>
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.backButton}
            >
              <MaterialIcons name="arrow-back" size={24} color="#EDE9F6" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Settings</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.profileSection}>
            <Image
              style={styles.profilePicture}
              source={""} 
            />
            <TouchableOpacity>
              <Text style={styles.changeText}>Change Profile Picture</Text>
            </TouchableOpacity>
          </View>
  
          <TextInput
            style={styles.input}
            placeholder="Full name"
            value={fullName}
            onChangeText={setFullName}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={phone}
            onChangeText={setPhone}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
          />
          <View style={styles.container3}>
            <Button text="Save"/>
          </View>
        </View>
      </>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexGrow: 1,
      padding: 30,
      backgroundColor: "#EDE9F6",
    },
    container2: {
      flex: 1,
      backgroundColor: "#EDE9F6",
      paddingHorizontal: 15,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 1,
      height: 45,
      backgroundColor: "#3B3B98",
      borderRadius: 6,
    },
    backButton: {
      marginRight: 15,
    },
    headerText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#EDE9F6",
      marginLeft: 110,
    },
    profileSection: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    profilePicture: {
      width: 150,
      height: 150,
      borderRadius: 80,
      backgroundColor: "#ccc",
      marginRight: 15,
    },
    changeText: {
      color: "#007AFF",
      fontSize: 16,
    },
    input: {
      width: "100%",
      height: 50,
      backgroundColor: "#fff",
      borderRadius: 8,
      paddingHorizontal: 15,
      marginVertical: 10,
      fontSize: 16,
      borderWidth: 1,
      borderColor: "#ddd",
    },
    button: {
      backgroundColor: "#3B3B98",
      borderRadius: 8,
      paddingVertical: 20,
    },
    buttonText: {
      color: "#FFFFFF",
      fontWeight: "bold",
      fontSize: 16,
      textAlign: "center",
    },
    container3:{
        marginTop:20,
        width:378
    }
  });
  
  export default SettingsScreen;
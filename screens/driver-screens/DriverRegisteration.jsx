import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { globalColors } from "../../constants/colors";

const options = [
  { id: "1", title: "Car", icon: require("../../assets/pictures/car-icon.png") },
  {
    id: "2",
    title: "Rickshaw",
    icon: require("../../assets/pictures/rickshaw-icon.png"),
  },
  { id: "3", title: "Moto", icon: require("../../assets/pictures/moto-icon.png") },
];

export default function DriverRegistration({ navigation }) {
  function navigationHandler(vehicleType) {
    navigation.navigate("details", { vehicleType });
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigationHandler(item.title)}
      style={styles.optionContainer}
    >
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.optionText}>{item.title}</Text>
      <Text style={styles.arrow}>&gt;</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={options}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    backgroundColor: globalColors.violetBlue,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    color: "#fff",
    fontSize: 16,
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    padding: 12,
    borderWidth: 2,
    borderColor: "#000000",
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    marginRight: 16,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: "#000",
  },
  arrow: {
    fontSize: 18,
    color: "green",
  },
  list: {
    marginTop: 16,
  },
});

import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { globalColors } from "../constants/colors";

export default function RegistrationItem({ item , navigation }) {
  function navigateHandler(){
    let route;
    switch(item.title){
      case 'Basic info': {
        route = 'basicInfo'
        break;
      }
      case 'CNIC': {
        route = 'cnic'
        break;
      }
      case 'Selfie with ID':{
        route = 'driverId';
        break;
      }
      case 'Vehicle Info':{
        route = 'vehicleInfo'
        break;
      }
      default: {
        route = 'invalid'
        break;
      }
    }
    navigation.navigate(route);
  }

  return (
    <TouchableOpacity style={styles.itemContainer} onPress={navigateHandler}>
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        {item.description ? (
          <Text style={styles.itemDescription}>{item.description}</Text>
        ) : null}
      </View>
      <Text style={styles.itemIcon}>{item.icon}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: globalColors.cornFlower,
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    color: "#000",
  },
  itemDescription: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
  itemIcon: {
    fontSize: 18,
    color: "green",
  },
});

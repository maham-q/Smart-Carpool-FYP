import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { globalColors } from "../../constants/colors";
import RegistrationItem from "../../components/RegisterationItem";

const data = [
  { id: "1", title: "Basic info", description: "", icon: ">" , route: 'basicInfo'},
  { id: "2", title: "CNIC", description: "", icon: ">" , route: 'cnic'},
  { id: "3", title: "Selfie with ID", description: "", icon: ">" , route: 'driverId'},
  { id: "4", title: "Vehicle Info", description: "", icon: ">" , route: 'vehicleinfo' },
];

export default function RegistrationDetails({ navigation , route }) {
  // const vehicle = (route.params?.vehicleType).toLowerCase();

  function submitHandler(){
    navigation.navigate('thankyou')
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <RegistrationItem item={item} navigation={navigation}/>
          )}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
        <TouchableOpacity style={styles.doneButton} onPress={submitHandler}>
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          By tapping <Text style={styles.bold}>"Submit"</Text> you agree with
          our <Text style={styles.link}>Terms and Conditions</Text> and{" "}
          <Text style={styles.link}>Privacy Policy</Text>.
        </Text>
      </View>
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
    fontSize: 20,
    fontWeight: "bold",
  },
  closeButton: {
    color: "#fff",
    fontSize: 16,
  },
  content: {
    flex: 1,
    justifyContent: "flex-start",
  },
  listContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  doneButton: {
    backgroundColor: globalColors.violetBlue,
    borderRadius: 24,
    paddingVertical: 12,
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 16,
  },
  doneButtonText: {
    fontSize: 16,
    color: "#fff",
  },
  footer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#f2f2f2",
  },
  footerText: {
    fontSize: 14,
    color: "#888",
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
  },
  link: {
    color: globalColors.cornFlower,
    textDecorationLine: "underline",
  },
});

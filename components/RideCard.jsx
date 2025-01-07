import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-elements";
import { globalColors } from "../constants/colors";


function RideCard({ data , nextNavigation , backNavigation }) {
  return (
    <>
      <View key={data.id} style={styles.requestCard}>
        <View style={styles.header}>
          <Image
            style={styles.profilePic}
            source={{ uri: "https://via.placeholder.com/50" }}
          />
          <Text style={styles.personText}>{data.person}</Text>
          <View>
            <Text style={styles.distanceText}>{data.distance}</Text>
            <Text style={styles.timeText}>{data.time}</Text>
          </View>
        </View>
        <Text style={styles.pickUpText}>
          <Text style={styles.boldText}>Pick Up: </Text>
          {data.pickUp}
        </Text>
        <Text style={styles.dropOffText}>
          <Text style={styles.boldText}>Drop Off: </Text>
          {data.dropOff}
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Decline"
            buttonStyle={styles.declineButton}
            onPress={backNavigation}
          />
          <Button
            title="Accept"
            buttonStyle={styles.acceptButton}
            onPress={nextNavigation}
          />
        </View>
      </View>
    </>
  );
}

export default RideCard;
const styles = StyleSheet.create({
  requestCard: {
    backgroundColor: globalColors.lavender,
    borderRadius: 10,
    padding: 30,
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    borderWidth: 2,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  profilePic: {
    width: 60,
    height: 60,
    borderRadius: 45,
    backgroundColor: "#e0e0e0",
  },
  personText: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 50,
  },
  distanceText: {
    fontSize: 18,
    color: "#000000",
  },
  timeText: {
    fontSize: 16,
    color: "#777",
  },
  pickUpText: {
    marginTop: 10,
    fontSize: 14,
  },
  dropOffText: {
    fontSize: 14,
  },
  boldText: {
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  declineButton: {
    backgroundColor: "#ff4d4d",
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  acceptButton: {
    backgroundColor: "#4CAF50",
    borderRadius: 5,
    paddingHorizontal: 20,
  },
});

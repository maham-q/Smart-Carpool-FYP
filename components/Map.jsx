import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function Map() {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 31.5204,
        longitude: 74.3587,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      
      <Marker
        coordinate={{ latitude: 31.5204, longitude: 74.3587 }}
        title="Pickup Point"
        description="University of Central Punjab"
      />
    </MapView>
  );
}
const styles = StyleSheet.create({
  map: {
    flex: 1.5
  }
})
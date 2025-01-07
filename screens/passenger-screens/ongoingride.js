import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert, Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const OngoingRideScreen = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);

  const rideData = {
    driverName: "Arshad Kamal",
    car: {
      name: "Toyota Corolla",
      color: "White",
      number: "XYZ 1234",
    },
    pickup: "123 Y Block Lahore",
    dropoff: "Fast Nuces Lahore",
    price: "PKR 550",
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Location Error', 'Permission to access location was denied.');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    });

    // const timer = setTimeout(() => {
    //   Alert.alert(
    //     "Ride Completed",
    //     "Thank you for riding with us!",
    //     [
    //       {
    //         text: "Write a Review",
    //         onPress: () => navigation.navigate('Review'),
    //       },
    //     ]
    //   );
    // }, 5000);
    // return () => clearTimeout(timer);
  }, [navigation]);

  const handleCancelRide = () => {
    Alert.alert(
      "Ride Cancelled",
      "Your ride has been cancelled.",
      [{ text: "OK", onPress: () => navigation.navigate('Home') }]
    );
  };

  const handleContactDriver = () => {
    const driverContact = "123-456-7890";
    Alert.alert(
      "Contact Driver",
      `You can contact the driver at: ${driverContact}`,
      [{ text: "OK" }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        {currentLocation ? (
          <MapView
            style={StyleSheet.absoluteFillObject}
            initialRegion={currentLocation}
          >
            <Marker coordinate={currentLocation} title="Current Location" />
          </MapView>
        ) : (
          <Text style={styles.loadingText}>Loading current location...</Text>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.detailsContainer}>
        <Text style={styles.title}>Ride Details</Text>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Driver Name</Text>
          <Text style={styles.infoValue}>{rideData.driverName}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Car</Text>
          <Text style={styles.infoValue}>
            {rideData.car.name} ({rideData.car.color}) - {rideData.car.number}
          </Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Pickup Location</Text>
          <Text style={styles.infoValue}>{rideData.pickup}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Dropoff Location</Text>
          <Text style={styles.infoValue}>{rideData.dropoff}</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoLabel}>Price</Text>
          <Text style={styles.infoValue}>{rideData.price}</Text>
        </View>
      </ScrollView>

      <View style={styles.buttonsContainer}>
        <Button title="Contact Driver" onPress={handleContactDriver} style={styles.button} />
        <Button title="Cancel Ride" onPress={handleCancelRide} style={styles.button}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  mapContainer: {
    flex: 1,
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  loadingText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#374151',
  },
  detailsContainer: {
    flex: 2,
    padding: 20,
    backgroundColor: '#E5E7EB',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginBottom: 15,
    textAlign: 'center',
  },
  infoBox: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  infoLabel: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6B7280',
  },
  infoValue: {
    fontSize: 12,
    fontWeight: '600',
    color: '#374151',
    marginTop: 5,
  },
  buttonsContainer: {
    padding: 10,
    flexDirection: 'row', 
    justifyContent: 'space-around',  
    alignItems: 'center',  
  },
  button: {
    width: '93%',
    height: 50,
    backgroundColor: '#4A56E2',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  
});

export default OngoingRideScreen;

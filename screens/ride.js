import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location'; // Added import
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Button from '../components/Button';
import InputField from '../components/InputField';

const RequestRideScreen = ({ navigation }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [activeMode, setActiveMode] = useState('Carpool');
  const [selectedRideOption, setSelectedRideOption] = useState(null);
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [fare, setFare] = useState('');
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Error', 'Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setCurrentLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  const handleNextPress = () => {
    if (!pickup || !dropoff || !fare || !selectedRideOption || !currentLocation) {
      Alert.alert('Error', 'Please fill out all fields, select a ride option, and allow location access.');
      return;
    }

    const rideData = {
      mode: activeMode,
      rideType: selectedRideOption,
      pickup,
      dropoff,
      fare,
      location: currentLocation,
    };

    if (activeMode === 'Carpool') {
      navigation.navigate('CarpoolRide', { rideData });
    } else {
      navigation.navigate('SingleRide', { rideData });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Menu')}
        style={styles.menuIcon}
      >
        <MaterialIcons name="menu" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.mapContainer}>
        {currentLocation ? (
          <MapView style={StyleSheet.absoluteFillObject} initialRegion={currentLocation}>
            <Marker coordinate={currentLocation} title="Current Location" />
            {destination && <Marker coordinate={destination} title="Destination" />}
          </MapView>
        ) : (
          <Text>Loading current location...</Text>
        )}
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.rideOptionsContainer}
        showsHorizontalScrollIndicator={false}
      >
        {[{ id: 'ac', label: 'Ride A/C', iconName: 'air' }, { id: 'economy', label: 'Economy', iconName: 'directions-car' }, { id: 'rickshaw', label: 'Rickshaw', iconName: 'local-taxi' }, { id: 'bike', label: 'Bike', iconName: 'pedal-bike' }].map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[styles.rideOption, selectedRideOption === option.id && styles.selectedRideOption]}
            onPress={() => setSelectedRideOption(option.id)}
          >
            <MaterialIcons
              name={option.iconName}
              size={25}
              color={selectedRideOption === option.id ? '#1E40AF' : '#374151'}
            />
            <Text style={[styles.rideLabel, selectedRideOption === option.id && styles.selectedRideLabel]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.modeToggleContainer}>
        {['Carpool', 'Single'].map((mode) => (
          <TouchableOpacity
            key={mode}
            style={[styles.checkboxContainer, activeMode === mode && styles.checked]}
            onPress={() => setActiveMode(mode)}
          >
            <Text style={[styles.checkboxLabel, activeMode === mode && styles.activeCheckboxLabel]}>
              {mode} Mode
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <InputField
          placeholder="From"
          value={pickup}
          onChangeText={(text) => setPickup(text)}
        />
        <InputField
          placeholder="To"
          value={dropoff}
          onChangeText={(text) => {
            setDropoff(text);
            setDestination({ latitude: 40.712776, longitude: -74.005974 });
          }}
        />
        <InputField
          placeholder="Offer your fare in PKR"
          keyboardType="numeric"
          value={fare}
          onChangeText={(text) => setFare(text)}
        />
      </View>
      <Button text="Next" onPress={handleNextPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 1,
  },
  mapContainer: {
    flex: 8,
    marginBottom: 10,
  },
  rideOptionsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  rideOption: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#E5E7EB',
    borderRadius: 10,
  },
  selectedRideOption: {
    backgroundColor: '#BFDBFE',
  },
  rideLabel: {
    marginTop: 5,
    fontSize: 14,
    color: '#374151',
  },
  selectedRideLabel: {
    color: '#1E40AF',
    fontWeight: 'bold',
  },
  modeToggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  checkboxContainer: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#E5E7EB',
  },
  checked: {
    backgroundColor: '#BFDBFE',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#374151',
  },
  activeCheckboxLabel: {
    color: '#1E40AF',
    fontWeight: 'bold',
  },
  inputContainer: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
});

export default RequestRideScreen;

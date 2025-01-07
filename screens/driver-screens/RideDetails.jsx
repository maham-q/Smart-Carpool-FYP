import React, { useRef, useState, useEffect } from 'react';
import { ActivityIndicator , View, Text, StyleSheet, TextInput, TouchableOpacity, Animated, Dimensions, PanResponder } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import { globalColors } from '../../constants/colors';

const { height: screenHeight } = Dimensions.get('window');

const RideDetails = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const animatedHeight = useRef(new Animated.Value(screenHeight * 0.5)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy < 0) {
          Animated.timing(animatedHeight, {
            toValue: screenHeight * 0.25,
            duration: 300,
            useNativeDriver: false,
          }).start();
        } else if (gestureState.dy > 0) {
          Animated.timing(animatedHeight, {
            toValue: screenHeight * 0.5,
            duration: 300,
            useNativeDriver: false,
          }).start();
        }
      },
    })
  ).current;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords);
    })();
  }, []);

  function returnToHomepage(){
    navigation.replace('drawer')
  }

  function finishRideHandler(){
    
  }

  function checkNewRequestsHandler(){
    navigation.navigate('requests')
  }

  if (!location) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Map View */}
      <MapView
        {...panResponder.panHandlers}
        style={styles.mapView}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01, // Zoom level
          longitudeDelta: 0.01, // Zoom level
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Your Location"
        />
      </MapView>

      {/* Carpool Ride Details */}
      <Animated.View style={[styles.detailsContainer, { height: animatedHeight }]}>
        <View contentContainerStyle={styles.scrollContent}>
          <View style={styles.card}>
            <Text style={styles.heading}>Carpool Ride Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Dummy Pickup"
              editable={false}
            />
            <TextInput
              style={styles.input}
              placeholder="Dummy Drop off"
              editable={false}
            />
            <View style={styles.infoRow}>
              <Text style={styles.label}>PKR</Text>
              <Text style={styles.value}>1000</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Psgs.</Text>
              <Text style={styles.value}>3 people</Text>
            </View>

            <View style={styles.btnContainer}>
              <TouchableOpacity style={[styles.checkRequestsButton , styles.customBtn , styles.accept]}>
                <Text style={styles.checkRequestsText}>Finish Ride</Text>
              </TouchableOpacity>

              <TouchableOpacity style={[styles.checkRequestsButton , styles.customBtn]} onPress={checkNewRequestsHandler}>
                <Text style={styles.checkRequestsText}>Check new requests</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={[styles.checkRequestsButton , styles.cancel]} onPress={returnToHomepage}>
              <Text style={styles.checkRequestsText}>Cancel Ride</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapView: {
    flex: 1,
  },
  btnContainer:{
    flexDirection: 'row',
    alignItems: 'space-around',
    justifyContent: 'space-around' 
  },  
  customBtn:{
    width: '150'
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  detailsContainer: {
    backgroundColor: globalColors.violetBlue,
    padding: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 10,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#eae8fe',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 2,
    borderColor: '#00000'
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#365df2',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  value: {
    fontSize: 16,
    color: '#555',
  },
  checkRequestsButton: {
    backgroundColor: '#365df2',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    borderWidth: 2,
    borderColor: 'black'
  },
  checkRequestsText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  loadingText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  cancel:{
    backgroundColor: 'red'
  },
  accept:{
    backgroundColor: 'green'
  }
});

export default RideDetails;

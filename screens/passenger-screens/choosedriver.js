import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Button from '../../components/Button';

const mockData = [
  { id: '1', time: '10 min', distance: '5 km', price: 'PKR 500', driverName: 'Ali', carName: 'Toyota Corolla', carNumber: 'ABC 123' },
  { id: '2', time: '3 min', distance: '0.8 km', price: 'PKR 150', driverName: 'Sara', carName: 'Honda Civic', carNumber: 'XYZ 456' },
  { id: '3', time: '5 min', distance: '1 km', price: 'PKR 200', driverName: 'Usman', carName: 'Suzuki Swift', carNumber: 'LMN 789' },
];

const RideRequestCard = ({ time, distance, price, driverName, carName, carNumber, onAccept, onDecline }) => (
  <View style={styles.card}>
    <View style={styles.detailsContainer}>
      <Text style={styles.driverText}>Driver: {driverName}</Text>
      <Text style={styles.carText}> {carName} ({carNumber})</Text>
    </View>
    <View style={styles.infoContainer}>
      <Text style={styles.infoText}>{distance} Away</Text>
      <Text style={styles.infoText}>{time}</Text>
      <Text style={styles.priceText}>{price}</Text>
    </View>
    
    <View style={styles.buttonContainer}>
      <Button
        text="Decline"
        onPress={onDecline}
        style={[styles.button, styles.declineButton]}
        textStyle={styles.buttonText}
      />
      <Text></Text>
      <Button
        text="Accept"
        onPress={onAccept}
        style={[styles.button, styles.acceptButton]}
        textStyle={styles.buttonText}
      />
    </View>
  </View>
);

const ChooseDriverScreen = () => {
  const navigation = useNavigation();

  const handleAccept = (id) => {
    Alert.alert('Ride Request', `Accepted request with id: ${id}`);
    navigation.navigate('OngoingRide'); 
  };

  const handleDecline = (id) => {
    Alert.alert('Ride Request', `Declined request with id: ${id}`);
  };

  return (
    <><View style={styles.container3}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#EDE9F6" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Choose a Driver</Text>
      </View>
    </View><FlatList
        data={mockData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RideRequestCard
            driverName={item.driverName}
            carName={item.carName}
            carNumber={item.carNumber}
            time={item.time}
            distance={item.distance}
            price={item.price}
            onAccept={() => handleAccept(item.id)}
            onDecline={() => handleDecline(item.id)} />
        )}
        contentContainerStyle={styles.container} /></>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#F3F4F6',
  },
  container3: {
    flex: 1,
    backgroundColor:  '#F3F4F6',
    paddingHorizontal: 15,
    paddingTop: 10,
},
header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    height: 45,
    backgroundColor: '#3B3B98',
    borderRadius: 6,
},
backButton: {
    marginRight: 15,
},
headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EDE9F6',
    marginLeft: 75,
},
  card: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 16,
    color: '#374151',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  driverText: {
    fontSize: 16,
    color: '#4B5563',
    fontWeight:'bold'
  },
  carText: {
    fontSize: 16,
    color: '#4B5563',
    fontWeight:'bold'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 190,
    marginTop: 20,
  },
  declineButton: {
    backgroundColor: '#EF4444',
  },
  acceptButton: {
    backgroundColor: '#10B981',
  },
  buttonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default ChooseDriverScreen;

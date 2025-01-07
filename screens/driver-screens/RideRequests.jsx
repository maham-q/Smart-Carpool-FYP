import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { globalColors } from '../../constants/colors';
import RideCard from '../../components/RideCard';

// Replace with data from db
const requests = [
  {
    id: 1,
    person: 'Person 1',
    distance: '5km Away',
    time: '10 min',
    pickUp: 'FAST NUCES',
    dropOff: 'Liberty Market',
  },
  {
    id: 2,
    person: 'Person 2',
    distance: '0.8km Away',
    time: '3 min',
    pickUp: 'Barkat Market',
    dropOff: 'Gulberg 3',
  },
  {
    id: 3,
    person: 'Person 3',
    distance: '1km Away',
    time: '5 min',
    pickUp: 'Faisal Town',
    dropOff: 'Hafeez Center',
  },
  {
    id: 4,
    person: 'Person 3',
    distance: '1km Away',
    time: '5 min',
    pickUp: 'Faisal Town',
    dropOff: 'Hafeez Center',
  },
  {
    id: 5,
    person: 'Person 3',
    distance: '1km Away',
    time: '5 min',
    pickUp: 'Faisal Town',
    dropOff: 'Hafeez Center',
  },
];

export default function RideRequests({ navigation }) {

  function backNavigation(){
    navigation.goBack();
  }
  function navigationHandler(){
    navigation.navigate('ridedetails');
  }
  return (
    <>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Incoming Ride Requests</Text>
      </View>
      <FlatList
        style={styles.container}
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <RideCard data={item} nextNavigation={navigationHandler} backNavigation={backNavigation}/>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: globalColors.lavender,
    marginBottom: 10
  },
  headingView: {
    backgroundColor: globalColors.lavender,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,  
    paddingBottom: 10,
  },
  headingText: {
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#000', 
  }
});

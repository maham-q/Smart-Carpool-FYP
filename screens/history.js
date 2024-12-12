import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HistoryScreen = () => {
  const navigation = useNavigation();
  
  const data = [
    { id: '1', name: 'Aryan Ahmad', price: '', car: '', status: 'Cancelled' },
    { id: '2', name: 'M Ali Khan', price: '393 PKR', car: 'Honda City', status: 'Completed' },
    { id: '3', name: 'Zainab Sheikh', price: '419 PKR', car: 'Suzuki Alto', status: 'Completed' },
    { id: '4', name: 'Fatima Noor', price: '533 PKR', car: 'Toyota Aqua', status: 'Completed' },
    { id: '5', name: 'Usman Saddique', price: '', car: '', status: 'Cancelled' },
    { id: '6', name: 'Ahmad Raza', price: '160 PKR', car: 'Suzuki Mehran', status: 'Completed' },
  ];

  const renderItem = ({ item }) => {
    const statusColor = item.status === 'Completed' ? 'green' : 'red';

    return (
      <TouchableOpacity style={styles.card}>
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          {item.price !== '' && <Text style={styles.details}>{item.price}, {item.car}</Text>}
        </View>
        <Text style={[styles.status, { color: statusColor }]}>{item.status}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#EDE9F6" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Ride History</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDE9F6',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:20,
    marginBottom: 20,
    borderWidth:1,
    height:40,
    backgroundColor:'#3B3B98',
    borderRadius: 6,
  },
  backButton: {
    marginRight: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EDE9F6',
    marginLeft:90,
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DADADA',
    height: 80,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#3B3B98',
    marginBottom: 5,
  },
  details: {
    fontSize: 14,
    color: '#555',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HistoryScreen;

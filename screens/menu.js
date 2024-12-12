import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ContactUsScreen from './contact';
import HistoryScreen from './history';
import LoginScreen from './login';
import RatingsAndReviewsScreen from './ratingsandreviews';
import RequestRideScreen from './ride';
import SettingsScreen from './settings';

const pages = [
  { name: 'Home', component: RequestRideScreen, icon: 'home' },
  { name: 'History', component: HistoryScreen, icon: 'history' },
  { name: 'Ratings and Reviews', component: RatingsAndReviewsScreen, icon: 'rate-review' },
  { name: 'ContactUs', component: ContactUsScreen, icon: 'mail' },
  { name: 'Settings', component: SettingsScreen, icon: 'settings' },
  { name: 'Logout', component: LoginScreen, icon: 'logout' },
  { name: 'Driver Mode', component: LoginScreen, icon: 'person' },
];

const MenuScreen = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate(item.name)}
    >
      <MaterialIcons name={item.icon} size={24} color="#1E40AF" />
      <Text style={styles.text}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <View style={styles.placeholder}>
          <MaterialIcons name="image" size={40} color="#374151" />
        </View>
        <Text style={styles.name}>Passenger Name</Text>
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={20} color="#FFD700" />
          <Text style={styles.ratingText}>4.5</Text>
        </View>
      </View>

      <FlatList
        data={pages}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    width: '70%',
    borderRightWidth: 1,
    borderColor: '#1E40AF',
    padding: 10,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#BFDBFE',
    borderRadius: 10,
  },
  placeholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  ratingText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#1E40AF',
  },
  list: {
    paddingTop: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#E5E7EB',
    marginBottom: 10,
  },
  text: {
    fontSize: 18,
    color: '#1E40AF',
    marginLeft: 10,
  },
});

export default MenuScreen;

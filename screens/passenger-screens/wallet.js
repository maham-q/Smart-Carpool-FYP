import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const WalletScreen = () => {
  const navigation = useNavigation();

  const handleAddFunds = () => {
    Alert.alert("Add Funds", "Redirecting to JazzCash payment gateway...");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#EDE9F6" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Wallet</Text>
      </View>

      <View style={styles.balanceContainer}>
        <Text style={styles.walletText}>Wallet Balance</Text>
        <Text style={styles.balanceAmount}>PKR 0</Text>
      </View>

      <View style={styles.cardsContainer}>
        <Text style={styles.cardsTitle}>Cards</Text>
        <View style={styles.cardBox}>
          <Text style={styles.noCardText}>No cards added</Text>
          <Text style={styles.addCardInfo}>
            Add a card to enjoy a seamless payments experience
          </Text>
          <TouchableOpacity style={styles.addCardButton} onPress={handleAddFunds}>
            <Text style={styles.addCardButtonText}>Add Funds</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Your payment info is stored securely
        </Text>
      </View>
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
    marginTop: 30,
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
    marginLeft: 125,
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  infoButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 5,
  },
  infoButtonText: {
    fontSize: 20,
    color: '#002855',
  },
  balanceContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  walletText: {
    color: '#374151',
    fontSize: 18,
  },
  balanceAmount: {
    fontSize: 30,
    color: '#374151',
    marginVertical: 10,
  },
  addFundsButton: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
  },
  addFundsText: {
    color: '#002855',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardsContainer: {
    padding: 15,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  cardsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#374151',
    marginBottom: 10,
  },
  cardBox: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  noCardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#374151',
  },
  addCardInfo: {
    color: '#6B7280',
    textAlign: 'center',
    marginVertical: 10,
  },
  addCardButton: {
    backgroundColor: '#BFDBFE',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  addCardButtonText: {
    color: '#1E40AF',
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    padding: 15,
  },
  footerText: {
    color: '#6B7280',
  },
});

export default WalletScreen;

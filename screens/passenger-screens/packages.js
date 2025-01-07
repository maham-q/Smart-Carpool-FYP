import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PackagesScreen = () => {
  const navigation = useNavigation();
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [currentSubscription, setCurrentSubscription] = useState({
    planName: '',
    validity: '',
  });
  const [isPaymentCompleted, setIsPaymentCompleted] = useState(false);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);  // Select the plan, but do not update subscription info yet
  };

  const calculateValidity = (planType) => {
    const currentDate = new Date();
    const startDate = currentDate.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    const endDate = new Date(
      currentDate.setDate(currentDate.getDate() + (planType === 'Weekly' ? 7 : 30))
    )
      .toISOString()
      .split('T')[0];

    return { startDate, endDate };
  };

  const handleProceedToPayment = () => {
    if (!selectedPlan) {
      Alert.alert('Error', 'Please select a subscription plan before proceeding.');
      return;
    }

    // Update subscription info after payment is processed
    const { startDate, endDate } = calculateValidity(selectedPlan);
    setCurrentSubscription({
      planName: selectedPlan,
      validity: `${startDate} - ${endDate}`,
    });

    // Simulate payment success
    setIsPaymentCompleted(true); // Mark payment as completed
    Alert.alert(
      'Payment Success',
      `You have successfully subscribed to the ${selectedPlan} plan. Validity: ${currentSubscription.validity}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={24} color="#EDE9F6" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Packages</Text>
      </View>

      <View style={styles.packageInfoBox}>
        <Text style={styles.infoHeader}>Current Subscription</Text>
        <Text style={styles.infoDetails}>
          Package Name: {currentSubscription.planName || 'N/A'}
        </Text>
        <Text style={styles.infoDetails}>
          Validity: {currentSubscription.validity || 'N/A'}
        </Text>
      </View>

      <ScrollView>
        <Text style={styles.sectionHeader}>Choose Your Plan</Text>

        <TouchableOpacity
          style={[
            styles.packageCard,
            selectedPlan === 'Weekly' && styles.selectedPackageCard,
          ]}
          onPress={() => handleSelectPlan('Weekly')}
        >
          <Text style={styles.packageTitle}>Weekly Plan</Text>
          <Text style={styles.packageDetails}>- 15% discount on rides</Text>
          <Text style={styles.packageDetails}>- Valid for 7 days</Text>
          <Text style={styles.packageDetails}>- Fee: 700</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.packageCard,
            selectedPlan === 'Monthly' && styles.selectedPackageCard,
          ]}
          onPress={() => handleSelectPlan('Monthly')}
        >
          <Text style={styles.packageTitle}>Monthly Plan</Text>
          <Text style={styles.packageDetails}>- 25% discount on rides</Text>
          <Text style={styles.packageDetails}>- Valid for 30 days</Text>
          <Text style={styles.packageDetails}>- Fee: 2500</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.proceedButton,
            isPaymentCompleted ? styles.disabledButton : null
          ]}
          onPress={handleProceedToPayment}
          disabled={isPaymentCompleted} // Disable the button after payment
        >
          <Text style={styles.proceedButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </ScrollView>
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
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    height: 40,
    backgroundColor: '#3B3B98',
    borderRadius: 6,
  },
  backButton: {
    marginRight: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EDE9F6',
    marginLeft: 110,
  },
  packageInfoBox: {
    backgroundColor: '#E5E7EB',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  infoHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoDetails: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 5,
  },
  sectionHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 10,
    color: '#1E40AF',
    textAlign: 'center',
  },
  packageCard: {
    backgroundColor: '#F3F4F6',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    borderWidth: 1,
    borderColor: '#D1D5DB',
  },
  selectedPackageCard: {
    backgroundColor: '#BFDBFE',
    borderWidth: 2,
    borderColor: '#1E40AF',
    elevation: 7,
  },
  packageTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E40AF',
  },
  packageDetails: {
    fontSize: 16,
    color: '#374151',
    marginBottom: 5,
  },
  proceedButton: {
    backgroundColor: '#1E40AF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  proceedButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#A5B4FC', 
  },
});

export default PackagesScreen;

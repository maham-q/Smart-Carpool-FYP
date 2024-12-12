import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import CarpoolRideScreen from './screens/carpoolride';
import ChooseDriverScreen from './screens/choosedriver';
import ContactUsScreen from './screens/contact';
import HistoryScreen from './screens/history';
import LoginScreen from './screens/login';
import MenuScreen from './screens/menu';
import OngoingRideScreen from './screens/ongoingride';
import RatingsAndReviewsScreen from './screens/ratingsandreviews';
import ReviewScreen from './screens/review';
import RequestRideScreen from './screens/ride';
import SettingsScreen from './screens/settings';
import SignUpScreen from './screens/signup';
import SingleRideScreen from './screens/singleride';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: false, 
          headerShown: false,  
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="Home" component={RequestRideScreen} />
        <Stack.Screen name="CarpoolRide" component={CarpoolRideScreen} />
        <Stack.Screen name="SingleRide" component={SingleRideScreen} />
        <Stack.Screen name="ChooseDriver" component={ChooseDriverScreen} />
        <Stack.Screen name="ContactUs" component={ContactUsScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
        <Stack.Screen name="OngoingRide" component={OngoingRideScreen} />
        <Stack.Screen name="Logout" component={LoginScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
        <Stack.Screen name="Ratings and Reviews" component={RatingsAndReviewsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

import AsyncStorage from "@react-native-async-storage/async-storage";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { globalColors } from "./constants/colors";

// Passenger Screens
import CarpoolRideScreen from "./screens/passenger-screens/carpoolride";
import ChangePasswordScreen from "./screens/passenger-screens/changepassword";
import ChooseDriverScreen from "./screens/passenger-screens/choosedriver";
import ContactUsScreen from "./screens/passenger-screens/contact";
import ForgotPasswordScreen from "./screens/passenger-screens/forgetpassword";
import HistoryScreen from "./screens/passenger-screens/history";
import LoginScreen from "./screens/passenger-screens/login";
import MenuScreen from "./screens/passenger-screens/menu";
import OngoingRideScreen from "./screens/passenger-screens/ongoingride";
import PackagesScreen from "./screens/passenger-screens/packages";
import RatingsAndReviewsScreen from "./screens/passenger-screens/ratingsandreviews";
import ReviewScreen from "./screens/passenger-screens/review";
import RequestRideScreen from "./screens/passenger-screens/ride";
import SettingsScreen from "./screens/passenger-screens/settings";
import SignUpScreen from "./screens/passenger-screens/signup";
import SingleRideScreen from "./screens/passenger-screens/singleride";
import WalletScreen from "./screens/passenger-screens/wallet";

// Driver Screens
import BasicInfo from "./screens/driver-screens/BasicInfo";
import CNICDetail from "./screens/driver-screens/CNICDetail";
import DriverIdScreen from "./screens/driver-screens/DriverIdScreen";
import DriverRegisteration from "./screens/driver-screens/DriverRegisteration";
import RegisterationDetails from "./screens/driver-screens/RegisterationDetails";
import RideDetails from "./screens/driver-screens/RideDetails";
import RideHistory from "./screens/driver-screens/RideHistory";
import RidePage from "./screens/driver-screens/RidePage";
import RideRequests from "./screens/driver-screens/RideRequests";
import Settings from "./screens/driver-screens/Settings";
import ThankYouPage from "./screens/driver-screens/ThankYou";
import VehicleInfo from "./screens/driver-screens/VehicleInfo";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DriverDrawer() {
  return (
    <Drawer.Navigator
      drawerType="slide"
      overlayColor="rgba(0, 0, 0, 0.5)"
      drawerStyle={{ backgroundColor: globalColors.violetBlue }}
      drawerContentOptions={{
        activeBackgroundColor: globalColors.violetBlue,
        activeTintColor: "#fff",
        inactiveTintColor: "#999",
      }}
    >
      <Drawer.Screen
        name="mainpage"
        component={RidePage}
        options={{ drawerLabel: "Rides" }}
      />
      <Drawer.Screen
        name="history"
        component={RideHistory}
        options={{ drawerLabel: "Rides History" }}
      />
      <Drawer.Screen
        name="settings"
        component={Settings}
        options={{ drawerLabel: "Account Settings" }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [sessionToken, setSessionToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchToken() {
    try {
      const token = await AsyncStorage.getItem("authToken");
      setSessionToken(token);
    } catch (error) {
      console.error("Error fetching token:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchToken();
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!sessionToken ? (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="ForgetPassword" component={ForgotPasswordScreen} />
            </>
          ) : (
            <>
              {/* Passenger Screens */}
              <Stack.Screen name="Home" component={RequestRideScreen} />
              <Stack.Screen name="Menu" component={MenuScreen} />
              <Stack.Screen name="CarpoolRide" component={CarpoolRideScreen} />
              <Stack.Screen name="SingleRide" component={SingleRideScreen} />
              <Stack.Screen name="ChooseDriver" component={ChooseDriverScreen} />
              <Stack.Screen name="ContactUs" component={ContactUsScreen} />
              <Stack.Screen name="History" component={HistoryScreen} />
              <Stack.Screen name="OngoingRide" component={OngoingRideScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="Review" component={ReviewScreen} />
              <Stack.Screen name="RatingsAndReviews" component={RatingsAndReviewsScreen} />
              <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
              <Stack.Screen name="Packages" component={PackagesScreen} />
              <Stack.Screen name="Wallet" component={WalletScreen} />

              {/* Driver Screens */}
              <Stack.Screen name="Driver" component={DriverRegisteration} />
              <Stack.Screen name="details" component={RegisterationDetails} />
              <Stack.Screen name="basicInfo" component={BasicInfo} />
              <Stack.Screen name="cnic" component={CNICDetail} />
              <Stack.Screen name="driverId" component={DriverIdScreen} />
              <Stack.Screen name="vehicleInfo" component={VehicleInfo} />
              <Stack.Screen name="thankyou" component={ThankYouPage} />
              <Stack.Screen name="drawer" component={DriverDrawer} />
              <Stack.Screen name="requests" component={RideRequests} />
              <Stack.Screen name="ridedetails" component={RideDetails} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

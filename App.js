import { brown } from "@mui/material/colors";
import { fontWeight, width } from "@mui/system";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import Nav from "./components/Nav";
import Login from "./pages/Login";
import MapPage from "./pages/MapPage";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
        sceneContainerStyle={{ backgroundColor: "white" }}
        tabBar={(props) => <Nav {...props} />}
      >
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Map" component={MapPage} />
        <Tab.Screen name="Leaderboard" component={Leaderboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 25,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

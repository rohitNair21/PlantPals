import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import {
  Appbar,
  Card,
  Title,
  Paragraph,
  Button,
  Avatar,
} from "react-native-paper";
import {
  useFonts,
  Lexend_400Regular,
  Lexend_700Bold,
} from "@expo-google-fonts/lexend";
import Logo from "../assets/Logo_Final.png";
import leafImage from "../assets/Leaf2Final.png";

const Dashboard = ({ navigation }) => {
  let [fontsLoaded] = useFonts({
    Lexend_400Regular,
  });

  return (
    <ScrollView style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />

      <Appbar.Header>
        <View style={styles.userInfoSection}>
          <View style={{ marginLeft: 15 }}>
            <Text style={styles.maintitle}>Welcome back, Marko</Text>
            <Text style={{ fontSize: 13, fontFamily: "Lexend_400Regular" }}>
              Check your progress and find more gardens to visit
            </Text>
          </View>
          <Avatar.Image source={require("../assets/marko.jpeg")} size={80} />
        </View>
      </Appbar.Header>

      <View style={styles.userInfoText}>
        <Title style={styles.name}>My points: 1,036</Title>
        <Paragraph style={styles.streak}>🔥You're on a 2 day streak!</Paragraph>
      </View>
      <View style={styles.activitySection}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 25,
            marginBottom: 10,
            fontFamily: "Lexend_400Regular",
            color: "#57442A",
          }}
        >
          Recent Activity
        </Text>
        <View style={styles.activityCards}>
          <Card style={styles.card}>
            <Card.Content>
              <Title style={styles.title}>Annie Gale Park</Title>
              <Paragraph style={styles.cardText}>
                Visited on 13/02/2024
              </Paragraph>
              <Paragraph style={styles.cardText}>Status: Completed</Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Title style={styles.title}>Sage Hill Natural Area</Title>
              <Paragraph style={styles.cardText}>
                Visited on 12/02/2024
              </Paragraph>
              <Paragraph style={styles.cardText}>Status: Verified ✅</Paragraph>
            </Card.Content>
          </Card>
        </View>
      </View>

      <Button
        style={styles.findmorebutton}
        mode="contained"
        onPress={() => navigation.navigate("Redemption")}
      >
        Redeem Points
      </Button>
      <Image
        source={leafImage}
        style={[styles.leafImage, styles.leafImageLeft]}
      />
      <Image
        source={leafImage}
        style={[styles.leafImage, styles.leafImageRight]}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 30, // Add some top margin to create space between the logo and the text
  },
  maintitle: {
    fontWeight: "700",
    fontSize: 25,
    marginBottom: 10,
    fontFamily: "Lexend_700Bold",
  },
  userInfoSection: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "80%",
    justifyContent: "space-between",
  },
  userInfoText: {
    marginLeft: 30,
    marginTop: 20,
  },
  title: {
    fontFamily: "Lexend_700Bold",
    fontWeight: "bold",
  },
  cardText: {
    fontFamily: "Lexend_400Regular",
  },
  leaf: {
    flex: 1,
    justifyContent: "center",
  },

  logo: {
    width: 50,
    height: 50,
    marginTop: -10, // Add some top margin to create space between the logo and the text
  },
  name: {
    fontWeight: "bold",
    fontFamily: "Lexend_400Regular",
  },
  streak: {
    fontStyle: "italic",
    fontFamily: "Lexend_400Regular",
  },
  activitySection: {
    zIndex: 1,
    padding: 20,
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 20,
    paddingVertical: 40,
    marginLeft: 20,
    marginTop: 20,
    paddingHorizontal: 20,
    elevation: 10,
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: "#57442A",
  },
  card: {
    marginTop: 10,
    backgroundColor: "#EDFAD8",
  },
  findmorebutton: {
    backgroundColor: "#1E8523",
    borderRadius: 50,
    paddingVertical: 5,
    width: "50%",
    marginTop: 20,
    alignSelf: "center",
  },
  leafImage: {
    position: "absolute",
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  leafImageLeft: {
    bottom: -15,
    right: -55,
    transform: [{ rotate: "-45deg" }],
  },
  leafImageRight: {
    top: 250,
    left: -50,
    transform: [{ rotate: "45deg" }],
  },
});

export default Dashboard;

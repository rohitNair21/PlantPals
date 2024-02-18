import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Logo from "../assets/Logo_Final.png";

const Leaderboard = () => {
  const otherPlayersData = [
    { name: "Liam Thompson", points: "2850", image: require("../assets/Liam.jpg") },
    { name: "Ava Martinez", points: "2700", image: require("../assets/ava.jpg") },
    { name: "Noah Rodriguez", points: "2500", image: require("../assets/noah.jpg") },
    { name: "Olivia Chang", points: "2450", image: require("../assets/olivia.jpg") },
    { name: "Ethan Patel", points: "2000", image: require("../assets/ethan.jpg") },
    { name: "Sophia Nguyen", points: "1500", image: require("../assets/sophia.jpg") },
    { name: "Marko", points: "1036", image: require("../assets/marko.jpeg") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image source={Logo} style={styles.logo} resizeMode="contain" />
        <Text style={styles.maintitle}>View Top Pals🏆</Text>
        <Text style={{ fontSize: 13, fontFamily: "Lexend_400Regular" }}>
          Collection of our best and most active pals. Keep up the good work to see yourself at the top of the leaderboard!
        </Text>
      </View>
      <View style={styles.scrollContainer}>
        <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.podiumContainer}>
            {/* Second Place */}
            <View style={[styles.podiumItem, styles.thirdPlace]}>
                <Text style={styles.rank}>2</Text>
                <Image
                source={require("../assets/alice.jpg")}
                style={[styles.profilePic, styles.mediumProfilePic]}
                />
                <Text style={[styles.name, styles.smallerText]}>Alice Johnson</Text>
                <Text style={[styles.points, styles.smallerText]}>4000 🌱</Text>
            </View>

            {/* First Place */}
            <View style={styles.podiumItem}>
                <Text style={styles.rank}>1</Text>
                <Text style={styles.crown}>👑</Text>
                <Image
                source={require("../assets/john.jpg")}
                style={styles.largeProfilePic}
                />
                <Text style={[styles.name, styles.largerText]}>John Doe</Text>
                <Text style={[styles.points, styles.largerText]}>5000 🌱</Text>
            </View>

            {/* Third Place */}
            <View style={[styles.podiumItem, styles.secondPlace]}>
                <Text style={styles.rank}>3</Text>
                <Image
                source={require("../assets/jane.jpg")}
                style={[styles.thirdprofilePic, styles.mediumProfilePic]}
                />
                <Text style={[styles.name, styles.smallerText]}>Jane Smith</Text>
                <Text style={[styles.points, styles.smallerText]}>3000 🌱</Text>
            </View>
            </View>

            {/* Rest of the Leaderboard */}
            {otherPlayersData.map((player, index) => (
            <View key={index} style={[styles.leaderboardRow, (index + 4) % 2 === 0 ? styles.evenRow : styles.oddRow]}>
                <Text style={[styles.rank, styles.rankWidth]}>{index + 4}</Text>
                <Image
                source={player.image}
                style={styles.smallProfilePic}
                />
                <Text style={styles.name}>{player.name}</Text>
                <View style={styles.pointsContainer}>
                <Text style={styles.points}>{player.points}</Text>
                <Text style={styles.points}>🌱</Text>
                </View>
            </View>
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginTop: 30, // Add some top margin to create space between the logo and the text
    },
    titleContainer: {
    marginBottom: 20,
    },
    maintitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10, // Decrease the margin to reduce space between the title and the text
    },
    logo: {
    width: 50,
    height: 50,
    marginTop: -10, // Add some top margin to create space between the logo and the text
    },
    text: {
    fontSize: 13,
    fontFamily: "Lexend_400Regular",
    marginBottom: 20, // Increase the margin to add more space between the text and the bottom
    },
  scrollView: {
    flexGrow: 1,
  },
  podiumContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  podiumItem: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  secondPlace: {
    position: "absolute",
    right: "30%",
    transform: [{ translateX: 110 }],
    marginTop: 80, // Increase margin to lower the image further
  },
  thirdPlace: {
    position: "absolute",
    left: "30%",
    transform: [{ translateX: -100 }],
    marginTop: 80, // Increase margin to lower the image further
  },
  leaderboardRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 10,
    backgroundColor: "#ffffff", // White background color for even rows
    borderRadius: 20, // Adjust border radius to create cylindrical shape
  },
  evenRow: {
    backgroundColor: "#EDFAD8", // Light green background color for even rows
  },
  oddRow: {
    backgroundColor: "#CABDAE", // White background color for odd rows
  },
  rank: {
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 10,
  },
  rankWidth: {
    width: 20, // Adjust width to accommodate two-digit numbers
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
  points: {
    fontSize: 16,
    marginTop: 5,
  },
  pointsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "auto",
  },
  profilePic: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "silver",
  },
  thirdprofilePic: {
    marginTop: 10,
    borderWidth: 2,
    borderColor: "brown",
  },
  smallProfilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  mediumProfilePic: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  largeProfilePic: {
    width: 130,
    height: 130,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "gold",
  },
  crown: {
    fontSize: 24,
    marginTop: 5,
  },
  smallerText: {
    fontSize: 14,
  },
  largerText: {
    fontSize: 18,
  },
  scrollContainer: {
    flex: 1,
    borderWidth: 2, // Add border width
    borderRadius: 20, // Add border radius to match other rounded corners
    borderColor: "#57442A", // Set border color
    overflow: "hidden", // Hide overflow to prevent content from overflowing border
    backgroundColor: '#fff',
  },
});

export default Leaderboard;

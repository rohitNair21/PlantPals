import React, { useState } from "react";
import { View, Text, StyleSheet, Alert, ScrollView } from "react-native";
import { Button, Card } from "react-native-paper";

const rewards = {
  "1 Month Calgary Transit Pass 🚆": 1000,
  "3 Month Calgary Transit Pass 🚌": 2000,
  "$50 Humane Society Donation 💝": 3000,
};

const RedeemPointsScreen = ({ navigation }) => {
  const [points, setPoints] = useState(1036);

  const redeemReward = (reward) => {
    const cost = rewards[reward];
    if (points >= cost) {
      setPoints(points - cost);
      Alert.alert(
        "Reward Redeemed!",
        `You have redeemed ${reward}. Please check your email for further steps.`
      );
    } else {
      Alert.alert(
        "Insufficient Points",
        "You do not have enough points to redeem this reward."
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.pointsText}>Available Points: {points}</Text>

      {Object.keys(rewards).map((reward) => (
        <Card key={reward} style={styles.card}>
          <Card.Content>
            <Text style={styles.cardTitle}>{reward}</Text>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => redeemReward(reward)}
            >
              Redeem ({rewards[reward]} pts)
            </Button>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 180,
    flex: 1,
    padding: 20,
    
  },
  pointsText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
  },
  card: {
    marginVertical: 10,
    backgroundColor: "#EDFAD8",
    borderRadius: 8,
    borderWidth: 0,
    borderColor: "#57442A",
    elevation: 4, // remove this line if you don't want shadow on Android
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#1E8523",
  },
});

export default RedeemPointsScreen;

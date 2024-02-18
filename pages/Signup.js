import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { Input, Button } from "react-native-elements";
import Logo from "../assets/Logo_Final.png";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import leafImage from "../assets/Leaf2Final.png";

import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBHXZ5krpyleBfAvJc2cT7PqPcyBfPcNk",
  authDomain: "plantpals-7a6d8.firebaseapp.com",
  projectId: "plantpals-7a6d8",
  storageBucket: "plantpals-7a6d8.appspot.com",
  messagingSenderId: "274382287914",
  appId: "1:274382287914:web:9bedab5c9dee5fbfe5ff53",
  measurementId: "G-R590EHETD6",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

const Signup = ({ navigation }) => {
  const [email, setEmail] = useState(""); // State for email
  const [password, setPassword] = useState(""); // State for password
  const [confirmPassword, setConfirmPassword] = useState(""); // State for password confirmation

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      console.log("Passwords do not match.");
      Alert.alert("Error", "Passwords do not match");

      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed up:", user.uid);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Sign up error:", error);
      Alert.alert("Error", "Error signing in. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.maintitle}>PlantPals 🌱</Text>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.header}>Email</Text>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          containerStyle={styles.inputContainerStyle}
        />

        <Text style={styles.header}>Password</Text>
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          containerStyle={styles.inputContainerStyle}
        />

        <Text style={styles.header}>Password Confirmation</Text>
        <Input
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          containerStyle={styles.inputContainerStyle}
        />

        <Button
          title="Sign Up"
          buttonStyle={styles.loginButton}
          onPress={handleSignUp}
        />
      </View>
      <Image
        source={leafImage}
        style={[styles.leafImage, styles.leafImageLeft]}
      />
      <Image
        source={leafImage}
        style={[styles.leafImage, styles.leafImageRight]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center the box vertically
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F9FAF9",
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  input: {
    opacity: 0.8,
    borderColor: "#000",
    fontSize: 15,
    borderWidth: 1,
    borderRadius: 5,
  },
  loginBox: {
    zIndex: 1,
    width: "90%",
    alignItems: "center",
    backgroundColor: "#E1F0C8",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  maintitle: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333",
    alignSelf: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#333",
    alignSelf: "start",
  },
  inputContainer: {
    borderBottomWidth: 0, // Remove bottom border
    backgroundColor: "#eee", // Light grey background
    borderRadius: 10, // Rounded corners
    marginBottom: 16, // Margin between input fields
  },
  inputContainerStyle: {
    paddingHorizontal: 0, // No additional horizontal padding
  },
  forgotPassword: {
    marginBottom: 12,
    color: "#6B7280",
    alignSelf: "end",
  },
  header: {
    alignSelf: "start",
  },
  loginButton: {
    backgroundColor: "#1E8523",
    borderRadius: 25,
    paddingVertical: 12,
    width: "100%",
    marginTop: 10,
  },
  signUpText: {
    marginTop: 24,
    color: "#6B7280",
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

export default Signup;

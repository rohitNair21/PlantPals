import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import Logo from "../assets/Logo_Final.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="contain" />
      <Text style={styles.maintitle}>PlantPals 🌱</Text>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.header}>Username</Text>
        <Input
          style={styles.input}
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          containerStyle={styles.inputContainerStyle}
        />

        <Text style={styles.header}>Password</Text>
        <Input
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.input}
          containerStyle={styles.inputContainerStyle}
        />
        <TouchableOpacity
          onPress={() => console.log("Forgot Password pressed")}
        >
          <Text style={styles.forgotPassword}>Forgot password?</Text>
        </TouchableOpacity>
        <Button
          title="Log in"
          buttonStyle={styles.loginButton}
          onPress={() => console.log("Login pressed")}
        />
        <TouchableOpacity onPress={() => console.log("Sign Up pressed")}>
          <Text style={styles.signUpText}>Don’t have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: "#1E8523", // A green shade for the login button
    borderRadius: 25,
    paddingVertical: 12,
    width: "100%", // Full width button
    marginTop: 10, // Space above the button
  },
  signUpText: {
    marginTop: 24,
    color: "#6B7280",
  },
});

export default Login;

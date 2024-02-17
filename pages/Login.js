import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        source={require("./path-to-your-logo.png")} // Make sure to place your logo in the appropriate directory and update this path
        style={styles.logo}
      />
      <Text style={styles.title}>PlantPals 🌱</Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
        containerStyle={styles.input}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.input}
      />
      <TouchableOpacity onPress={() => console.log("Forgot Password pressed")}>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#F9FAF9", // This sets the background color to a light shade similar to the image
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 60, // Adjusted to give space from the top of the screen
    marginBottom: 32, // Space above the title
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 48, // Space above the input fields
  },
  input: {
    width: "100%",
    marginBottom: 16, // Space between input fields
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 12, // Space above the login button
    color: "#6B7280", // This is a medium gray color for the text
  },
  loginButton: {
    backgroundColor: "#10B981", // A shade of green for the button
    borderRadius: 10,
    paddingVertical: 10,
  },
  signUpText: {
    marginTop: 24, // Space above the sign up prompt
    color: "#6B7280", // Same as the forgot password link
  },
});

export default Login;

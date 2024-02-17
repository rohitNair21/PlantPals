import React, { useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { Input, Button } from "react-native-elements";
import Logo from "/Users/rohitnair/PlantPals/assets/Logo_1.svg";
import SvgUri from "react-native-svg-uri";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image source={Logo} />
      <Text style={styles.title}>PlantPals 🌱</Text>
      <Input
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        autoCapitalirze="none"
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
    backgroundColor: "#F9FAF9",
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 60,
    marginBottom: 32,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 48,
  },
  input: {
    width: "100%",
    marginBottom: 16,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginVertical: 12,
    color: "#6B7280",
  },
  loginButton: {
    backgroundColor: "#19B381",
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  signUpText: {
    marginTop: 24,
    color: "#6B7280",
  },
});

export default Login;

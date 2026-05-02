import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";
import { Id } from "../convex/_generated/dataModel";

interface LoginProps {
  onLogin: (id: Id<"users">) => void;
}

const LoginScreen = ({ onLogin }: LoginProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginMutation = useMutation(api.users.login);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert("Error", "Fill all fields!");
      return;
    }

    try {
      const result = await loginMutation({ username, password });

      if (result.success && result.userId) {
        onLogin(result.userId);
      } else {
        Alert.alert("Login Failed", result.message);
      }
    } catch (e) {
      Alert.alert("Error", "Something went wrong");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../assets/login.webp")} style={styles.img} />

      <TextInput
        placeholder="Username"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.social}>
        <Ionicons name="logo-google" size={30} />
        <Ionicons name="logo-facebook" size={30} />
        <Ionicons name="logo-apple" size={30} />
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  img: { width: "100%", height: 200, marginBottom: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#7D7AFF",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: { color: "#fff", textAlign: "center" },
  social: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
});
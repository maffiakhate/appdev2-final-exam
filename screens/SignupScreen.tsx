import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

const SignupScreen = () => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = useMutation(api.users.register);

  const handleSignup = async () => {
    if (!fullname || !username || !password) {
      Alert.alert("Error", "Fill all fields");
      return;
    }

    await register({ fullname, username, password });
    Alert.alert("Success", "Account created!");
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Full Name" style={styles.input} value={fullname} onChangeText={setFullname} />
      <TextInput placeholder="Username" style={styles.input} value={username} onChangeText={setUsername} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} value={password} onChangeText={setPassword} />

      <TouchableOpacity style={styles.btn} onPress={handleSignup}>
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: "#FFCC00",
    padding: 15,
    borderRadius: 10,
  },
  btnText: { textAlign: "center", fontWeight: "bold" },
});
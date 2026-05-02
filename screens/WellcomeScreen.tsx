import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.title}>Let's Get Started!</Text>
      </View>

      <View style={styles.middleSection}>
        <Image
          source={require("./../../assets/welcome.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.loginContainer}>
          <Text style={styles.footerText}>Already have an account? </Text>
          <TouchableOpacity>
            <Text style={styles.loginLink}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#7D7AFF", paddingTop: 80, paddingHorizontal: 30 },
  topSection: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 32, fontWeight: "bold", color: "#fff", textAlign: "center" },
  middleSection: { flex: 3, justifyContent: "center", alignItems: "center" },
  image: { width: "100%", height: "100%" },
  bottomSection: { flex: 1.5, justifyContent: "center", alignItems: "center", paddingBottom: 40 },
  button: { backgroundColor: "#FFCC00", width: "100%", paddingVertical: 18, borderRadius: 15 },
  buttonText: { fontSize: 18, fontWeight: "bold", textAlign: "center" },
  loginContainer: { flexDirection: "row", marginTop: 15 },
  footerText: { color: "#fff" },
  loginLink: { color: "#FFCC00", fontWeight: "bold" },
});
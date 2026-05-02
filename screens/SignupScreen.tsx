import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";


const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* 1. Top Section (Flex 1) */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Let's Get Started!</Text>
      </View>


      {/* 2. Middle Section (Flex 3 - Largest space for image) */}
      <View style={styles.middleSection}>
        <Image
          // Path: Up from screens, Up from src, into assets
          source={require("./../../assets/welcome.png")}
          style={styles.image}
        />
      </View>


      {/* 3. Bottom Section (Flex 1.5 - Controls Button & Login Link) */}
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
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7D7AFF", // The main purple color
    paddingTop: 80, // Manual offset for the status bar
    paddingHorizontal: 30,
  },
  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
  },
  middleSection: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    width: "100%",
    height: "100%", // Required for the image to show up inside the flex box
  },
  bottomSection: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 40,
  },
  button: {
    backgroundColor: "#FFCC00", // Golden yellow
    width: "100%",
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  loginContainer: {
    flexDirection: "row", // Horizontal alignment for the text and link
    alignItems: "center",
  },
  footerText: {
    color: "#FFFFFF",
    fontSize: 15,
  },
  loginLink: {
    color: "#FFCC00",
    fontSize: 15,
    fontWeight: "bold",
  },
});


export default WelcomeScreen;

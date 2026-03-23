import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />
      <LinearGradient
        colors={["#FFB79D", "#3B215E"]} // A sunset gradient style often seen in Argon patterns
        style={styles.gradient}
      >
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>argon</Text>
          </View>
          
          <View style={styles.textContainer}>
            <Text style={styles.heading}>Design System</Text>
            <Text style={styles.subtitle}>
              Fully coded React Native components.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              style={styles.button}
              onPress={() => router.push("/register")}
            >
              <Text style={styles.buttonText}>GET STARTED</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: "space-between",
    paddingVertical: 100,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  logoText: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#FFFFFF",
    letterSpacing: -2,
  },
  textContainer: {
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "800",
    color: "#FFFFFF",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "rgba(255, 255, 255, 0.8)",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 24,
  },
  buttonContainer: {
    width: "100%",
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 18,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3B215E",
    letterSpacing: 1,
  },
});

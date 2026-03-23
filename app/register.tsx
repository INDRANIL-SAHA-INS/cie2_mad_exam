import React, { useState } from "react";
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Dimensions, 
  KeyboardAvoidingView, 
  Platform,
  ScrollView
} from "react-native";
import { useRouter, Stack } from "expo-router";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Checkbox } from "expo-checkbox";

const { width } = Dimensions.get("window");

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{ 
          title: "Create Account",
          headerShown: false, // We'll build a custom header or use the stack one
        }} 
      />
      
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardView}
        >
          <View style={styles.card}>
            <View style={styles.header}>
              <Text style={styles.headerTitle}>Sign up with</Text>
              <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                  <FontAwesome name="github" size={24} color="#3B215E" />
                  <Text style={styles.socialButtonText}>GITHUB</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                  <AntDesign name="google" size={24} color="#3B215E" />
                  <Text style={styles.socialButtonText}>GOOGLE</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.separatorContainer}>
              <View style={styles.line} />
              <Text style={styles.separatorText}>Or sign up with credentials</Text>
              <View style={styles.line} />
            </View>

            <View style={styles.form}>
              <View style={styles.inputContainer}>
                <Ionicons name="person-outline" size={20} color="#8898AA" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor="#8898AA"
                  value={name}
                  onChangeText={setName}
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons name="mail-outline" size={20} color="#8898AA" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Email"
                  placeholderTextColor="#8898AA"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputContainer}>
                <Ionicons name="lock-closed-outline" size={20} color="#8898AA" style={styles.inputIcon} />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#8898AA"
                  secureTextEntry
                  value={password}
                  onChangeText={setPassword}
                />
              </View>

              <View style={styles.passwordStrength}>
                <Text style={styles.strengthLabel}>password strength:</Text>
                <Text style={styles.strengthValue}>strong</Text>
              </View>

              <View style={styles.checkboxContainer}>
                <Checkbox
                  value={agree}
                  onValueChange={setAgree}
                  color={agree ? "#5E72E4" : undefined}
                  style={styles.checkbox}
                />
                <Text style={styles.checkboxText}>
                  I agree with the <Text style={styles.linkText}>Privacy Policy</Text>
                </Text>
              </View>

              <TouchableOpacity style={styles.createButton}>
                <Text style={styles.createButtonText}>CREATE ACCOUNT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>

      {/* Back Button for Navigation Requirement */}
      <TouchableOpacity 
        style={styles.backButton} 
        onPress={() => router.back()}
      >
        <Ionicons name="chevron-back" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F5F7",
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: 40,
  },
  keyboardView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: width * 0.9,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 16,
    color: "#8898AA",
    marginBottom: 20,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#E9ECEF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  socialButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#3B215E",
    marginLeft: 10,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#E9ECEF",
  },
  separatorText: {
    paddingHorizontal: 15,
    color: "#8898AA",
    fontSize: 14,
  },
  form: {
    width: "100%",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#CAD1D7",
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 14,
    color: "#32325D",
  },
  passwordStrength: {
    flexDirection: "row",
    marginBottom: 20,
  },
  strengthLabel: {
    fontSize: 12,
    color: "#8898AA",
    marginRight: 5,
  },
  strengthValue: {
    fontSize: 12,
    color: "#2DCE89",
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 3,
  },
  checkboxText: {
    fontSize: 13,
    color: "#8898AA",
    marginLeft: 10,
  },
  linkText: {
    color: "#5E72E4",
    fontWeight: "600",
  },
  createButton: {
    backgroundColor: "#5E72E4",
    paddingVertical: 14,
    borderRadius: 4,
    alignItems: "center",
    shadowColor: "#5E72E4",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  createButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 20,
    padding: 6,
  }
});

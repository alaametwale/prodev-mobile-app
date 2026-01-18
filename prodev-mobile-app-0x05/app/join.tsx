import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/_join";

export default function Join() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Join Now</Text>

      <View style={styles.formGroup}>
        <Text>Email</Text>
        <TextInput style={styles.formControl} />

        <Text>Password</Text>
        <TextInput secureTextEntry style={styles.formControl} />
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Link href="/signin" style={styles.forgotPasswordText}>
        Already have an account?
      </Link>
    </View>
  );
}

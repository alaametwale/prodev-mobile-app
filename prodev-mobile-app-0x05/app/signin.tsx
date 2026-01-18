import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/_join";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign In</Text>

      <View style={styles.formGroup}>
        <Text>Email</Text>
        <TextInput style={styles.formControl} />

        <Text>Password</Text>
        <TextInput secureTextEntry style={styles.formControl} />
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Link href="/join" style={styles.forgotPasswordText}>
        Create new account
      </Link>
    </View>
  );
}

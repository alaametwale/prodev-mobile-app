import { View, Text, TextInput } from "react-native";
import { styles } from "@/styles/_joinstyle";

export default function Join() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Join</Text>
      <TextInput style={styles.formControl} placeholder="Email" />
      <TextInput
        style={styles.formControl}
        placeholder="Password"
        secureTextEntry
      />
    </View>
  );
}

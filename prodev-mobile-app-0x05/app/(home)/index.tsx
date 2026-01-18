import { View, Text } from "react-native";
import { mainStyles } from "../../styles/_mainstyle";

export default function Home() {
  return (
    <View style={mainStyles.container}>
      <Text style={mainStyles.title}>Home Screen</Text>
    </View>
  );
}

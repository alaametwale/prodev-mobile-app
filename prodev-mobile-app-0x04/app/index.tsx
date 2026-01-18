import { View, Text, ImageBackground } from "react-native";
import { styles } from "@/styles/_mainstyle";
import { BACKGROUNDIMAGE } from "@/constants";

export default function Index() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={BACKGROUNDIMAGE}
        style={styles.backgroundImageContainer}
      >
        <Text style={styles.titleText}>Welcome</Text>
        <Text style={styles.titleSubText}>
          Find your perfect place to stay
        </Text>
      </ImageBackground>
    </View>
  );
}

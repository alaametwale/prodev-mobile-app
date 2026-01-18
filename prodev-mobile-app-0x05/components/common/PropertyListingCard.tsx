import { View, Text, StyleSheet } from "react-native";
import { Property } from "../../interfaces";

interface Props {
  property: Property;
}

export default function PropertyListingCard({ property }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{property.title}</Text>
      <Text>{property.location}</Text>
      <Text style={styles.price}>${property.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  price: {
    marginTop: 5,
    color: "#34967C",
    fontWeight: "600",
  },
});

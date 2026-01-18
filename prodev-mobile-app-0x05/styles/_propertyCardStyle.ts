import { StyleSheet } from "react-native";

const propertyCardStyle = StyleSheet.create({
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
    color: "#34967C",
    marginTop: 5,
  },
});

export { propertyCardStyle };

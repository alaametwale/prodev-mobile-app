import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 20,
  },
  formGroup: {
    gap: 10,
  },
  formControl: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  primaryButton: {
    backgroundColor: "#34967C",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
  },
  forgotPasswordText: {
    marginTop: 15,
    color: "#34967C",
    textAlign: "center",
  },
});

export { styles };

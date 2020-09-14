import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    flexDirection: "row",
    backgroundColor: colors.primary,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 44,
    borderRadius: 20,
    padding: 4,
  },
  buttonText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    fontWeight: "700",
    color: colors.buttonText,
  },
});

export default styles;

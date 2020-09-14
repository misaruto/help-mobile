import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  link: {
    marginTop: 8,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  linkText: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    fontSize: 20,
    fontWeight: "700",
    color: colors.link,
  },
});

export default styles;

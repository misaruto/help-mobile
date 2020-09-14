import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  inputLabel: {
    fontWeight: "700",
    fontSize: 26,
    color: colors.label,
  },
  inputError: {
    color: colors.danger,
  },
});

export default styles;

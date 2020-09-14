import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";
import { colors } from "../../styles/colors";

const styles = StyleSheet.create({
  container: {
    zIndex: 0,
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  form: {
    zIndex: 1,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.inputBorder,
    height: 44,
    width: "100%",
    paddingLeft: 8,
    fontSize: 26,
    marginBottom: 6,
  },
});

export default styles;

import React from "react";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import logo from "../../assets/logo/logo.png";
import styles from "./styles";
import { colors } from "../../styles/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

interface Props {
  title: string;
  text?: string;
  backLink: Boolean;
}
const Header: React.FC<Props> = ({ title, text, backLink }) => {
  const { goBack } = useNavigation();
  function handleNavigate7zBack() {
    goBack();
  }
  return (
    <View style={styles.header}>
      <View style={styles.logoAndNavigateContainer}>
        {backLink && (
          <TouchableOpacity onPress={handleNavigate7zBack} style={styles.back}>
            <AntDesign
              name="left"
              size={24}
              color={colors.backIcons}
              style={styles.backIcon}
            />
          </TouchableOpacity>
        )}
        <Image source={logo} style={styles.logoImage} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </View>
  );
};

export default Header;

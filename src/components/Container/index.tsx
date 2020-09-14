import React, { Children } from "react";

import { ViewProps } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../styles/colors";

const Container: React.FC<ViewProps> = (props) => {
  return (
    <LinearGradient {...props} colors={colors.background}>
      {props.children}
    </LinearGradient>
  );
};
export default Container;

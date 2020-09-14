import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const { Navigator, Screen } = createStackNavigator();
function AppStack() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
        <Screen name="Cadastro" component={Cadastro} />
      </Navigator>
    </NavigationContainer>
  );
}

export default AppStack;

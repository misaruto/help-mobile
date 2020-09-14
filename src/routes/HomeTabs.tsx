import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AntDesign, Ionicons } from "expo-vector-icons";
import { colors } from "../styles/colors";

import Home from "../pages/HomeTabs/Home";
import Subjects from "../pages/HomeTabs/Subjects";

const { Navigator, Screen } = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: { elevation: 0, shadowOpacity: 0, height: 64 },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: { flex: 0, width: 20, height: 20 },
        labelStyle: {
          fontSize: 13,
          marginLeft: 15,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name="Início"
        component={Home}
        options={{
          tabBarLabel: "Início",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <AntDesign
                name="appstore1"
                size={24}
                color={focused ? colors.tabBarFocusedIcons : color}
              />
            );
          },
        }}
      />
      <Screen
        name="Matérias"
        component={Subjects}
        options={{
          tabBarLabel: "Matérias",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="md-school"
                size={size}
                color={focused ? colors.tabBarFocusedIcons : color}
              />
            );
          },
        }}
      />
    </Navigator>
  );
}

export default HomeTabs;

import React from "react";
import Main from "../screens/Main";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Tab from "../screens/Tab";

export default function TabNavigation() {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="/" component={Main} options={{ title: "Home" }} />
      <BottomTab.Screen
        name="/BottomTab-one"
        component={Tab}
        options={{ title: "Detail" }}
      />
    </BottomTab.Navigator>
  );
}

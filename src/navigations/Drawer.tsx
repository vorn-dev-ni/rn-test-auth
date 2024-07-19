import React from "react";
import Main from "../screens/Main";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Drawer from "../screens/Drawer";

export default function DrawerNavigation() {
  const DrawerTab = createDrawerNavigator();
  return (
    <DrawerTab.Navigator>
      <DrawerTab.Screen name="/" component={Main} options={{ title: "Home" }} />
      <DrawerTab.Screen
        name="/drawer"
        component={Drawer}
        options={{ title: "Detail" }}
      />
    </DrawerTab.Navigator>
  );
}

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Main from "../screens/Main";
import TabNavigation from "./Tab";
import DrawerNavigation from "./Drawer";

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="/" component={Main} options={{title:"Home"}}/> */}
        {/* default as stack  */}

        {/* <Stack.Screen
          name="/tab"
          component={TabNavigation}
          options={{ title: "Home", headerShown: false }}
        /> */}

        {/* default as bottom navigation  */}
        
        <Stack.Screen
          name="/tab"
          component={DrawerNavigation}
          options={{ title: "Home", headerShown: false }}
        />
        {/* default as drawer  */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

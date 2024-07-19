import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AuthStackNavigator from "./AuthStack";
import HomeStackNavigator from "./HomeStack";
import { SafeAreaView, StyleSheet } from "react-native";
import { ViewStyle } from "react-native-size-matters";
import { StatusBar } from "expo-status-bar";
import appTheme from "../utils/theme";
import { PaperProvider } from "react-native-paper";

export default function RootNavigation({
  initRoute
}: {
  initRoute: '/auth' | '/tab-home'
}) {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider theme={appTheme}>
      <NavigationContainer>
        <SafeAreaView style={styles.root}>
          <StatusBar style="auto" translucent />
          <Stack.Navigator initialRouteName={initRoute}>
            <Stack.Screen
              name="/auth"
              component={AuthStackNavigator}
              options={{ title: "", headerShown: false }}
            />
            <Stack.Screen
              name="/tab-home"
              component={HomeStackNavigator}
              options={{ title: "", headerShown: false }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>

    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,

  }
})
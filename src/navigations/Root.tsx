import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreenDefault from "expo-splash-screen"
import { useFonts } from "expo-font";
import { DarkTheme, NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { SafeAreaView, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../context/Auth/useAuthContext";
import SplashScreen from "../components/Common/SplashScreen";
import { AppRoutes } from "../route";
import HomeStackNavigator from "./HomeStack";
import AuthStackNavigator from "./AuthStack";

export default function RootNavigation() {
  const Stack = createNativeStackNavigator();
  const navigationRef = useNavigationContainerRef(); // You can also use a regular ref with `React.useRef()`
  const {
    session_id, accessToken, loading
  } = useAuth()
  if (loading) {
    return null
  }
  else {
    setTimeout(() => {
      SplashScreenDefault.hideAsync();
    }, 1000)
  }

  return (
    <>

      <NavigationContainer ref={navigationRef} >
        <StatusBar

          backgroundColor={'transparent'}
          translucent={true}
        />
        <SafeAreaView style={styles.root}>

          <Stack.Navigator
            screenOptions={{
              // header: () => null,
              title: "",
              headerShadowVisible: false,
              presentation: 'modal',
            }}

          >
            {
              session_id && accessToken ? <Stack.Screen
                name={AppRoutes.HOME}
                component={HomeStackNavigator}
                options={{ title: "", headerShown: true }}
              />
                : <Stack.Screen
                  name={AppRoutes.LOGIN}
                  component={AuthStackNavigator}
                  options={{ title: "", headerShown: true }}
                />

            }

            <Stack.Screen
              name={AppRoutes.LOGIN_HOME}
              component={HomeStackNavigator}
              options={{ title: "", headerShown: true }}
            />
            <Stack.Screen
              name={AppRoutes.HOME_LOGIN}
              component={AuthStackNavigator}
              options={{ title: "", headerShown: true }}
            />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </>


  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,

  }
})
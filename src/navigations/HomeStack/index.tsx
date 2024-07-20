import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../screens/Main/Profile/profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import responsive from '../../utils/responsive_util';
import { AppRoutes } from '../../route';
import Login from '../../screens/Auth/Login';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
            <HomeStack.Screen name="Profile" component={Profile} options={{
                title: "Profile",
                headerTitleStyle: {
                    fontFamily: "Poppins_400Regular",
                    fontSize: responsive.moderateScale(30)
                },
                headerShown: true,
                headerShadowVisible: false
            }} />
            {/* <HomeStack.Screen name={AppRoutes.LOGIN} component={Login}
                options={{
                    title: "Login",
                    headerTitleStyle: {
                        fontFamily: "Poppins_400Regular",
                        fontSize: responsive.moderateScale(30)
                    },
                    headerShown: true,
                    headerShadowVisible: false
                }}

            /> */}


        </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;

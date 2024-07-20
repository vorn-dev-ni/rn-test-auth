import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Auth/Login';
import responsive from '../../utils/responsive_util';
import Profile from '../../screens/Tab/Profile/profile';
import { AppRoutes } from '../../route';
const AuthStack = createNativeStackNavigator();
const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='default'>
            <AuthStack.Screen name="default" component={Login}
                options={{
                    title: "Login",
                    headerTitleStyle: {
                        fontFamily: "Poppins_400Regular",
                        fontSize: responsive.moderateScale(30)
                    },
                    headerShown: true,
                    headerShadowVisible: false
                }}

            />
            {/* <AuthStack.Screen name={AppRoutes.LOGIN} component={Profile} options={{
                title: "Profile",
                headerTitleStyle: {
                    fontFamily: "Poppins_400Regular",
                    fontSize: responsive.moderateScale(30)
                },
                headerShown: true,
                headerShadowVisible: false
            }} /> */}
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;

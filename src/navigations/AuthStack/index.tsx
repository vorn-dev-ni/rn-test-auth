import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../../screens/Auth/Login';
import responsive from '../../utils/responsive_util';
const AuthStack = createNativeStackNavigator();
const AuthStackNavigator = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen name="Login" component={Login}
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
        </AuthStack.Navigator>
    );
};

export default AuthStackNavigator;

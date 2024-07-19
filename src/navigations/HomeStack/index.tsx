import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from '../../screens/Tab/Profile/profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import responsive from '../../utils/responsive_util';

const HomeStack = createNativeStackNavigator();

const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="/profile" component={Profile} options={{
                title: "Profile",
                headerTitleStyle: {
                    fontFamily: "Poppins_400Regular",
                    fontSize: responsive.moderateScale(30)
                },
                headerShown: true,
                headerShadowVisible: false
            }} />
            {/* <BottomTab.Screen name="Profile" component={Profile} /> */}
        </HomeStack.Navigator>
    );
};

export default HomeStackNavigator;

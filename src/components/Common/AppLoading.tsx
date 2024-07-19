import LottieView from 'lottie-react-native';
import { Text } from 'react-native-paper';
import { View } from 'react-native'
import React from 'react'

const AppLoading = ({
    description,
    source,
    width,
    height
}: AppLoadingProps) => {
    return (
        <View>
            <LottieView
                source={source}
                style={{ width: width || "100%", height: height || "100%" }}
                autoPlay
                loop
            />

            <Text >
                {description}
            </Text>
        </View>
    )
}

export default AppLoading
import { Text, useTheme } from 'react-native-paper'
import { View, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import appTheme from '../../utils/theme'

export default function ForgetPassword() {
    const theme = useTheme()
    return (
        <View style={styles.forgetpassword}>
            <TouchableOpacity>
                <Text style={styles.textForgetPassword} >
                    Forget Password
                </Text>
            </TouchableOpacity>


        </View>
    )
}
import { Ionicons } from '@expo/vector-icons'
import { RadioButton, Text } from 'react-native-paper';
import { View } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import CustomTextInput from '../../../components/Common/CustomTextInput'
import appTheme from '../../../utils/theme'
import RadioGender from '../../../components/Profile/RadioGender';
import ConfirmButton from '../../../components/Common/CustomButton';

export default function Profile() {

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{ flexDirection: 'row', gap: 10 }}>

                    <View style={{ flex: 1 }}>
                        <CustomTextInput
                            placeholder='Firstname'
                            maxLength={50}
                            onChangeText={(text: string) => {
                            }}
                            left={<Ionicons name="mail-outline" color={appTheme.colors.graydarker} size={24} />}
                            keyboardType='number-pad'

                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CustomTextInput
                            placeholder='Lastname'
                            maxLength={50}
                            onChangeText={(text: string) => {
                            }}
                            left={<Ionicons name="mail-outline" color={appTheme.colors.graydarker} size={24} />}
                            keyboardType='number-pad'

                        />
                    </View>



                </View>
                <View style={styles.spaceY}>
                    <CustomTextInput

                        placeholder='Lastname'
                        maxLength={50}
                        onChangeText={(text: string) => {
                        }}
                        left={<Ionicons name="mail-outline" color={appTheme.colors.graydarker} size={24} />}
                        keyboardType='number-pad'

                    />
                </View>

                <RadioGender label='Gender' />
                <ConfirmButton
                    onPress={() => { }}
                    placeholder='Logout' style={{ flex: 1, alignItems: 'center' }} />


            </View>


        </View>
    )
}
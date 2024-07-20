import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import styles from './styles'
import CustomTextInput from '../../../components/Common/CustomTextInput'
import appTheme from '../../../utils/theme'
import RadioGender from '../../../components/Profile/RadioGender';
import ConfirmButton from '../../../components/Common/CustomButton';
import { useNavigation, useNavigationContainerRef } from '@react-navigation/native'
import { useAuth } from '../../../context/Auth/useAuthContext'
import { useLayoutEffect, useState } from 'react'
import { AppRoutes } from '../../../route'
import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'
import AppLoading from '../../../components/Common/AppLoading'
import responsive from '../../../utils/responsive_util'

export default function Profile() {
    const navigation = useNavigation()
    const navigationRef = useNavigationContainerRef()
    const { logout, getUserprofile, currentUser } = useAuth()
    const [isLoading, setLoading] = useState(true)
    const loadingLotties = require("../../../../assets/others/loading-v2.json")
    const logoutAccount = async () => {
        setLoading(true)
        await logout()
        navigation.reset({
            index: 0,
            routes: [
                {
                    name: AppRoutes.LOGIN
                }
            ]
        })


    }
    const fetchUserProfile = async () => {
        try {
            setLoading(true)
            await getUserprofile()

        } catch (error: any) {
            //Force user to go back to login screen or login stack
            Dialog.show({
                type: ALERT_TYPE.DANGER,
                title: 'Something went wrong',
                textBody: error.message,
                button: 'close',
                autoClose: true,
                onHide() {

                    navigation.reset({ index: 0, routes: [{ name: AppRoutes.HOME_LOGIN }] })
                },

            })


        } finally {
            setLoading(false)

        }
    }
    useLayoutEffect(() => {
        fetchUserProfile()
    }, [])

    if (isLoading) {
        return <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
            <AppLoading height={responsive.verticalScale(250)} width={responsive.width(250)} source={loadingLotties} />

        </View>
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={{ flexDirection: 'row', gap: 10 }}>

                    <View style={{ flex: 1 }}>
                        <CustomTextInput
                            placeholder='Firstname'
                            maxLength={50}
                            defaultValue={currentUser?.firstName}
                            onChangeText={(text: string) => {
                            }}
                            keyboardType='number-pad'

                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CustomTextInput
                            defaultValue={currentUser?.lastName}
                            placeholder='Lastname'
                            maxLength={50}
                            onChangeText={(text: string) => {
                            }}
                            keyboardType='number-pad'

                        />
                    </View>



                </View>
                <View style={styles.spaceY}>
                    <CustomTextInput

                        placeholder='Email'
                        maxLength={50}
                        defaultValue={currentUser?.email}
                        onChangeText={(text: string) => {
                        }}
                        left={<Ionicons name="mail-outline" color={appTheme.colors.graydarker} size={24} />}
                        keyboardType='email-address'

                    />
                </View>

                <RadioGender label='Gender' value={currentUser.gender} updateGender={(gender: string) => {

                }} />
                <ConfirmButton
                    disable={isLoading}
                    onPress={logoutAccount}
                    placeholder='Logout' style={{ flex: 1, alignItems: 'center' }} />


            </View>


        </View>
    )
}
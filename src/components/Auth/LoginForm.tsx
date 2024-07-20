import { ALERT_TYPE, Dialog } from 'react-native-alert-notification'
import { CommonActions, useNavigation, useNavigationContainerRef } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import { useState } from 'react'
import styles from './styles'
import CustomTextInput from '../Common/CustomTextInput'
import appTheme from '../../utils/theme'
import ForgetPassword from './ForgetPassword'
import ConfirmButton from '../Common/CustomButton'
import CustomPhoneInput from '../Common/CustomPhoneInput'
import { useAuth } from '../../context/Auth/useAuthContext'
import { AppRoutes } from '../../route'
import { handleErrorResponse } from '../../service/error_handler'
import { ApiException } from '../../service/api_exception'

export type LoginFormProps = {
    type: "email" | "telephone"
}


export type FormLoginType = {
    telephone?: string;
    email?: string;
    password: string;
    code?: string
}
export default function LoginForm({ type }: LoginFormProps) {
    const {
        login
    } = useAuth();
    const [form, setForm] = useState({

        email: "",
        password: "",
        code: "+855"

    } as FormLoginType)
    const [isloading, setLoading] = useState(false)
    const [showHint, setShowHint] = useState(true)
    const navigation = useNavigation()
    const onSubmitLogin = async () => {
        try {
            setLoading(true)
            await login(form, type)
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [
                        { name: AppRoutes.LOGIN_HOME },

                    ],
                })
            )


        } catch (error: any) {

            error instanceof ApiException ?
                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: `${error.type}`,
                    textBody: error.message,
                    button: 'close',
                })
                :

                Dialog.show({
                    type: ALERT_TYPE.DANGER,
                    title: 'Something went wrong',
                    textBody: error.message,
                    button: 'close',
                })


        } finally {
            setLoading(false)
        }
    }
    return <View style={styles.innerContainer}>
        <View>
            {
                type === "email" ? <CustomTextInput
                    placeholder='Email'
                    maxLength={50}
                    value={form?.email || ""}
                    onChangeText={(text: string) => {
                        setForm(pre => ({ ...pre, email: text?.toString() }))


                    }}
                    left={<Ionicons name="mail-outline" color={appTheme.colors.graydarker} size={24} />}
                    keyboardType='email-address'

                /> :
                    <CustomPhoneInput
                        onChangeCode={(code: string) => {
                            setForm(pre => ({ ...pre, code }))
                        }}

                        value={form.telephone || ""}
                        onChangePhoneNumber={(text: string) => {

                            setForm((prev) => ({ ...prev, telephone: text }));
                        }}
                    />
            }

        </View>

        <View style={styles.spaceY}>
            <CustomTextInput
                placeholder='Password'
                maxLength={50}

                value={form?.password || ""}
                onChangeText={(text: string) => {
                    setForm(pre => ({ ...pre, password: text?.toString() }))
                }}
                onClickHint={() => {
                    setShowHint(pre => !pre)
                }}
                left={<Ionicons name="lock-closed-outline" color={appTheme.colors.graydarker} size={24} />}

                right={<Ionicons

                    name={
                        showHint ? "eye-outline" : "eye-off-outline"
                    }
                    color={appTheme.colors.graydarker} size={24} />}
                keyboardType='default'
                secureTextEntry={showHint}

            />
        </View>
        <ForgetPassword />
        <ConfirmButton
            placeholder='Continue'
            textColor='white'
            onPress={() => onSubmitLogin()}
            disable={isloading}
            customicon={<Ionicons name='arrow-forward' color={'white'} size={20} />}
            style={styles.buttonConfirm} />


    </View>


}
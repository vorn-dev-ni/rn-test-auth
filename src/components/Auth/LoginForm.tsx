import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { View } from 'react-native'
import { useState } from 'react'
import styles from './styles'
import CustomTextInput from '../Common/CustomTextInput'
import appTheme from '../../utils/theme'
import ForgetPassword from './ForgetPassword'
import ConfirmButton from '../Common/CustomButton'

type LoginFormProps = {
    type: "email" | "telephone"
}


type FormEmail = {
    telephone?: string;
    email?: string;
    password: string
}
export default function LoginForm({ type }: LoginFormProps) {

    const [form, setForm] = useState({} as FormEmail)
    const [showHint, setShowHint] = useState(true)
    const navigation = useNavigation()

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
                    <CustomTextInput
                        placeholder='Telephone'
                        maxLength={50}
                        value={form?.email || ""}
                        onChangeText={(text: string) => {
                            setForm(pre => ({ ...pre, email: text?.toString() }))
                        }}
                        left={<Ionicons name="mail-outline" color={appTheme.colors.graydarker} size={24} />}
                        keyboardType='number-pad'

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
            onPress={() => navigation.navigate('/tab-home')}
            customicon={<Ionicons name='arrow-forward' color={'white'} size={20} />}
            style={styles.buttonConfirm} />


    </View>


}
import { TextInput, TextInputProps, useTheme } from 'react-native-paper'
import { KeyboardTypeOptions, View } from 'react-native'
import appTheme from '../../utils/theme';



type CustomTextProps = {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    maxLength: number;
    value: string;
    onChangeText: (text: string) => void;
    left?: React.ReactNode
    right?: React.ReactNode
    onClickHint?: () => void;
} & TextInputProps;
export default function CustomTextInput(
    { placeholder, keyboardType, maxLength, value, onChangeText, left, right, onClickHint, ...props }: CustomTextProps
) {
    const theme = useTheme()
    return (
        <View style={{ width: '100%' }}>

            <TextInput
                style={{
                    backgroundColor: theme.colors.background
                }}
                value={value}
                onChangeText={onChangeText}
                mode='flat'
                placeholder={placeholder} placeholderTextColor={appTheme.colors.gray} keyboardType={keyboardType} maxLength={maxLength}
                left={
                    left ? (
                        <TextInput.Icon icon={() => left} />
                    ) : undefined
                }
                right={
                    right ? (

                        <TextInput.Icon icon={() => right} onPress={onClickHint} />


                    ) : undefined
                }




                {...props}

            />
        </View>
    )
}
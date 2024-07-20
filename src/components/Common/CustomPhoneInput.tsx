import {
    Country,
} from "react-native-country-picker-modal";
import { useRef } from 'react';
import { StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
type CustomPhoneInputProps = { value: string, onChangePhoneNumber: (text: string) => void, onChangeCode: (code: string) => void }
const CustomPhoneInput = ({ value, onChangePhoneNumber, onChangeCode }: CustomPhoneInputProps) => {

    return (
        <PhoneInput
            value={value}
            defaultCode="KH"
            layout="first"

            onChangeText={(text) => {
                onChangePhoneNumber(text);
            }}
            onChangeCountry={(country: Country) => {

                onChangeCode(country.callingCode[0]);
            }}
            containerStyle={styles.phoneInputContainer}
            textContainerStyle={styles.textContainer}
            textInputStyle={styles.textInput}
            codeTextStyle={styles.codeText}
            flagButtonStyle={styles.flagButton}
            withDarkTheme={false}
            withShadow

        />

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',

    },
    phoneInputContainer: {
        width: '100%',
        backgroundColor: '#f1f1f1', // Change this to match your background color
        borderRadius: 10,
        padding: 0,
    },
    textContainer: {
        backgroundColor: 'transparent',
    },
    textInput: {
        fontSize: 16,
        color: '#000',
    },
    codeText: {
        fontSize: 16,
        color: '#000',
    },
    flagButton: {
        backgroundColor: 'transparent',
    },
});

export default CustomPhoneInput;

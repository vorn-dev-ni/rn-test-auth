import { Button } from 'react-native-paper'
import { View, ViewStyle, StyleSheet } from 'react-native'
import React from 'react'
type CustomButtonProps = {
    placeholder: string;
    style: ViewStyle;
    textColor?: string;
    onPress?: () => void;
    customicon?: React.ReactNode
}
export default function ConfirmButton(
    {
        placeholder,
        style,
        textColor = 'white',
        customicon,
        onPress
    }: CustomButtonProps
) {
    return (
        <View style={styles.container}>
            <Button style={style}
                onPress={onPress}
                mode='contained'
                contentStyle={styles.content}
                icon={() => customicon}
                textColor={textColor}>

                {placeholder}



            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        marginVertical: 25, flexDirection: 'row', justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row-reverse',
        alignItems: 'center',

        justifyContent: 'space-between'
    }
})
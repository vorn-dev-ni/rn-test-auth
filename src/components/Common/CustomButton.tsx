import { Button } from 'react-native-paper';
import { View, ViewStyle, StyleSheet } from 'react-native';
import React from 'react';
import AppLoading from './AppLoading';
import responsive from '../../utils/responsive_util';
import appTheme from '../../utils/theme';

type CustomButtonProps = {
    placeholder: string;
    style: ViewStyle;
    textColor?: string;
    onPress?: () => void;
    customicon?: React.ReactNode;
    disable?: boolean;
}

export default function ConfirmButton(
    {
        placeholder,
        style,
        textColor = 'white',
        customicon,
        onPress,
        disable
    }: CustomButtonProps
) {
    return (
        <View style={styles.container}>
            <Button
                style={[style, disable && styles.disabledButton]}
                onPress={onPress}
                disabled={disable}
                mode='contained'
                contentStyle={styles.content}
                icon={() =>
                    !disable &&
                    customicon

                }
                textColor={textColor}>
                {
                    disable ? (
                        <View style={styles.loadingContainer}>
                            <AppLoading
                                width={responsive.width(25)}
                                height={responsive.verticalScale(25)}
                                source={require('../../../assets/others/loading-lotties.json')}
                            />
                        </View>
                    ) : (
                        placeholder
                    )
                }
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    loadingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',

    },
    disabledButton: {
        justifyContent: 'center',
    },
});

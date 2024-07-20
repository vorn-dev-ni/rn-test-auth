import { useTheme } from 'react-native-paper';
import {
    TabsProvider,
    Tabs,
    TabScreen,
} from 'react-native-paper-tabs';
import { View } from 'react-native';
import styles from './styles';
import { LoginScreenNavigationProp } from '../../types/navigation/navigation';
import { useNavigation } from '@react-navigation/native';
import LoginForm from '../../components/Auth/LoginForm';
import { useState, useEffect } from 'react';

export default function Login() {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [tabIndex, setTabIndex] = useState(0);
    const [formKey, setFormKey] = useState(0); // Add a state to control the form key
    const theme = useTheme();

    // Reset the form state when tab index changes
    useEffect(() => {
        setFormKey(prevKey => prevKey + 1);
    }, [tabIndex]);

    return (
        <View style={styles.container}>
            <TabsProvider
                defaultIndex={tabIndex}
                onChangeIndex={(index) => { setTabIndex(index); }}
            >
                <Tabs
                    theme={theme.colors.secondary}
                    style={styles.tabContainer}
                >
                    <TabScreen label='Email' >
                        <LoginForm type='email' key={formKey} />
                    </TabScreen>
                    <TabScreen label='Phone' >
                        <LoginForm type='telephone' key={formKey + 1} />
                    </TabScreen>
                </Tabs>
            </TabsProvider>
        </View>
    );
}

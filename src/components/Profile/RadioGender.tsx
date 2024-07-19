import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from './styles';

type GenderRadioProps = {
    label: string;
};

const RadioGender: React.FC<GenderRadioProps> = ({ label }) => {
    const [value, setValue] = useState('first');

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                <View style={styles.radioContainer}>
                    <View style={styles.radioItem}>

                        <RadioButton value="first" />
                        <Text>Male</Text>
                    </View>
                    <View style={styles.radioItem}>

                        <RadioButton value="second" />
                        <Text>Female</Text>
                    </View>
                </View>
            </RadioButton.Group>
        </View>
    );
};



export default RadioGender;

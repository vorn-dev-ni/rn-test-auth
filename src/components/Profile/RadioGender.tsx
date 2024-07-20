import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from './styles';

type GenderRadioProps = {
    label: string;
    value: "Male" | "Female";
    updateGender: (newValue: string) => void;
};

const RadioGender: React.FC<GenderRadioProps> = ({ label, value, updateGender }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <RadioButton.Group onValueChange={newValue => updateGender(newValue)} value={value}>
                <View style={styles.radioContainer}>
                    <View style={styles.radioItem}>

                        <RadioButton value="Male" />
                        <Text>Male</Text>
                    </View>
                    <View style={styles.radioItem}>

                        <RadioButton value="Female" />
                        <Text>Female</Text>
                    </View>
                </View>
            </RadioButton.Group>
        </View>
    );
};



export default RadioGender;

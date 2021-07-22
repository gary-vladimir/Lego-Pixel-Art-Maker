import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const legoColors = [
    '05131D',
    'F2CD37',
    '237841',
    '008F9B',
    '0055BF',
    'E4ADC8',
    'ADC3C0',
    'D09168',
    '4B9F4A',
    '81007B',
    'BBE90B',
    'FFFFFF',
];

export function ColorPicker() {
    return (
        <View style={styles.container}>
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
            <View style={styles.square} />
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: 'red',
        width: 35,
        height: 35,
        margin: 5,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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

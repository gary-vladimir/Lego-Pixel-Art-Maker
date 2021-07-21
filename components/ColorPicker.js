import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function ColorPicker() {
    return (
        <View>
            <View style={styles.square} />
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: 'red',
        width: 35,
        height: 35,
    },
});

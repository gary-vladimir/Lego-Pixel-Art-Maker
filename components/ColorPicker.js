import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

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
            {legoColors.map((color) => {
                return (
                    <TouchableOpacity
                        key={color}
                        onPress={() => {
                            console.log('user selected color:', color);
                        }}
                    >
                        <View
                            style={[
                                styles.square,
                                { backgroundColor: `#${color}` },
                            ]}
                        />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    square: {
        backgroundColor: 'red',
        width: 35,
        height: 35,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
    },
});

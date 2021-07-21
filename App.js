import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';

function CustomStatusBar({ backgroundColor, ...props }) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar
                translucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </View>
    );
}

export default function App() {
    return (
        <View style={styles.container}>
            <CustomStatusBar
                backgroundColor={'#8d99ae'}
                barStyle="light-content"
            />
            <View style={{ padding: 20 }}>
                <Text>Lego Pixel Art Maker</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

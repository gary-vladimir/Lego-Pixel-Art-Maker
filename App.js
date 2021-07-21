import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { ColorPicker } from './components/ColorPicker';

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
                <Text style={styles.title}>Lego Pixel Art Maker</Text>
                <ColorPicker />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        color: '#1D3557',
        fontSize: 30,
        fontWeight: 'bold',
        width: 200,
        marginBottom: 20,
    },
});

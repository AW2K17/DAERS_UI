import React, { PureComponent, useState } from 'react';
import { StyleSheet,Text, View } from 'react-native';


export const SettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Settings</Text>
            
        </View>
    );
}

export default SettingsScreen;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
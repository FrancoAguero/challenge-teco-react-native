import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


export const PermissionButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            onPress={ onPress }
            activeOpacity={ 0.9 }
            style={ styles.permissionButton }
        >
            <Text style={ styles.buttonText }>{ title }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    permissionButton: {
        height: 45,
        width: 200,
        backgroundColor: 'black',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowOpacity: 0.27,
        elevation: 6
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
});

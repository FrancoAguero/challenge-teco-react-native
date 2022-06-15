import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';
import { PermissionButton } from '../components/Buttons/PermissionButton';


const PermissionsScreen = () => {

    const { permissions, askLocationPermission } = useContext( PermissionsContext );


    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>Es necesario el uso del GPS para usar esta aplicación </Text>

            <PermissionButton 
                title="Permiso"
                onPress={ askLocationPermission }
            />
        </View>
    )
}

export default PermissionsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        width: 250,
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20
    }
});

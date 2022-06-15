//react
import React, {useContext} from 'react'

//navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Screens
import HomeScreen from '../views/HomeScreen'
import PermissionsScreen from '../views/PermissionScreen'
import LoadingScreen from '../views/LoadingScreen'

//context
import { PermissionsContext } from '../context/PermissionsContext'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

  const { permissions } = useContext(PermissionsContext)

  if(permissions.locationStatus === "unavailable")
    return  <LoadingScreen /> 

  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown: false
      }}
    >
      {
        (permissions.locationStatus === "granted") ? 
          <Stack.Screen name="Home" component={HomeScreen}/>
          :
          <Stack.Screen name="Permissions" component={PermissionsScreen}/>
      }
    </Stack.Navigator>
  )
}

export default StackNavigator

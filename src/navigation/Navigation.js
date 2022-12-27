import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../components/authention/login/LoginScreen'
import RegisterScreen from '../components/authention/register/RegisterScreen'
import HomeScreen from '../components/home/HomeScreen';
import ContacScreen from '../components/contact/ContactScreen'
import Constant from '../controller/Constant'
import DetailContactScreen from '../components/contact/DetailContactScreen';

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name={Constant.nameScreens.Login} component={LoginScreen} />
                <Stack.Screen name={Constant.nameScreens.Register} component={RegisterScreen} />
                <Stack.Screen name={Constant.nameScreens.Home} component={HomeScreen} />
                <Stack.Screen
                    name={Constant.nameScreens.Contact}
                    component={ContacScreen}
                    options={{ title: 'Danh bạ' }}
                />
                <Stack.Screen
                    name={Constant.nameScreens.DetailContact}
                    component={DetailContactScreen}
                    options={{ title: '' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

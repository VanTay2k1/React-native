import { ScrollView, StyleSheet, Text, Image, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import CustomButton from '../../commom/CustomButton'
import Icon from 'react-native-vector-icons/Ionicons'
import Logo from '../../../assets/images/logo1.png'
import InputFiled from '../../commom/InputFiled'
import { useNavigation } from '@react-navigation/native'
import Constant from '../../../controller/Constant'

const LoginScreen = () => {

    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigation = useNavigation()

    const onSignInPress = () => {
        console.warn('Logged in successfully')
        navigation.navigate(Constant.nameScreens.Home)
    }
    const onSignUpPress = () => {
        navigation.navigate(Constant.nameScreens.Register)
    }
    const onContactsPress = () => {
        navigation.navigate(Constant.nameScreens.Contact)
    }

    return (
        <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
            <SafeAreaView style={styles.container}>
                <Image
                    style={styles.logo}
                    source={Logo} />
                <Text style={styles.titleLogin}> WELCOME</Text>

                <InputFiled
                    placeholder='Username'
                    value={userName}
                    setValue={setUserName} />
                <InputFiled
                    placeholder='Password'
                    value={password}
                    setValue={setPassword}
                    secureTextEntry={true} />

                <TouchableOpacity onPress={onSignInPress}>
                    <Text style={styles.textForgot}>Forgot password?</Text>
                </TouchableOpacity>

                <CustomButton text={'LOGIN'} onPress={onContactsPress} />

                <Text>Or, register with...</Text>

                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <TouchableOpacity style={styles.icon} onPress={onSignInPress}>
                        <Icon name='logo-facebook' size={30} color='#0066ff' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={onSignInPress}>
                        <Icon name='logo-google' size={30} color='#ff471a' />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.icon} onPress={onSignInPress}>
                        <Icon name='logo-twitter' size={30} color='#66ccff' />
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 20 }}>
                    <Text>Don't have a account?</Text>
                    <TouchableOpacity onPress={onSignUpPress}>
                        <Text style={styles.textButton}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        alignItems: 'center',
    },
    logo: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleLogin: {
        marginVertical: 10,
        fontSize: 30,
        color: 'red',
        fontFamily: 'Cochin',
        fontWeight: 'bold'
    },
    icon: {
        marginHorizontal: 10,
    },
    textButton: {
        color: 'red',
        fontSize: 15,
        marginHorizontal: 5,
    },
    iconLogo: {
        flexDirection: 'row',
        marginTop: 20,
        marginHorizontal: 10,
    },
    text: {
        marginVertical: 20,
    },
    textForgot: {
        color: 'red',
        marginStart: '50%',
        marginTop: 10
    }
})

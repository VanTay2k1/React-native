import { ScrollView, StyleSheet, Text, Image, SafeAreaView, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import CustomButton from '../../commom/CustomButton'
import Icon from 'react-native-vector-icons/Ionicons'
import Logo from '../../../assets/images/logo1.png'
import InputFiled from '../../commom/InputFiled'

const LoginScreen = ({ navigation }) => {

  const [userName, setUserName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repassword, setRePassword] = React.useState('');

  const onSignInPress = () => {
    console.warn('sign in')
  }
  return (
    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
      <SafeAreaView style={styles.container}>

        <Text style={styles.titleLogin}> Create an account</Text>

        <InputFiled
          placeholder='Username'
          value={userName}
          setValue={setUserName} />

        <InputFiled
          placeholder='Email'
          value={email}
          setValue={setEmail} />

        <InputFiled
          placeholder='Password'
          value={password}
          setValue={setPassword}
          secureTextEntry />

        <InputFiled
          placeholder='Repeat Password'
          value={repassword}
          setValue={setRePassword}
          secureTextEntry />

        <CustomButton text={'REGISTER'} onPress={onSignInPress} />

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
          <Text>Already have an account</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.textButton}>
              Sign in
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
    fontSize: 40,
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
    marginHorizontal: 10,
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

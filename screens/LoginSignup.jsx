import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../images/Layer_1.png'
import { Image } from 'react-native';

const LoginSignup = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    // Perform login logic here using email and password
    console.log('Email:', email);
    console.log('Password:', password);
  };

  

  return (
    <SafeAreaView className="m-5">

      <View className="flex flex-col mt-10 justify-between">
      <Image source={Logo} className="max-w-2xl mx-auto object-cover" />
          
        <View className="mt-44">
          <TouchableOpacity 
            onPress={() => navigation.navigate('WelcomeScreen')}
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
          >
            <Text className="text-center font-bold text-black" >Login</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateTwo')}
            className="flex p-5 rounded-xl bg-[#9E9E9E] mt-5"
          >
            <Text className="text-center font-bold text-black" >Sign Up</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default LoginSignup
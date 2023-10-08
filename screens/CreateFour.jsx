import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../images/Layer_1.png'
import Ellipse from '../images/Ellipse.png'

import { Image } from 'react-native';

const CreateFour = ({ navigation }) => {

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
      <Image source={Ellipse} className="max-w-2xl mx-auto" />

      <View className="mt-20">
        <Text className="text-center text-xl font-bold">Check your email!</Text>
      </View>

      <View className="flex justify-center items-center mt-20 w-3/4 mx-auto">
        <Text className="text-center font-bold">To confirm your email address, tap the button in the email we sent to irene@gmail.com </Text>
      </View>
          
        <View className="mt-20">
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateFive')}
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
          >
            <Text className="text-center font-bold text-black" >Open email app</Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default CreateFour
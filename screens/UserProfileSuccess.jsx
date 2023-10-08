import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../images/Layer_1.png'
import Ellipse from '../images/Ellipse.png'
import { Ionicons } from '@expo/vector-icons';


import { Image } from 'react-native';

const UserProfileSuccess = ({ navigation }) => {

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
        <TouchableOpacity className="mt-5" onPress={() => navigation.goBack()}>
            <Ionicons name='arrow-back' size={30} color="black" />
        </TouchableOpacity>

      <View className="flex flex-col mt-20 justify-between">
      <Image source={Ellipse} className="max-w-2xl mx-auto" />

      <View className="mt-20">
        <Text className="text-center text-3xl font-bold">Successfully verified</Text>
      </View>

      <View className="flex mt-5 justify-center items-center w-80 mx-auto">
        <Text className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</Text>
      </View>
          
        <View className="mt-20">
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateFive')}
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
          >
            <Text className="text-center text-xl font-bold text-black" >Finish</Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default UserProfileSuccess
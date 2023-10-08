import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../images/Layer_1.png'
import Ellipse from '../images/Ellipse.png'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


import { Image } from 'react-native';

const ManageWallet = ({ navigation }) => {

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
        <TouchableOpacity className="mt-5 flex justify-end items-end" onPress={() => navigation.goBack()}>
            {/* <Ionicons name='arrow-back' size={30} color="black" /> */}
            <AntDesign name="close" className="font-bold" size={30} color="black" />
        </TouchableOpacity>

      <View className="flex flex-col mt-10 justify-between">
      {/* <Image source={Ellipse} className="max-w-2xl mx-auto" /> */}

      <View className="mt-5">
        <Text className="text-center text-2xl font-bold">Preferred when paying online</Text>
        <Text className="text-center mt-5">We'll use this when you shop online or send monry for goods and services.</Text>
        <Text className="text-[#514f4f] text-center mt-5 text-base font-bold" >More about payment preferences</Text>
      </View>

      <View className="flex mt-14 justify-center items-center w-96 mx-auto">
        <Text className="text-center font-bold text-base">To set preferences, add payment methods to your Wallet or update any unconfirmed banks or expired cards.</Text>
      </View>
          
        <View className="mt-10">
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateFive')}
            className="flex p-5 rounded-full bg-[#9E9E9E]"
          >
            <Text className="text-center text-xl font-bold text-black" >Manage Wallet</Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default ManageWallet
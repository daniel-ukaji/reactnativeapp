import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Logo from '../images/Layer_1.png'
// import Ellipse from '../images/Ellipse.png'
import Check from '../images/Check.png'
import { Image } from 'react-native';

const CreateFive = ({ navigation }) => {

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

      <View className="flex flex-col mt-10 h-full justify-center my-auto ">
        <View className="rounded-lg pb-10 pt-10 bg-[#DADADA]">

      <Image source={Check} className="max-w-2xl mx-auto" />

      <View className="mt-10">
        <Text className="text-center text-xl font-bold">Verified!</Text>
      </View>

      <View className="flex justify-center items-center mt-10 w-3/4 mx-auto">
        <Text className="text-center font-bold">Your email has been verified successfully</Text>
      </View>
          
        <View className="mt-10">
          <TouchableOpacity 
            onPress={() => navigation.navigate('OtpScreen')}
            className="flex p-5 rounded-xl bg-white w-1/2 mx-auto"
          >
            <Text className="text-center font-bold text-black" >Go to Dashboard</Text>
          </TouchableOpacity>
          
        </View>
        
      </View>
        </View>
    </SafeAreaView>
  )
}

export default CreateFive
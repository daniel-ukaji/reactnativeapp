import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeScreen = ({ navigation }) => {

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
      <Text className="mt-10 font-bold text-2xl mb-2">Login to your Payday account</Text>
      <Text>Don't have an account? Create an account</Text>

      <View className="flex flex-col mt-10 justify-between">
        <View className=" justify-start">
          <TextInput
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Enter email"
            keyboardType="email-address"
            autoCapitalize="none"
            className="p-5 border rounded-md"
          />
          <TextInput
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Enter password"
            secureTextEntry
            className="p-5 border rounded-md mt-8"
          />
          <View className="flex flex-row mt-4">
            <Text className="text-gray-600">Forgot Password?</Text>
            <TouchableOpacity><Text> Reset</Text></TouchableOpacity>
          </View>
        </View>
        <View className="mt-10">
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateOne')}
            className="border flex p-4 rounded-xl bg-black"
          >
            <Text className="text-center text-white" >Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
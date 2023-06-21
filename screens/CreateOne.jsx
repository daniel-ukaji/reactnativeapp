import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const CreateOne = ({ navigation }) => {

  const [name, setName] = useState('');

  const handleEmailChange = (text) => {
    setName(text);
  };

  const handleLogin = () => {
    // Perform login logic here using email and password
    console.log('Name:', name);
  };

  

  return (
    <SafeAreaView className="m-5">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={30} color="black" />
      </TouchableOpacity>
      <Text className="mt-10 font-bold text-2xl mb-2">Start sending and receiving cash globally</Text>
      <Text>Already have an account? Login</Text>

      <View className="flex flex-col mt-10 justify-between">
        <View className=" justify-start">
          <TextInput
            value={name}
            onChangeText={handleEmailChange}
            placeholder="First and Last Name"
            autoCapitalize="none"
            className="p-5 border rounded-md"
          />
          
          <View className="flex flex-row mt-4">
            <Text className="text-gray-600">By proceeding you agree to our</Text>
            <TouchableOpacity><Text> Terms of Service and </Text></TouchableOpacity>
          </View>
          <TouchableOpacity><Text>Privacy policy </Text></TouchableOpacity>
        </View>
        <View className="mt-14">
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateTwo')}
            className="border flex p-4 rounded-xl bg-black"
          >
            <Text className="text-center text-white" >Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CreateOne
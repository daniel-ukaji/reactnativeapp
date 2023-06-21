import { View, Text, SafeAreaView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const CreateTwo = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [referral, setReferral] = useState('');
  
    const handleEmailChange = (text) => {
      setEmail(text);
    };
  
    const handlePasswordChange = (text) => {
      setPassword(text);
    };

    const handleReferralChange = (text) => {
        setReferral(text);
      };
  
    const handleLogin = () => {
      // Perform login logic here using email and password
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Referral:', referral);
    };

  return (
    <SafeAreaView className="m-5">
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back' size={30} color="black" />
      </TouchableOpacity>
      <Text className="mt-10 font-bold text-2xl mb-2">Set email & password</Text>
      <Text>Please use your personal email address.</Text>

      <View className="flex flex-col mt-10 justify-between">
        <View className=" justify-start">
        <TextInput
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            className="p-5 border rounded-md"
          />
          <TextInput
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Password"
            secureTextEntry
            className="p-5 border rounded-md mt-8"
          />
          <TextInput
            value={referral}
            onChangeText={handleReferralChange}
            placeholder="Referral Code (Optional)"
            autoCapitalize="none"
            className="p-5 border rounded-md mt-8"
          />
          
        </View>
        <View className="mt-14">
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateOne')}
            className="border flex p-4 rounded-xl bg-black"
          >
            <Text className="text-center text-white" >Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default CreateTwo
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const CreateOne = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleEmailChange = (text) => {
    setName(text);
  };

  const handleNameChange = (text) => {
    setEmail(text);
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
      

      <View className="flex flex-col mt-36 justify-between">
        <View className=" justify-start">
          <TextInput
            value={name}
            onChangeText={handleEmailChange}
            placeholder="Email"
            autoCapitalize="none"
            placeholderTextColor="black" // Set the color of the placeholder text
            className="p-5 border rounded-md"
          />

          <TextInput
            value={email}
            onChangeText={handleNameChange}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="black" // Set the color of the placeholder text
            className="p-5 border rounded-md mt-5"
            secureTextEntry={true} // Set this prop to true to hide the entered text
          />
          
        </View>
        <View className="mt-14">
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateTwo')}
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
          >
            <Text className="text-center font-bold text-black" >Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container} className="mt-10">
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>
      </View>

      <View className="mt-10">
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateTwo')}
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
          >
            <Text className="text-center font-bold text-white" >Continue With Facebook</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-5">
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateTwo')}
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
          >
            <Text className="text-center font-bold text-white" >Continue With Google</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-10 flex justify-center items-center">
          <TouchableOpacity onPress={() => navigation.navigate('CreateTwo')}>
            <Text>Don't have an account? SignUp</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'black',
  },
  orText: {
    marginHorizontal: 10,
    color: 'black',
  },
});

export default CreateOne
import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'


const CreateThree = ({ navigation }) => {

  const [name, setName] = useState('');
  const [selectedValue, setSelectedValue] = useState(''); // State to store the selected value
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]



  const handleEmailChange = (text) => {
    setName(text);
  };

  const handleValueChange = (value) => {
    setSelectedValue(value);
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

      <View>
        <Text className="text-3xl">Set up your profile</Text>
        <Text className="mt-3">This info needs to be accurate</Text>
      </View>
      

      <View className="flex flex-col mt-10 justify-between">
        <View className=" justify-start">
        
          <TextInput
            value={name}
            onChangeText={handleEmailChange}
            placeholder="Nationality"
            placeholderTextColor="black" // Set the color of the placeholder text
            autoCapitalize="none"
            className="p-5 border rounded-md"
          />

          <TextInput
            value={name}
            onChangeText={handleEmailChange}
            placeholder="What’s your first name?"
            placeholderTextColor="black" // Set the color of the placeholder text
            autoCapitalize="none"
            className="p-5 border rounded-md mt-5"
          />
          <TextInput
            value={name}
            onChangeText={handleEmailChange}
            placeholder="And your last name?"
            placeholderTextColor="black" // Set the color of the placeholder text
            autoCapitalize="none"
            className="p-5 border rounded-md mt-5"
          />
        </View>
        

        <View className="mt-8">
          <Text className="font-bold">Where do you live?</Text>
          <TextInput
            value={name}
            onChangeText={handleEmailChange}
            placeholder="Nigeria"
            placeholderTextColor="black" // Set the color of the placeholder text
            autoCapitalize="none"
            className="p-5 border rounded-md mt-5"
          />
        </View>

        <View className="mt-8">
          <Text className="font-bold">Mobile Number</Text>
          <TextInput
            value={name}
            onChangeText={handleEmailChange}
            placeholder="Nigeria"
            placeholderTextColor="black" // Set the color of the placeholder text
            autoCapitalize="none"
            className="p-5 border rounded-md mt-5"
          />
          <TextInput
            value={name}
            onChangeText={handleEmailChange}
            placeholder="Select your gender"
            placeholderTextColor="black" // Set the color of the placeholder text
            autoCapitalize="none"
            className="p-5 border rounded-md mt-5"
          />
        </View>
      </View>

      

      <View className="mt-14">
          <TouchableOpacity 
            onPress={() => navigation.navigate('CreateFour')}
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
          >
            <Text className="text-center font-bold text-black" >Send Verification Code</Text>
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

export default CreateThree
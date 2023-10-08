import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import React, { useState } from 'react'
import { Button } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown'


const MoreDetails = ({ navigation }) => {

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
        <Text className="text-3xl">More details</Text>
        <Text className="mt-3">Use the one that is on your bills</Text>
      </View>
      

      <View className="flex flex-col mt-10 justify-between">
        <View className=" justify-start">
        
          <TextInput
            value={name}
            onChangeText={handleEmailChange}
            placeholder="212 Lola Holloway St"
            placeholderTextColor="black" // Set the color of the placeholder text
            autoCapitalize="none"
            className="p-5 border rounded-md"
          />

          <TextInput
            value={name}
            onChangeText={handleEmailChange}
            placeholder="City"
            placeholderTextColor="black" // Set the color of the placeholder text
            autoCapitalize="none"
            className="p-5 border rounded-md mt-5"
          />
          <View className="flex flex-row space-x-3 items-center">
            <TextInput
                value={name}
                onChangeText={handleEmailChange}
                placeholder="State"
                placeholderTextColor="black" // Set the color of the placeholder text
                autoCapitalize="none"
                className="p-5 border rounded-md mt-5 w-1/2"
            />
              <TextInput
                value={name}
                onChangeText={handleEmailChange}
                placeholder="ZIP code"
                placeholderTextColor="black" // Set the color of the placeholder text
                autoCapitalize="none"
                className="p-5 border rounded-md mt-5 w-44"
            />

          </View>
        </View>
        

        <View className="mt-8">
          <Text className="font-bold">Date of birth</Text>
          <View className="flex flex-row space-x-3 items-center">
            <TextInput
                value={name}
                onChangeText={handleEmailChange}
                placeholder="Month"
                placeholderTextColor="black" // Set the color of the placeholder text
                autoCapitalize="none"
                className="p-5 border rounded-md mt-5 w-1/3"
            />
              <TextInput
                value={name}
                onChangeText={handleEmailChange}
                placeholder="Day"
                placeholderTextColor="black" // Set the color of the placeholder text
                autoCapitalize="none"
                className="p-5 border rounded-md mt-5 w-1/4"
            />
            <TextInput
                value={name}
                onChangeText={handleEmailChange}
                placeholder="Year"
                placeholderTextColor="black" // Set the color of the placeholder text
                autoCapitalize="none"
                className="p-5 border rounded-md mt-5 w-1/3"
            />

          </View>
         
        </View>

        
      </View>

      

      <View className="mt-14">
          <TouchableOpacity 
            onPress={() => navigation.navigate('SocialSecurity')}
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
          >
            <Text className="text-center font-bold text-black" >Continue</Text>
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

export default MoreDetails
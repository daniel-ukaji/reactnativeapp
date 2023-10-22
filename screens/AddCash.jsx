import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Card2 from '../images/card2.png';
import Visa from '../images/visas.png';

const AddCash = ({navigation}) => {

  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.goBack()} className="m-5">
            <Ionicons name='arrow-back' size={30} color="black" />
        </TouchableOpacity>

        <View className="m-5 flex flex-row justify-between items-center">
            <Text className="font-semibold text-2xl">Pick a Card</Text>
            <TouchableOpacity 
            onPress={() => navigation.navigate('Cards')}
          >
            <Text className="text-lg">+ Add New Card</Text>
          </TouchableOpacity>
        </View>

        {/* <View className="m-5">
            <Image source={Card2} className="mt-7 w-full rounded-lg" />
        </View> */}

        <TouchableOpacity 
            className="m-5 p-6 bg-[#9e9e9e] h-48 rounded-2xl"
            // onPress={() => navigation.navigate('LinkCard')}
        >
            <Image source={Visa} className="" />
            <View className="flex flex-row space-x-14 mt-10 items-center">
                <Text className="text-white text-base">****</Text>
                <Text className="text-white text-base">****</Text>
                <Text className="text-white text-base">****</Text>
                <Text className="text-white text-base">3282</Text>
            </View>

            <View className="flex flex-row justify-between">
                <View className="mt-5">
                    <Text className="text-gray-700">Card Holder</Text>
                    <Text className="text-white">Aycan Doganlar</Text>
                </View>
                <View className="mt-5">
                    <Text className="text-gray-700">Expires</Text>
                    <Text className="text-white">12/23</Text>
                </View>
            </View>
        </TouchableOpacity>

        <View className="flex flex-row justify-between m-6 border-b border-gray-300 pb-3">
            <Text>Visa Card</Text>
            <Text>N100 + 1.5% of Amount</Text>
        </View>

        <View className="m-6">
            <TextInput
            value=""
            onChangeText=""
            placeholder="Amount"
            placeholderTextColor="black" // Set the color of the placeholder text
            autoCapitalize="none"
            className="p-5 border rounded-md"
            />
        </View>

        <View className="mt-8 m-6">
            <TouchableOpacity 
                onPress={() => navigation.navigate('AddCashSuccess')}
                className="flex p-5 rounded-xl bg-[#9E9E9E]"
            >
                <Text className="text-center font-bold text-black" >Add Cash</Text>
            </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#d9d9d9',
      borderRadius: 20, 
    },
    header: {
      height: 100, // Set the fixed height here
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 16,
      backgroundColor: '#d9d9d9',
    },
    image: {
      // Add image styles here
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#d9d9d9', // Set the background color here
    },
    circle: {
      width: 50,  // Adjust the size as needed
      height: 50, // Adjust the size as needed
      borderRadius: 25, // half of width/height to create a circle
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 24, // Adjust the font size as needed
    },
  });

export default AddCash;

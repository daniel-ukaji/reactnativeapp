import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';
import UserHomeCircle from '../images/userhomecircle.png'
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';


// import tw from 'tailwind-react-native-classnames';

const UserHomeWallet = ({ navigation }) => {

  return (
    <SafeAreaView className={`flex-1 m-5 mt-14 bg-[#f1f1f1]`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row justify-between" >
          <Text></Text>
          <FontAwesome5 name="user-circle" size={50} color="gray" />
        </View>

        <Text className="text-center font-semibold text-lg">Today</Text>

        <View className="bg-[#d9d9d9] p-5 rounded-2xl mt-4">
          <Text className="mt-5 font-bold text-base">Hello, Itunu</Text>
          <View className="flex flex-row justify-between items-center">
            <Text className="mt-5 font-bold text-3xl">$ 500.20</Text>
            <View>
              <Octicons name="arrow-switch" size={30} className="font-extralight" color="black" />
            </View>
          </View>
          <Text className="mt-2 font-bold text-base">Your Balance</Text>

          <View className="flex flex-row justify-between mt-7" >
            <TouchableOpacity 
              className="flex p-5 rounded-full w-40 bg-[#9E9E9E]"
              onPress={() => navigation.navigate('WalletPage')}
            >
              <Text className="text-center font-bold text-black" >Add Cash</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              className="flex p-5 rounded-full w-40 bg-[#9E9E9E]"
            >
              <Text className="text-center font-bold text-black" >Cash Out</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Small Cards */}
        <View>
          <View className="flex flex-row justify-between items-center">
            <View className="mt-7 bg-[#d9d9d9] p-5 w-44 rounded-2xl">
            <Text className="font-semibold text-lg">Cash</Text>
              <View className="flex flex-row justify-between mt-3 mb-14">
                <Image source={UserHomeCircle} className="object-cover" />
              </View>
            </View>

            <View className="mt-7 bg-[#d9d9d9] p-5 w-44 rounded-2xl">
              <Text className="font-semibold text-lg">Crypto</Text>
              <View className="flex flex-row justify-between mt-3 mb-14">
                <Image source={UserHomeCircle} className="object-cover" />
              </View>
            </View>
          </View>

          <View className="flex flex-row justify-between items-center">
          <View className="mt-7 bg-[#d9d9d9] p-5 w-44 rounded-2xl">
          <Text className="font-semibold text-lg">Stock</Text>
            <View className="flex flex-row justify-between mt-3 mb-14">
              <Image source={UserHomeCircle} className="object-cover" />
            </View>
          </View>

          <View className="mt-7 bg-[#d9d9d9] p-5 w-44 rounded-2xl">
            <Text className="font-semibold text-lg">Minutes</Text>
            <View className="flex flex-row justify-between mt-3 mb-14">
              <Image source={UserHomeCircle} className="object-cover" />
            </View>
          </View>
        </View>

        </View>

      </ScrollView>
        
    </SafeAreaView>
  );
};

export default UserHomeWallet;

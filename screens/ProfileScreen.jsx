import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';
import Ellipse2 from '../images/Ellipse2.png'
import { Entypo } from '@expo/vector-icons';


// import tw from 'tailwind-react-native-classnames';

const ProfileScreen = () => {

  return (
    <SafeAreaView className={`flex-1 m-5 mt-14 bg-[#f1f1f1]`}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text className={`text-3xl mb-4 font-semibold`}>Profile</Text>
      
      <View className="flex flex-row items-center space-x-3 bg-[#9e9e9e] p-5 py-7 rounded-md" >
        <FontAwesome5 name="user-circle" size={50} color="white" />
        <View className="">
            <Text className="text-white font-semibold" >Itunuoluwa Abidoye</Text>
            <Text className="text-white font-semibold" >@Itunuoluwa</Text>
        </View>
      </View>

    <View className="bg-white mt-10 rounded-md p-5">
      <View className="mt-3 flex flex-row items-center justify-between">
      <View className="flex flex-row items-center space-x-5">
        <Image source={Ellipse2} className="object-cover" />
            <View>
                <Text className="font-bold text-base" >My Account</Text>
                <Text className="text-md text-[#adadad]" >Make changes to your account</Text>
            </View>
        </View>
        <View>
            <Entypo name="chevron-right" size={24} color="#adadad" />
        </View>

      </View>

      <View className="mt-10 flex flex-row items-center justify-between">
      <View className="flex flex-row items-center space-x-5">
        <Image source={Ellipse2} className="object-cover" />
            <View>
                <Text className="font-bold text-base" >Saved Beneficiary</Text>
                <Text className="text-md text-[#adadad]" >Manage your saved account</Text>
            </View>
        </View>
        <View>
            <Entypo name="chevron-right" size={24} color="#adadad" />
        </View>

      </View>

      <View className="mt-10 flex flex-row items-center justify-between">
      <View className="flex flex-row items-center space-x-5">
        <Image source={Ellipse2} className="object-cover" />
            <View>
                <Text className="font-bold text-base" >Security & Privacy</Text>
                <Text className="text-md text-[#adadad]" >Further secure your account for {'\n'}safety</Text>
            </View>
        </View>
        <View>
            <Entypo name="chevron-right" size={24} color="#adadad" />
        </View>

      </View>

      <View className="mt-10 flex flex-row items-center justify-between">
      <View className="flex flex-row items-center space-x-5">
        <Image source={Ellipse2} className="object-cover" />
            <View>
                <Text className="font-bold text-base" >Log Out</Text>
                <Text className="text-md text-[#adadad]" >Further secure your account for{'\n'}safety</Text>
            </View>
        </View>
        <View>
            <Entypo name="chevron-right" size={24} color="#adadad" />
        </View>

      </View>
    </View>

    <View className="bg-white mt-10 rounded-md p-5">
      <View className="mt-3 flex flex-row items-center justify-between">
      <View className="flex flex-row items-center space-x-5">
        <Image source={Ellipse2} className="object-cover" />
            <View>
                <Text className="font-bold text-base" >Help & Support</Text>
                {/* <Text className="text-md text-[#adadad]" >Make changes to your account</Text> */}
            </View>
        </View>
        <View>
            <Entypo name="chevron-right" size={24} color="#adadad" />
        </View>

      </View>

      <View className="mt-10 flex flex-row items-center justify-between">
      <View className="flex flex-row items-center space-x-5">
        <Image source={Ellipse2} className="object-cover" />
            <View>
                <Text className="font-bold text-base" >About App</Text>
                {/* <Text className="text-md text-[#adadad]" >Manage your saved account</Text> */}
            </View>
        </View>
        <View>
            <Entypo name="chevron-right" size={24} color="#adadad" />
        </View>

      </View>

    </View>
      </ScrollView>
        
    </SafeAreaView>
  );
};

export default ProfileScreen;

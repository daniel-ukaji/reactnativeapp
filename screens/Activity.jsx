import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Card2 from '../images/card2.png';
import Visa from '../images/visas.png';
import { AntDesign } from '@expo/vector-icons';
import UserHomeCircle from '../images/userhomecircle.png'


const Activity = ({navigation}) => {

  return (
    <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View className="flex flex-row justify-between items-center m-5">
                <TouchableOpacity onPress={() => navigation.goBack()} className="">
                    <Ionicons name='arrow-back' size={30} color="black" />
                </TouchableOpacity>
                <View>
                    <Text className="font-bold">Activity</Text>
                </View>
                <TouchableOpacity>
                    <AntDesign name="search1" size={30} color="black" />
                </TouchableOpacity>
            </View>

            <View className="m-5 flex flex-row justify-between">
                <View className="bg-[#9e9e9e] p-1 w-32 rounded-2xl flex flex-row space-x-2 items-center">
                    <Text className="text-white"> OUTBOUND</Text>
                    <AntDesign name="caretdown" size={20} color="white" />
                </View>
                <View className="flex flex-row space-x-2">
                    <Text className="font-bold text-base">Today</Text>
                    <AntDesign name="calendar" size={24} color="black" />
                </View>
            </View>

        {/* Long Cards */}
            <View className="mt-4 flex flex-row justify-between items-center bg-[#d9d9d9] p-5 rounded-2xl m-5">
              <View className="flex flex-row items-center space-x-3 mt-3 mb-1">
                <View>
                  <Image source={UserHomeCircle} className="object-cover w-14 h-14" />
                </View>

                <View>
                  <Text className="font-bold text-base">Mike Rine</Text>
                  <Text className="font-bold mt-1 text-[#6C6C6C]">1 minute ago</Text>
                  <View className="bg-white w-14 rounded-2xl mt-2">
                    <Text className="text-xs">  QR PAY</Text>
                  </View>
                </View>
                        
              </View>
              <View>
                <Text className="font-bold text-lg">+$250</Text>
              </View>
            </View>

            <View className="flex flex-row justify-between items-center bg-[#d9d9d9] p-5 rounded-2xl ml-5 mr-5">
              <View className="flex flex-row items-center space-x-3 mt-3 mb-1">
                <View>
                  <Image source={UserHomeCircle} className="object-cover w-14 h-14" />
                </View>

                <View>
                  <Text className="font-bold text-base">Google Drive</Text>
                  <Text className="font-bold mt-1 text-[#6C6C6C]">2 hours ago</Text>
                  <View className="bg-white w-14 rounded-2xl mt-2">
                    <Text className="text-xs">  SWARM</Text>
                  </View>
                </View>  
              </View>
              
              <View className="flex flex-col items-center">
                <View className="bg-white w-20 rounded-2xl mt-2 P-2">
                    <Text className="text-xs">    PENDING</Text>
                </View>
                <Text className="font-bold text-lg">-$138.5</Text>
              </View>
            </View>

            <View className="mt-5 flex flex-row justify-between items-center bg-[#d9d9d9] p-5 rounded-2xl ml-5 mr-5">
              <View className="flex flex-row items-center space-x-3 mt-3 mb-1">
                <View>
                  <Image source={UserHomeCircle} className="object-cover w-14 h-14" />
                </View>

                <View>
                  <Text className="font-bold text-base">Casey Smith</Text>
                  <Text className="font-bold mt-1 text-[#6C6C6C]">9 hours ago</Text>
                  <View className="bg-white w-14 rounded-2xl mt-2">
                    <Text className="text-xs">  P2P</Text>
                  </View>
                </View>  
              </View>
              
              <View className="flex flex-col items-center">
                {/* <View className="bg-white w-20 rounded-2xl mt-2 P-2">
                    <Text className="text-xs">    PENDING</Text>
                </View> */}
                <Text className="font-bold text-lg">+$531</Text>
              </View>
            </View>

            <View className="mt-5 flex flex-row justify-between items-center bg-[#d9d9d9] p-5 rounded-2xl ml-5 mr-5">
              <View className="flex flex-row items-center space-x-3 mt-3 mb-1">
                <View>
                  <Image source={UserHomeCircle} className="object-cover w-14 h-14" />
                </View>

                <View>
                  <Text className="font-bold text-base">Apple Store</Text>
                  <Text className="font-bold mt-1 text-[#6C6C6C]">Yesterday at 11:45 AM</Text>
                  <View className="bg-white w-14 rounded-2xl mt-2">
                    <Text className="text-xs">  QR PAY</Text>
                  </View>
                </View>  
              </View>
              
              <View className="flex flex-col items-center">
                <Text className="font-bold text-lg">-$250</Text>
              </View>
            </View>

            <View className="mt-5 flex flex-row justify-between items-center bg-[#d9d9d9] p-5 rounded-2xl ml-5 mr-5">
              <View className="flex flex-row items-center space-x-3 mt-3 mb-1">
                <View>
                  <Image source={UserHomeCircle} className="object-cover w-14 h-14" />
                </View>

                <View>
                  <Text className="font-bold text-base">Pizza Delivery</Text>
                  <Text className="font-bold mt-1 text-[#6C6C6C]">Yesterday at 2:30 PM</Text>
                  <View className="bg-white w-14 rounded-2xl mt-2">
                    <Text className="text-xs">  SWARM</Text>
                  </View>
                </View>  
              </View>
              
              <View className="flex flex-col items-center">
                
                <Text className="font-bold text-lg">-$58.9</Text>
              </View>
            </View>

            <View className="mt-5 flex flex-row justify-between items-center bg-[#d9d9d9] p-5 rounded-2xl ml-5 mr-5">
              <View className="flex flex-row items-center space-x-3 mt-3 mb-1">
                <View>
                  <Image source={UserHomeCircle} className="object-cover w-14 h-14" />
                </View>

                <View>
                  <Text className="font-bold text-base">Amazon.com</Text>
                  <Text className="font-bold mt-1 text-[#6C6C6C]">Yesterday at 6:28 PM</Text>
                  <View className="bg-white w-14 rounded-2xl mt-2">
                    <Text className="text-xs">  SWARM</Text>
                  </View>
                </View>  
              </View>
              
              <View className="flex flex-col items-center">
              <View className="bg-white w-20 rounded-2xl mt-2 P-2">
                    <Text className="text-xs">    PENDING</Text>
                </View>
                <Text className="font-bold text-lg">-$300</Text>
              </View>
            </View>

            </ScrollView>

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

export default Activity;

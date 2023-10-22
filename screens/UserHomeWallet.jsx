import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity, Modal  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Image } from 'react-native';
import UserHomeCircle from '../images/userhomecircle.png'
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

// import tw from 'tailwind-react-native-classnames';

const UserHomeWallet = ({ navigation }) => {

  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  

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
            <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
              <Octicons name="arrow-switch" size={30} className="font-extralight" color="black" />
            </TouchableOpacity>
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
              onPress={openModal}
            >
              <Text className="text-center font-bold text-black" >Cash Out</Text>
            </TouchableOpacity>
            <Modal
        animationType="slide" // You can change the animation type as needed
        transparent={true}
        visible={isModalVisible}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 40, borderRadius: 10 }}>
            <View className="flex justify-end items-end mb-5">
              <AntDesign name="close" size={24} color="black" onPress={closeModal} />
            </View>
            <Text className="w-60 text-center">Use these details below to fund your wallet from your bank app or internet banking</Text>
            <View className="mt-5">
              <Text className="text-base text-gray-500">Bank:</Text>
              <Text className="text-base font-bold">Kuda Microfinance Bank</Text>
            </View>

            <View className="flex flex-row justify-between items-center mt-7">
              <View className="">
                <Text className="text-base text-gray-500">Account Number:</Text>
                <Text className="text-base font-bold">2001745367</Text>
              </View>
              <AntDesign name="copy1" size={24} color="black" />
            </View>

            <View className="mt-7 mb-5">
              <Text className="text-base text-gray-500">Account Name:</Text>
              <Text className="text-base font-bold">Justin Henshaw</Text>
            </View>
            {/* Add your modal content here */}
            {/* <Button title="Close" onPress={closeModal} /> */}
          </View>
        </View>
      </Modal>
          </View>
        </View>

        {/* Long Cards */}
        <View className="mt-7 bg-[#d9d9d9] p-5 w-full rounded-2xl">
            <Text className="font-semibold text-lg">Send Again</Text>
              <View className="flex flex-row space-x-7 mt-3 mb-1">
                <View className="flex flex-col items-center">
                  <Image source={UserHomeCircle} className="object-cover w-10 h-10" />
                  <Text>user{'\n'}name</Text>
                </View>
                <View className="flex flex-col items-center">
                  <Image source={UserHomeCircle} className="object-cover w-10 h-10" />
                  <Text>user{'\n'}name</Text>
                </View>                
                <View className="flex flex-col items-center">
                  <Image source={UserHomeCircle} className="object-cover w-10 h-10" />
                  <Text>user{'\n'}name</Text>
                </View>                
                <View className="flex flex-col items-center">
                  <Image source={UserHomeCircle} className="object-cover w-10 h-10" />
                  <Text>user{'\n'}name</Text>
                </View>                
                <View className="flex flex-col items-center">
                  <Image source={UserHomeCircle} className="object-cover w-10 h-10" />
                  <Text>Search</Text>
                </View>             
              </View>
            </View>

            {/* Today */}
            <View className="flex flex-row justify-between items-center mt-5">
              <Text className="font-bold text-base">Today</Text>
              <Text>View all</Text>
            </View>

            {/* Long Cards */}
            <View className="mt-7 flex flex-row justify-between items-center bg-[#d9d9d9] p-5 w-full rounded-2xl">
              <View className="flex flex-row items-center space-x-3 mt-3 mb-1">
                <View>
                  <Image source={UserHomeCircle} className="object-cover w-14 h-14" />
                </View>

                <View>
                  <Text className="font-bold">Daniel Mensah</Text>
                  <Text className="font-bold mt-1">2 hours ago</Text>
                </View>
                        
              </View>
              <View>
                <Text className="font-bold text-lg">+$250</Text>
              </View>
            </View>

            <View className="mt-7 flex flex-row justify-between items-center bg-[#d9d9d9] p-5 w-full rounded-2xl">
              <View className="flex flex-row items-center space-x-3 mt-3 mb-1">
                <View>
                  <Image source={UserHomeCircle} className="object-cover w-14 h-14" />
                </View>

                <View>
                  <Text className="font-bold">Daniel Mensah</Text>
                  <Text className="font-bold mt-1">2 hours ago</Text>
                </View>
                        
              </View>
              <View>
                <Text className="font-bold text-lg">+$250</Text>
              </View>
            </View>

      </ScrollView>
        
    </SafeAreaView>
  );
};

export default UserHomeWallet;

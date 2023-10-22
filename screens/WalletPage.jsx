import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Vector from '../images/Vector.png';
import User from '../images/User.png';
import Visa from '../images/visa.png';


const WalletPage = ({ navigation }) => {
  return (
    <SafeAreaView  >
        <SafeAreaView style={styles.container} className="h-[230]">
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={30} color="black" />
            </TouchableOpacity>
            <Image source={Vector} style={styles.image} />
        </View>

        <View style={styles.content}>
            <Text className="mt-10">Your Wallet</Text>
            {/* Add more content here */}
            <Image source={User} style={styles.image} className="mt-7" />
        </View>
        </SafeAreaView>

        <View className="mt-14 p-6">
          <Text className="text-[#8A93A3]">Personal info</Text>

        <View className="flex flex-col space-y-5">
          <View className="flex flex-row space-x-10 mt-5">
            <Text className="font-bold text-base">Name</Text>
            <Text className="font-bold text-base">Itunuoluwa Abidoye</Text>
          </View>

          <View className="flex flex-row space-x-10">
            <Text className="font-bold text-base">E-mail</Text>
            <Text className="font-bold text-base">Itunuoluwa@gmail.com</Text>
          </View>

          <View className="flex flex-row space-x-10">
            <Text className="font-bold text-base">Phone</Text>
            <Text className="font-bold text-base">+4 1782 049 294</Text>
          </View>
        </View>
        </View>

        <View className="flex flex-row justify-between p-6 items-center">
          <Text className="font-bold">My banking cards</Text>
          <TouchableOpacity 
            style={styles.circle} 
            onPress={() => navigation.navigate('Cards')}
          >
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          onPress={() => navigation.navigate('AddCash')}
          className="flex flex-row items-center bg-[#d9d9d9] m-6 p-10 rounded-lg space-x-5"
        >
          <Image source={Visa} className="" />
          <View className="flex flex-col">
            <Text className="text-base font-bold">Visa</Text>
            <Text className="text-[#8A93A3]">4*** **** ****2 4746</Text>
          </View>
        </TouchableOpacity>

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

export default WalletPage;

import { Ionicons } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
// import tw from 'tailwind-react-native-classnames';

const Cards = ({navigation}) => {

  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.goBack()} className="m-5">
            <Ionicons name='arrow-back' size={30} color="black" />
        </TouchableOpacity>

        <View className="m-5">
            <Text className="font-bold text-xl">Wallet Activity</Text>
        </View>

        <View className="m-5 flex flex-row justify-between items-center">
            <Text className="font-bold text-2xl">Cards</Text>
            <TouchableOpacity 
            style={styles.circle} 
            onPress={() => navigation.navigate('Cards')}
          >
            <Text style={styles.text}>+</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
            className="m-5 bg-[#9e9e9e] p-20 rounded-lg"
            onPress={() => navigation.navigate('LinkCard')}
        >
            <Text className="text-center text-xl font-bold">Add credit cards</Text>
        </TouchableOpacity>

        <TouchableOpacity className="m-5 bg-[#9e9e9e] p-14 rounded-lg">
            <Text className="text-center text-xl font-bold">Preferences</Text>
            <Text className="text-center text-xl font-bold">Online purchases</Text>
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

export default Cards;

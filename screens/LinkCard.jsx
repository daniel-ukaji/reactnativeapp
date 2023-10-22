import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Rectangle1 from '../assets/Rectangle1.png'
import { Ionicons } from '@expo/vector-icons';

// import tw from 'tailwind-react-native-classnames';

const LinkCard = ({navigation}) => {
  const [isCardNumberVisible, setIsCardNumberVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState(''); // State to store the card number input value

  const toggleCardNumberVisibility = () => {
    setIsCardNumberVisible(!isCardNumberVisible);
  };

  return (
    <SafeAreaView className={`flex-1 m-5 mt-20`}>
      <TouchableOpacity onPress={() => navigation.goBack()} className="">
            <Ionicons name='arrow-back' size={30} color="black" />
        </TouchableOpacity>
      <Text className={`text-3xl mb-4 font-semibold mt-8`}>Link a debit or{'\n'}credit card</Text>
      <Text className="mb-10" >Send money or shop with ease.</Text>
      <View className="mb-10 max-w-2xl mx-auto">
        <Image source={Rectangle1} className=" object-cover w-44 h-32 rounded-md" />
      </View>
      <View className="mb-10 flex justify-center items-center">
        <Text>Let us start with your card number.</Text>
        {isCardNumberVisible ? (
          <TextInput
            value={cardNumber}
            onChangeText={(text) => setCardNumber(text)}
            placeholder="Enter card number"
            keyboardType="numeric"
            className="mt-10 text-lg font-bold"
          />
        ) : (
          <Text className="font-bold text-3xl mt-10" onPress={toggleCardNumberVisibility}>
            Card number
          </Text>
        )}
      </View>
      <View className={`flex-row`}>
        
      </View>
      <View className="mt-14">
          <TouchableOpacity 
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
            onPress={() => navigation.navigate('FinishCard')}

          >
            <Text className="text-center font-bold text-black" >Continue</Text>
          </TouchableOpacity>
        </View>    
    </SafeAreaView>
  );
};

export default LinkCard;

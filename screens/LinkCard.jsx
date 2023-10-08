import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import Rectangle1 from '../assets/Rectangle1.png'

// import tw from 'tailwind-react-native-classnames';

const LinkCard = () => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = useRef([]);
  const [name, setName] = useState('');

  const handleEmailChange = (text) => {
    setName(text);
  };

  const handleOTPChange = (text, index) => {
    // Limit the input to 1 character
    if (/^[0-9]{0,1}$/.test(text)) {
      const newOTP = [...otp];
      newOTP[index] = text;
      setOTP(newOTP);
  
      // Focus the previous input or blur the current one when backspacing
      if (index > 0 && text === '') {
        inputRefs.current[index - 1].focus();
      } else if (index < otp.length - 1 && text !== '') {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  
  

  const handleSubmit = () => {
    const enteredOTP = otp.join(''); // Combine all OTP digits
    // Add your OTP verification logic here using enteredOTP
  };

  return (
    <SafeAreaView className={`flex-1 m-5 mt-36`}>
      <Text className={`text-3xl mb-4 font-semibold`}>Link a debit or{'\n'}credit card</Text>
      <Text className="mb-10" >Send money or shop with ease.</Text>
      <View className="mb-10 max-w-2xl mx-auto">
        <Image source={Rectangle1} className=" object-cover w-44 h-32 rounded-md" />
      </View>
      <View className="mb-10 flex justify-center items-center">
        <Text>Let us start with your card number.</Text>
        <Text className="font-bold text-3xl mt-10" >Card number</Text>
      </View>
      <View className={`flex-row`}>
        {/* <TextInput
                value={name}
                onChangeText={handleEmailChange}
                placeholder="Pin"
                type="password"
                autoCapitalize="none"
                placeholderTextColor="black" // Set the color of the placeholder text
                className="p-5 border rounded-md w-full"
                secureTextEntry={true} // Set this prop to true to hide the entered text
                keyboardType="numeric"

            /> */}
      </View>
      <View className="mt-14">
          <TouchableOpacity 
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
          >
            <Text className="text-center font-bold text-black" >Continue</Text>
          </TouchableOpacity>
        </View>    
    </SafeAreaView>
  );
};

export default LinkCard;

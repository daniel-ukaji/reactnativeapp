import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, TouchableOpacity } from 'react-native';
// import tw from 'tailwind-react-native-classnames';

const OtpScreen = ({navigation}) => {
  const [otp, setOTP] = useState(['', '', '', '']);
  const inputRefs = useRef([]);

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
      <Text className={`text-3xl mb-4 font-semibold`}>Enter code sent  {'\n'}to your phone</Text>
      <Text className="mb-10" >We sent it to the number +995 559 39 ** **</Text>
      <View className={`flex-row`}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(input) => (inputRefs.current[index] = input)}
            className={`border border-gray-300 rounded-md p-2 w-20 h-20 text-center m-1 text-lg`}
            placeholder="•"
            keyboardType="numeric"
            onChangeText={(text) => handleOTPChange(text, index)}
            value={digit}
            maxLength={1} // Limit to 1 character
          />
        ))}
      </View>
      <View className="mt-14">
          <TouchableOpacity 
            className="flex p-5 rounded-xl bg-[#9E9E9E]"
            onPress={() => navigation.navigate('WelcomeScreen')}

          >
            <Text className="text-center font-bold text-black" >Submit</Text>
          </TouchableOpacity>
        </View>    
    </SafeAreaView>
  );
};

export default OtpScreen;

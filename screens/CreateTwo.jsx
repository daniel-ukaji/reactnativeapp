import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Linking, StyleSheet, SafeAreaView } from 'react-native';
// import { View, Text, SafeAreaView, TextInput, StyleSheet } from 'react-native'
// import React, { useState } from 'react'
import { Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import axios from 'axios';
import YourComponent from '../components/PlaidLink';

const CreateTwo = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verificationUrl, setVerificationUrl] = useState(null);

  // const navigation = useNavigation();



  const handleEmailChange = (text) => {
    setName(text);
  };

  const handleNameChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const initiatePlaidVerification = async () => {
    try {
      const apiUrl = 'https://sandbox.plaid.com/identity_verification/create';
      const payload = {
        client_id: "6492fffee661cc0013665062",
  secret: "964b90c790a3dbbc38fc00a2c6e40d",
  template_id: "idvtmp_afkxhC8d7aKNem",
  gave_consent: true,
  is_shareable: true,
  user: {
    client_user_id: "your-db-id3b24115",
    email_address: email,
    phone_number: "+19876543212",
    date_of_birth: "1975-01-18",
    name: {
      given_name: name,
      family_name: "Ukaji"
    },
    address: {
      street: "123 Main St.",
      street2: "Unit 42",
      city: "Pawnee",
      region: "IN",
      postal_code: "46001",
      country: "US"
    },
    id_number: {
      value: "123456789",
      type: "us_ssn"
    }
  }
        // Add the rest of your payload here
      };

      const response = await axios.post(apiUrl, payload);

      if (response.status === 200) {
        const responseData = response.data;
        console.log('Plaid API Response:', responseData);

        if (responseData.status === 'active' && responseData.shareable_url) {
          navigation.navigate('WebViewComponent', {
            verificationUrl: responseData.shareable_url,
          });          console.log('verificationUrl:', verificationUrl);
        } else {
          console.log('Verification status not active or no shareable URL.');
        }
      } else {
        console.error('Failed to make API request to Plaid:', response.status);
        // You can log the response data as well if needed: console.error(response.data);
      }
    } catch (error) {
      console.error('Error making API request:', error);
      // You can handle specific error cases here
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error details:', error.message);
    }
    }
  };

  return (
    <SafeAreaView className="m-5">
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name='arrow-back' size={30} color="black" />
    </TouchableOpacity>
    

    <View className="flex flex-col mt-36 justify-between">
      <View className=" justify-start">
        <TextInput
          value={name}
          onChangeText={handleEmailChange}
          placeholder="Name"
          placeholderTextColor="black" // Set the color of the placeholder text
          autoCapitalize="none"
          className="p-5 border rounded-md"
        />

        <TextInput
          value={email}
          onChangeText={handleNameChange}
          placeholder="Email"
          placeholderTextColor="black" // Set the color of the placeholder text
          autoCapitalize="none"
          className="p-5 border rounded-md mt-5"
        />
        <TextInput
          value={password}
          onChangeText={handlePasswordChange}
          placeholder="Password"
          placeholderTextColor="black" // Set the color of the placeholder text
          autoCapitalize="none"
          className="p-5 border rounded-md mt-5"
          secureTextEntry={true} // Set this prop to true to hide the entered text
        />
        
        
      </View>
      

      <View style={styles.container} className="mt-10">
        {/* <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} /> */}
      </View>
    </View>

    <View className="mt-14">
        <TouchableOpacity 
          onPress={() => navigation.navigate('WebViewComponent')}
          className="flex p-5 rounded-xl bg-[#9E9E9E]"
        >
          <Text className="text-center font-bold text-black" >Sign Up</Text>
        </TouchableOpacity>
      </View>

      <View className="mt-5">
      {/* <PlaidLink
        tokenConfig={{
          token: '964b90c790a3dbbc38fc00a2c6e40d',
        }}
        onSuccess={handleSuccess}
        onExit={handleExit}
      >
        <Text>Add Account</Text>
    </PlaidLink> */}
    {/* <YourComponent /> */}
      </View>

      <View className="mt-5" >
        <TouchableOpacity className="flex p-5 rounded-xl bg-[#9E9E9E]" onPress={initiatePlaidVerification} style={styles.button}>
          <Text className="text-center font-bold text-black">Start Plaid Verification</Text>
        </TouchableOpacity>
      </View>

    <View className="mt-5">
        <TouchableOpacity 
          onPress={() => navigation.navigate('CreateTwo')}
          className="flex p-5 rounded-xl bg-[#9E9E9E]"
        >
          <Text className="text-center font-bold text-white" >Sign up With Facebook</Text>
        </TouchableOpacity>
      </View>
      <View className="mt-5">
        <TouchableOpacity 
          onPress={() => navigation.navigate('CreateTwo')}
          className="flex p-5 rounded-xl bg-[#9E9E9E]"
        >
          <Text className="text-center font-bold text-white" >Sign up With Google</Text>
        </TouchableOpacity>
      </View>

      {/* WebView to display the Plaid verification link */}
      {/* <SafeAreaView style={{ flex: 1 }}>

      {verificationUrl && (
        <WebView
      style={{ flex: 1 }}
      source={{ uri: verificationUrl }}
        />
      )}
      </SafeAreaView> */}

  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: 'black',
  },
  orText: {
    marginHorizontal: 10,
    color: 'black',
  },
  webView: {
    flex: 1,
    width: '100%',
  },
});

export default CreateTwo

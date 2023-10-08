import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Vector from '../images/Vector.png';
import User from '../images/User.png';

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
});

export default WalletPage;

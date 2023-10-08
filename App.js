import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Image, TouchableOpacity } from 'react-native';
import { View } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ManageWallet from './screens/ManageWallet';
import UserHomeWallet from './screens/UserHomeWallet';
import LoginSignup from './screens/LoginSignup';
import WelcomeScreen from './screens/WelcomeScreen';
import CreateFour from './screens/CreateFour';
import CreateFive from './screens/CreateFive';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import WalletPage from './screens/WalletPage';
import CreateOne from './screens/CreateOne';
import CreateTwo from './screens/CreateTwo';
import WebViewComponent from './screens/TestWebView';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 50,
        height: 50,
        borderRadius: 35,
        marginTop:10,
        backgroundColor: '#9e9e9e',
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Requests') {
            iconName = focused ? 'laptop' : 'laptop-outline';
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarIcon={{
        activeTintColor: 'black',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={ProfileScreen}
      />

<Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./images/dollars.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff',
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              {/* <Ionicons name="cash" size={32} color="#fff" /> */}
              <FontAwesome name="dollar" size={24} color="#fff" />
            </CustomTabBarButton>
          ),
        }}
        name=" "
        component={CreateFour}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="Requests"
        component={CreateFive}
      />

      <Tab.Screen
        options={{ headerShown: false }}
        name="Wallet"
        component={UserHomeWallet}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginSignup">
        <Stack.Screen
          name="LoginSignup"
          component={LoginSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateOne"
          component={CreateOne}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateTwo"
          component={CreateTwo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WebViewComponent"
          component={WebViewComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WalletPage"
          component={WalletPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainTabNavigator"
          component={MainTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

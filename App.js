import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import CreateOne from './screens/CreateOne';
import CreateTwo from './screens/CreateTwo';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    // <NavigationContainer>
    //   <SafeAreaView className="flex-1 items-center justify-center bg-white">
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </SafeAreaView>
    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={({
          headerShown: false,
        })} name="Login" component={HomeScreen} />
        <Stack.Screen options={({
          headerShown: false,
        })} name="CreateOne" component={CreateOne} />
        <Stack.Screen options={({
          headerShown: false,
        })} name="CreateTwo" component={CreateTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//Screens
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import DetailsScreen from '../screens/DetailsScreen';

//Screen names
const homeName = 'Home';
const detailsName = 'Details';
const settingsName = 'Settings';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
        <Tab.Navigator
            initialRouteName={homeName}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let rn = route.name;

                    if(rn === homeName) {
                        iconName = focused ? 'home' : 'home-outline'
                    } else if (rn = detailsName) {
                        iconName = focused ? 'list' : 'list-outline'
                    } else if (rn === settingsName) {
                        iconName = focused ? 'settings' : 'settings-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />
                }
            })}
            
        >

            <Tab.Screen name={homeName} component={HomeScreen} />
            <Tab.Screen name={detailsName} component={DetailsScreen} />
            <Tab.Screen name={settingsName} component={SettingsScreen} />

        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainContainer
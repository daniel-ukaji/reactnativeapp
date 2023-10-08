import {
    View,
    Text,
    SafeAreaView,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    FlatList,
    Animated,
    useWindowDimensions,
  } from "react-native";
  import React, { useLayoutEffect, useState, useEffect, useRef } from "react";
  import { useNavigation } from "@react-navigation/native";
  import OnboardingItem from "../components/OnboardingItem";
  import Paginator from "../components/Paginator";
  
  const slides = [
    {
      id: "1",
      title: "Welcome",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      image: "",
    },
    {
        id: "2",
        title: "Welcome",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        image: "",
      },
      {
        id: "3",
        title: "AML Compliance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        image: "",
      },
      {
        id: "4",
        title: "AML Compliance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
        image: "",
      },
  ];
  
  const WelcomeScreen = ({ navigation}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
  
    const viewableItemsChanged = useRef(({ viewableItems }) => {
      setCurrentIndex(viewableItems[0].index);
    }).current;
  
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
  
    const scrollTo = () => {
      if (currentIndex < slides.length - 1) {
        slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
      }
    };
  
    return (
      <SafeAreaView className=" bg-white flex-1">
        <View className="flex-[3]">
          <FlatList
            data={slides}
            renderItem={({ item }) => <OnboardingItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            bounces={false}
            keyExtractor={(item) => item.id}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={32}
            onViewableItemsChanged={viewableItemsChanged}
            viewabilityConfig={viewConfig}
            ref={slidesRef}
          />
        </View>
        <View className="px-5 py-10">
            <TouchableOpacity
              className="py-6 px-5 w-full rounded-full items-center bg-[#9E9E9E]"
              onPress={() => navigation.navigate('MainTabNavigator')}
              >
              <Text className="font-poppins text-md font-bold text-black">
              Create Account
              </Text>
            </TouchableOpacity>
          </View>
        {/* {currentIndex === 3 ? (
          <View className="px-5 py-10 flex-row justify-between">
            <TouchableOpacity
              className="py-4 px-5 w-[48%] rounded-xl items-center border border-gray-700"
              onPress={() => navigate("Login")}
            >
              <Text className="font-poppins font-semibold text-white">Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-4 px-5 w-[48%] rounded-xl items-center bg-gray-700"
              onPress={() => navigate("RegisterOne")}
            >
              <Text className="font-poppins font-semibold text-white">
                Register
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View className="px-5 py-10">
            <TouchableOpacity
              className="py-6 px-5 w-full rounded-full items-center bg-[#9E9E9E]"
              onPress={scrollTo}
            >
              <Text className="font-poppins text-md font-bold text-black">
              Create Account
              </Text>
            </TouchableOpacity>
          </View>
        )} */}
        <View className="items-center my-7">
          <Paginator data={slides} scrollX={scrollX} />
        </View>
      </SafeAreaView>
    );
  };
  
  export default WelcomeScreen;
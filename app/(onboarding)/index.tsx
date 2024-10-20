import React, { useState, useRef, useEffect } from "react";
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Animated
} from "react-native";
import ViewPager from "@react-native-community/viewpager";
import { NavigationProp } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { router } from "expo-router";
import { GET_STARTED_URL } from "@/config/url.config";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");

interface OnboardingData {
  title: string;
  description: string;
  imageUrl: any;
}

const onboardingData: OnboardingData[] = [
  {
    title: "Connect Instantly",
    description:
      "Scan QR codes to connect with fellow tech enthusiasts at events and meetups.",
    imageUrl: require("../../assets/images/3d/multi-task.png")
  },
  {
    title: "Expand Your Network",
    description:
      "Discover like-minded professionals and grow your tech community effortlessly.",
    imageUrl: require("../../assets/images/3d/earth.png")
  },
  {
    title: "Stay Updated",
    description:
      "Get real-time updates on tech events, talks, and workshops in your area.",
    imageUrl: require("../../assets/images/3d/rocket.png")
  }
];

interface OnboardingScreenProps {
  navigation: NavigationProp<any>;
}

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const pagerRef = useRef<ViewPager>(null);
  const onboardingStatus = "OnboardingComplete";

  // Animations
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateYAnim = useRef(new Animated.Value(20)).current;

  const handlePageChange = (position: React.SetStateAction<number>) => {
    setCurrentPage(position);
    startAnimations();
  };

  const handleNext = () => {
    if (currentPage < onboardingData.length - 1) {
      pagerRef.current?.setPage(currentPage + 1);
    }
  };

  const handleGetStarted = () => {
    router.push(GET_STARTED_URL);
    completeOnboarding();
  };

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem("onboardingStatus", onboardingStatus);
    } catch (e: any) {
      console.log(e.message);
    }
  };

  const startAnimations = () => {
    fadeAnim.setValue(0);
    translateYAnim.setValue(20);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }),
      Animated.timing(translateYAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true
      })
    ]).start();
  };

  useEffect(() => {
    startAnimations();
  }, [currentPage]);

  const renderDotPagination = () => {
    return (
      <View className="flex-row">
        {onboardingData.map((_, index) => (
          <View
            key={index}
            className={`rounded-full mx-1 ${
              currentPage === index
                ? "w-4 h-1.5 bg-primary-light dark:bg-primary-dark"
                : "w-1.5 h-1.5 bg-primary-light dark:bg-primary-dark"
            }`}
          />
        ))}
      </View>
    );
  };

  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark">
      <ViewPager
        style={{ flex: 1 }}
        initialPage={0}
        ref={pagerRef}
        onPageSelected={(e) => handlePageChange(e.nativeEvent.position)}>
        {onboardingData.map((page, index) => (
          <View key={index} className="flex-1 justify-center items-center p-5">
            <Animated.View
              style={{
                opacity: fadeAnim,
                transform: [{ translateY: translateYAnim }]
              }}>
              <Image
                source={page.imageUrl}
                className="w-full aspect-square mb-8"
                style={{
                  width: width * 0.8,
                  height: width * 0.8,
                  resizeMode: "contain"
                }}
              />
            </Animated.View>
            <Animated.View
              style={{
                opacity: fadeAnim,
                transform: [{ translateY: translateYAnim }]
              }}>
              <Text className="text-2xl font-bold text-text-light dark:text-text-dark mb-3 text-center font-satoshi-black">
                {page.title}
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                opacity: fadeAnim,
                transform: [{ translateY: translateYAnim }]
              }}>
              <Text className="text-base text-text-light dark:text-text-dark opacity-80 text-center px-5 font-satoshi-regular">
                {page.description}
              </Text>
            </Animated.View>
          </View>
        ))}
      </ViewPager>

      <View className="flex-row justify-between items-center px-5 pb-10">
        {renderDotPagination()}
        {currentPage < onboardingData.length - 1 ? (
          <TouchableOpacity
            onPress={handleNext}
            className="bg-primary-light dark:bg-primary-dark w-10 h-10 justify-center items-center rounded-full">
            <Icon name="chevron-right" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={handleGetStarted}
            className="bg-primary-light dark:bg-primary-dark px-4 py-3 rounded-lg">
            <View className="flex-row items-center justify-center">
              <Text className="text-white font-bold mr-1 font-satoshi-bold">
                Continue
              </Text>
              <Icon name="chevron-right" size={24} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default OnboardingScreen;

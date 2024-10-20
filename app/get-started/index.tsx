import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
// import { LinearGradient } from "expo-linear-gradient";
import { LOGIN_URL, SIGNUP_URL } from "@/config/url.config";
import { router } from "expo-router";

interface GetStartedScreenProps {
  navigation: NavigationProp<any>;
}

const GetStartedScreen: React.FC<GetStartedScreenProps> = () => {
  const handleLogin = () => {
    router.push(LOGIN_URL);
  };

  const handleSignUp = () => {
    router.push(SIGNUP_URL);
  };

  return (
    <ImageBackground
      source={require("../../assets/images/get-started.jpg")}
      className="flex-1">
      <View className="flex-1 justify-end">
        <View className="bg-white dark:bg-background-dark rounded-t-3xl p-6">
          <Image
            source={require("../../assets/images/logo.png")}
            className="w-[150px] h-auto object-contain mb-8"
            resizeMode="contain"
          />
          <View className="mb-10">
            <Text
              className="text-[28px] font-bold text-gray-800 dark:text-gray-200 mb-2"
              style={{ fontFamily: "Satoshi-Black" }}>
              Join the Future of Tech
            </Text>
            <Text
              className="text-[16px] text-gray-500 dark:text-gray-400 mb-6"
              style={{ fontFamily: "Satoshi-Medium" }}>
              Connect with tech enthusiasts and expand your network
            </Text>
          </View>

          <View className="space-y-4">
            <TouchableOpacity
              onPress={handleLogin}
              className="bg-primary-light dark:bg-primary-dark py-3 px-6 rounded-full">
              <Text
                className="text-center text-white text-lg font-semibold"
                style={{ fontFamily: "Satoshi-Bold" }}>
                Log In
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={handleSignUp}
              className="border-2 border-primary-light dark:border-primary-dark py-3 px-6 rounded-full">
              <Text
                className="text-center text-primary-light dark:text-primary-dark text-lg font-semibold"
                style={{ fontFamily: "Satoshi-Bold" }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default GetStartedScreen;

import { LOCATION_PERMISSIONS_URL, LOGIN_URL } from "@/config/url.config";
import { Link, router } from "expo-router";
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

const SignUp = () => {
  const handleSignUp = () => {
    router.push(LOCATION_PERMISSIONS_URL);
  };
  return (
    <View className="flex-1 px-5 pt-10 itemscenter justify-center bg-background-light dark:bg-background-dark">
      <Text className="text-3xl font-bold text-text-light dark:text-text-dark mb-2 font-satoshi-black">
        Create Account
      </Text>
      <Text className="text-lg text-text-light dark:text-text-dark mb-8 font-satoshi-regular">
        Sign up to get started
      </Text>

      <TextInput
        placeholder="Your nickname, tech name, code name, e.t.c"
        placeholderTextColor="#888888"
        className="w-full h-12 border border-gray-400 rounded-full px-4 mb-5 bg-transparent border-input-border-light dark:border-input-border-dark text-text-light dark:text-text-dark font-satoshi-regular"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#888888"
        className="w-full h-12 border border-gray-400 rounded-full px-4 mb-5 bg-transparent border-input-border-light dark:border-input-border-dark text-text-light dark:text-text-dark font-satoshi-regular"
        keyboardType="email-address"
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#888888"
        className="w-full h-12 border border-gray-400 rounded-full px-4 mb-5 bg-transparent border-input-border-light dark:border-input-border-dark text-text-light dark:text-text-dark font-satoshi-regular"
        secureTextEntry
      />

      <TextInput
        placeholder="Confirm password"
        placeholderTextColor="#888888"
        className="w-full h-12 border border-gray-400 rounded-full px-4 mb-5 bg-transparent border-input-border-light dark:border-input-border-dark text-text-light dark:text-text-dark font-satoshi-regular"
        secureTextEntry
      />

      <TouchableOpacity
        className="w-full h-12 justify-center items-center rounded-full mb-6 bg-primary-light dark:bg-primary-dark"
        onPress={handleSignUp}>
        <Text className="text-white text-lg font-bold font-satoshi-bold">
          Sign up
        </Text>
      </TouchableOpacity>

      <View className="w-full flex flex-row justify-center">
        <Text className="text-sm text-text-light dark:text-text-dark mb-5 font-chillax-regular">
          or continue with
        </Text>
      </View>

      <View className="flex-row justify-between w-full">
        <TouchableOpacity className="flex-row items-center justify-center py-3 px-5 rounded-lg flex-1 mr-2 border border-gray-400">
          <Image
            source={require("../../../assets/images/icons/google.png")}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
        <TouchableOpacity className="flex-row items-center justify-center py-3 px-5 rounded-lg flex-1 mr-2 border border-gray-400">
          <Image
            source={require("../../../assets/images/icons/facebook.png")}
            className="w-6 h-6"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
      <View className="flex-row justify-center mt-8">
        <Text className="text-text-light dark:text-text-dark text-sm font-satoshi-medium mr-1">
          Already have an account?
        </Text>
        <Link href={LOGIN_URL}>
          <Text className="text-primary-light dark:text-primary-dark text-sm font-semibold ml-1 font-satoshi-bold">
            Login
          </Text>
        </Link>
      </View>
    </View>
  );
};

export default SignUp;

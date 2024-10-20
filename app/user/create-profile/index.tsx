import { SETUP_CREATE_PROFILE_URL } from "@/config/url.config";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CreateProfile = () => {
  const handleContinue = () => {
    router.push(SETUP_CREATE_PROFILE_URL);
  };
  return (
    <View className="flex-1 justify-between bg-white dark:bg-black p-6">
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../../assets/images/3d/person.png")}
          className="w-[100px] h-[100px] mb-4"
        />
        <Text className="text-[28px] font-semibold mb-4 text-black dark:text-white font-satoshi-black text-center">
          Let’s Personalize Your Experience
        </Text>
        <Text className="text-[16px] text-gray-600 dark:text-gray-400 font-satoshi-medium text-center">
          Complete your profile to help us tailor the app to your preferences.
          This will make your experience more relevant and enjoyable.
        </Text>
      </View>

      <View className="w-full">
        <TouchableOpacity
          className="w-full py-4 bg-primary-light dark:bg-primary-dark rounded-full"
          onPress={handleContinue}>
          <Text className="text-white text-center font-semibold font-satoshi-bold text-[16px]">
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateProfile;

import { SETUP_CREATE_PROFILE_URL } from "@/config/url.config";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CreateProfileError = () => {
  const handleContinue = () => {
    // router.push(SETUP_CREATE_PROFILE_URL);
  };
  return (
    <View className="flex-1 justify-between bg-white dark:bg-black p-6">
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../../../../assets/images/3d/error.png")}
          className="w-[100px] h-[100px] mb-4"
        />
        <Text className="text-[28px] font-semibold mb-4 text-black dark:text-white font-satoshi-black text-center">
          Oops, Something Went Wrong
        </Text>
        <Text className="text-[16px] text-gray-600 dark:text-gray-400 font-satoshi-medium text-center">
          It seems we hit a snag while setting up your profile. Don't worry,
          just give it another shot, and we'll get you back on track in no time.
        </Text>
      </View>

      <View className="w-full">
        <TouchableOpacity
          className="w-full py-4 bg-primary-light dark:bg-primary-dark rounded-full"
          onPress={handleContinue}>
          <Text className="text-white text-center font-semibold font-satoshi-bold text-[16px]">
            Try again
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateProfileError;

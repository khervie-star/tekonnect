import { SETUP_CREATE_PROFILE_URL } from "@/config/url.config";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

const CreateProfileSuccess = () => {
  const handleContinue = () => {
    router.push("/app/(home)");
  };
  return (
    <View className="flex-1 justify-between bg-white dark:bg-black p-6">
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../../../../assets/images/3d/profile-complete.png")}
          className="w-[100px] h-[100px] mb-4"
        />
        <Text className="text-[28px] font-semibold mb-4 text-black dark:text-white font-satoshi-black text-center">
          You're All Set!
        </Text>
        <Text className="text-[16px] text-gray-600 dark:text-gray-400 font-satoshi-medium text-center">
          Your profile is complete, and we're ready to deliver a tailored
          experience just for you. Dive in and start exploring all that we’ve
          crafted to make your journey exceptional.
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

export default CreateProfileSuccess;

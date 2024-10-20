import React from "react";
import { View, Text, Image } from "react-native";

export const Review = () => {
  return (
    <View className="flex-1 justify-between bg-white dark:bg-black p-6">
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../../../../assets/images/3d/info.png")}
          className="w-[100px] h-[100px] mb-4"
        />
        <Text className="text-[28px] font-semibold mb-4 text-black dark:text-white font-satoshi-black text-center">
          Confirm Your Details
        </Text>
        <Text className="text-[16px] text-gray-600 dark:text-gray-400 font-satoshi-medium text-center">
          Please review the information you've entered. If anything looks off,
          you can always go back and make changes.
        </Text>
      </View>
    </View>
  );
};

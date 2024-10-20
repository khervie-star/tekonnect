import { NOTIFICATION_PERMISSIONS_URL } from "@/config/url.config";
import { router } from "expo-router";
import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import * as Location from "expo-location";

const LocationPermission = () => {
  const requestLocationPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
    }
    router.push(NOTIFICATION_PERMISSIONS_URL);
  };

  const handleSkip = () => {
    router.push(NOTIFICATION_PERMISSIONS_URL);
  };

  return (
    <View className="flex-1 justify-between bg-white dark:bg-black p-6">
      <View className="flex-1 justify-center items-center">
        <Image
          source={require("../../../assets/images/3d/location.png")}
          className="w-[100px] h-[100px] mb-4"
        />
        <Text className="text-[28px] font-semibold mb-4 text-black dark:text-white font-satoshi-black text-center">
          Discover Nearby Events
        </Text>
        <Text className="text-[16px] text-gray-600 dark:text-gray-400 font-satoshi-medium text-center">
          Enable your location to help us show you events happening nearby.
        </Text>
      </View>

      <View className="w-full">
        <TouchableOpacity
          className="w-full py-4 bg-primary-light dark:bg-primary-dark rounded-full"
          onPress={requestLocationPermission}>
          <Text className="text-white text-center font-semibold font-satoshi-bold text-[16px]">
            Allow Location Access
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="py-4" onPress={handleSkip}>
          <Text className="text-primary-light dark:text-primary-dark text-center font-semibold font-satoshi-bold text-[16px]">
            Skip for now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LocationPermission;

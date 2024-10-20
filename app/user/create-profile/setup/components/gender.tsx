import React, { useState } from "react";
import { View, Text, TouchableOpacity, Switch } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { genderOptions } from "@/config/data";
import { GenderOption } from "@/config/types";
import { Ionicons } from "@expo/vector-icons";

export const Gender = () => {
  const [showOnProfile, setShowOnProfile] = useState(false);
  const [selectedGender, setSelectedGender] = useState("");
  const renderGenderOption = (option: GenderOption) => (
    <TouchableOpacity
      key={option.value}
      onPress={() => setSelectedGender(option.value)}
      className="mb-4">
      <LinearGradient
        colors={option.gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className={`rounded-xl py-4 px-6 ${
          selectedGender === option.value ? "border-2 border-white" : ""
        }`}>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center">
            <Ionicons name={option.icon as any} size={24} color="white" />
            <Text className="text-white text-lg font-satoshi-bold ml-3">
              {option.label}
            </Text>
          </View>
          {selectedGender === option.value && (
            <Ionicons name="checkmark-circle" size={24} color="white" />
          )}
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1">
      <Text className="text-3xl font-satoshi-black mb-8">
        Nice! Welcome Kwesi Hervie.
      </Text>
      <Text className="text-xl font-satoshi-bold mb-8">
        Which gender describes you?
      </Text>

      <View className="w-full mb-6">
        {genderOptions.map(renderGenderOption)}
      </View>

      <View className="flex-row items-center bg-white p-4 rounded-xl border border-gray-300">
        <Switch
          value={showOnProfile}
          onValueChange={setShowOnProfile}
          className="mr-3"
        />
        <Text className="text-gray-700 font-satoshi-medium">
          Show on profile
        </Text>
      </View>
    </View>
  );
};

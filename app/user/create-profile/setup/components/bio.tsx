import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export const Bio = () => {
  const [bio, setBio] = useState("");
  const maxCharCount = 150;

  const handleBioChange = (text: string) => {
    if (text.length <= maxCharCount) {
      setBio(text);
    }
  };
  return (
    <View className="flex-1">
      <Text className="text-3xl font-satoshi-black mb-4">
        Tell us more about yourself
      </Text>
      <Text className="text-lg font-satoshi-medium text-gray-600 mb-6">
        Your bio helps others get to know you better.
      </Text>

      <View className="bg-white rounded-xl shadow-sm p-4 mb-4">
        <TextInput
          multiline
          numberOfLines={6}
          value={bio}
          onChangeText={handleBioChange}
          placeholder="Write a short bio..."
          className="text-base font-satoshi-medium"
          textAlignVertical="top"
        />
      </View>

      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-sm font-satoshi-medium text-gray-500">
          {bio.length}/{maxCharCount} characters
        </Text>
        {bio.length > 0 && (
          <TouchableOpacity onPress={() => handleBioChange("")}>
            <Text className="text-secondary-light dark:text-secondary-dark font-satoshi-bold">
              Clear
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View className="flex-row items-center bg-blue-50 p-4 rounded-xl">
        <Ionicons name="information-circle-outline" size={24} color="#3b82f6" />
        <Text className="ml-3 text-blue-700 font-satoshi-medium">
          Your bio will be visible on your public profile.
        </Text>
      </View>
    </View>
  );
};

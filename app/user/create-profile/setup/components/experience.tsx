import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

export const Experience = () => {
  const [experienceLevel, setExperienceLevel] = useState<string>("");
  const [yearsOfExperience, setYearsOfExperience] = useState<string>("");
  return (
    <View className="flex-1">
      <View className={"mb-4"}>
        <Text className="text-3xl font-satoshi-black mb4">
          What is your experience level
        </Text>
        <Picker
          selectedValue={experienceLevel}
          onValueChange={(itemValue: React.SetStateAction<string>) =>
            setExperienceLevel(itemValue)
          }
          className={"bg-gray-100 rounded-lg font-satoshi-bold"}>
          <Picker.Item
            fontFamily="Satoshi-Bold"
            label="Select Experience Level"
            value=""
          />
          <Picker.Item
            fontFamily="Satoshi-Bold"
            label="Junior"
            value="junior"
          />
          <Picker.Item
            fontFamily="Satoshi-Bold"
            label="Mid-Level"
            value="mid"
          />
          <Picker.Item
            fontFamily="Satoshi-Bold"
            label="Senior"
            value="senior"
          />
          <Picker.Item fontFamily="Satoshi-Bold" label="Lead" value="lead" />
        </Picker>
      </View>

      <View className={"mb-4"}>
        <Text className="text-3xl font-satoshi-black mb-4">
          How many years of experience do you have?
        </Text>

        <TextInput
          placeholder="Enter years of experience"
          className="border border-gray-300 p-4 rounded-lg mb-10"
          value={yearsOfExperience}
          onChangeText={(text) => setYearsOfExperience(text)}
          keyboardType="numeric"
        />
      </View>
    </View>
  );
};

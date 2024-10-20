import React, { useState } from "react";
import {
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const Name = () => {
  const [dob, setDob] = useState(new Date());
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("");

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || dob;
    setShow(Platform.OS === "ios");
    setDob(currentDate);
  };
  return (
    <View className="flex-1">
      <Text className="text-[28px] font-semibold mb-4 font-satoshi-black">
        Tell us your name
      </Text>
      <TextInput
        placeholder="Full Name"
        className="border border-gray-300 p-4 rounded-lg mb-10"
      />
      <Text className="text-[28px] font-semibold mb-4 font-satoshi-black">
        When were you born
      </Text>

      <TouchableOpacity
        onPress={() => setShow(true)}
        className="w-full h-12 border border-gray-400 rounded-lg px-4 mb-5 bg-transparent flex justify-center">
        <Text className="text-gray-600">{dob.toDateString()}</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dob}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};


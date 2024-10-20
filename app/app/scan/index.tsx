import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";
import { SvgXml } from "react-native-svg";

const Scan = () => {
  const avatar = createAvatar(adventurer, {
    seed: "Kwesi"
  }).toString();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="px-5">
        <View className="items-center mt-8">
          <View className="w-28 h-28 rounded-2xl bg-green-200 overflow-hidden">
            <SvgXml xml={avatar} width="100%" height="100%" />
          </View>

          <Text className="text-xl font-satoshi-black mt-2">Kwesi Hervie</Text>
          <Text className="text-sm text-gray-500 font-satoshi-regular">
            herviek2001@gmail.com
          </Text>
        </View>
        <View className="items-start mt-5">
          <Text className="text-base font-satoshi-black mb-2">Bio</Text>
          <View className="p-3 border border-gray-200 rounded-lg">
            <Text className="text-gray-500 font-satoshi-regular">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
              architecto cum corrupti cumque quos exercitationem veritatis natus
              possimus doloremque quae dolorum eius harum deleniti eum minus
              quaerat doloribus, odio non
            </Text>
          </View>
        </View>
        <View className="items-start mt-5">
          <Text className="text-base font-satoshi-black mb-2">Roles</Text>
          <View className="flex flex-row flex-wrap gap-3">
            <View className="bg-sky-100 rounded-full py-1.5 px-3">
              <Text className="font-satoshi-bold text-sky-600">
                Frontend developer
              </Text>
            </View>
            <View className="bg-sky-100 rounded-full py-1.5 px-3">
              <Text className="font-satoshi-bold text-sky-600">
                Devops Engineer
              </Text>
            </View>
          </View>
        </View>

        <View className="items-start mt-5">
          <Text className="text-base font-satoshi-black mb-2">
            Social network
          </Text>
          <View className="flex flex-row flex-wrap gap-3">
            <View className="bg-sky-100 rounded-full py-1.5 px-3">
              <Text className="font-satoshi-bold text-sky-600">
                Frontend developer
              </Text>
            </View>
            <View className="bg-sky-100 rounded-full py-1.5 px-3">
              <Text className="font-satoshi-bold text-sky-600">
                Devops Engineer
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Scan;

// gender;
// experience level
// social

import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { createAvatar } from "@dicebear/core";
import { adventurer } from "@dicebear/collection";
import { SvgXml } from "react-native-svg";
import {
  ChevronRightIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  LockClosedIcon,
  Cog6ToothIcon,
  BellIcon,
  PaintBrushIcon,
  AdjustmentsVerticalIcon,
  QuestionMarkCircleIcon,
  InformationCircleIcon,
  ArrowRightOnRectangleIcon
} from "react-native-heroicons/outline";
import { useSession } from "@/context/ctx";

const SettingsItem = ({ Icon, title, last = false }) => (
  <TouchableOpacity
    className={`flex-row items-center justify-between p-4 ${
      !last ? "border-b border-gray-200" : ""
    }`}>
    <View className="flex-row items-center">
      <Icon size={20} color="black" />
      <Text className="ml-3 font-satoshi-regular">{title}</Text>
    </View>
    <ChevronRightIcon size={24} color="black" />
  </TouchableOpacity>
);

const SettingsSection = ({ title, items }) => (
  <View className="mt-8 px-5">
    <Text className="text-sm font-semibold text-gray-500 font-satoshi-bold mb-2">
      {title}
    </Text>
    <View className="bg-gray-100 rounded-lg">
      {items.map((item, index) => (
        <SettingsItem
          key={item.title}
          Icon={item.icon}
          title={item.title}
          last={index === items.length - 1}
        />
      ))}
    </View>
  </View>
);

const Settings = () => {
  const { signOut, session } = useSession();
  const user = session?.user;

  const avatar = createAvatar(adventurer, {
    seed: user?.id,

    hair:
      user?.profile?.gender == "male"
        ? [
            "short01",
            "short02",
            "short03",
            "short04",
            "short05",
            "short06",
            "short07",
            "short08",
            "short09",
            "short10",
            "short11",
            "short12",
            "short13",
            "short14",
            "short15",
            "short16"
          ]
        : [
            "long01",
            "long02",
            "long03",
            "long04",
            "long05",
            "long06",
            "long07",
            "long08",
            "long09",
            "long10",
            "long11",
            "long12",
            "long13",
            "long14",
            "long15",
            "long16"
          ],
    mouth: [
      "variant01",
      "variant02",
      "variant09",
      "variant10",
      "variant23",
      "variant22"
    ]
  }).toString();

  const sections = [
    {
      title: "Account & Privacy",
      items: [
        { icon: UserCircleIcon, title: "Profile" },
        { icon: ShieldCheckIcon, title: "Security" },
        { icon: LockClosedIcon, title: "Privacy Settings" },
        { icon: Cog6ToothIcon, title: "Account Management" }
      ]
    },
    {
      title: "Notifications & Preferences",
      items: [
        { icon: BellIcon, title: "Notifications" },
        { icon: PaintBrushIcon, title: "Appearance" },
        { icon: AdjustmentsVerticalIcon, title: "Preferences" }
      ]
    },
    {
      title: "Support & About",
      items: [
        { icon: QuestionMarkCircleIcon, title: "Support" },
        { icon: InformationCircleIcon, title: "About" }
      ]
    }
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        <View className="items-center mt-8">
          <View className="w-24 h-24 rounded-full bg-green-200 overflow-hidden">
            <SvgXml xml={avatar} width="100%" height="100%" />
          </View>

          <Text className="text-xl font-satoshi-black mt-2">
            {user?.profile?.firstName + " " + user?.profile?.lastName}
          </Text>
          <Text className="text-sm text-gray-500 font-satoshi-regular">
            {user?.email}
          </Text>
          <TouchableOpacity className="mt-4 px-4 py-2 bg-black rounded-full">
            <Text className="text-white font-satoshi-bold">Edit profile</Text>
          </TouchableOpacity>
        </View>

        {sections.map((section) => (
          <SettingsSection
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}

        <View className="mt-8 px-5 mb-8">
          <View className="bg-gray-100 rounded-lg">
            <TouchableOpacity
              className="flex-row items-center p-4"
              onPress={signOut}>
              <ArrowRightOnRectangleIcon size={24} color="red" />
              <Text className="ml-3 text-red-500 font-satoshi-bold">
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Settings;

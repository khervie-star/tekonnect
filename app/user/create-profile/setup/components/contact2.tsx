import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Animated,
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from "react-native";
import { BlurView } from "expo-blur";
import { linkTypes as initialLinkTypes, categories } from "@/config/data";
import { Ionicons } from "@expo/vector-icons";
import { LinkType } from "@/config/types";

const { width: SCREEN_WIDTH } = Dimensions.get("window");
const CARD_MARGIN = 8;
const CARD_WIDTH = (SCREEN_WIDTH - 48 - CARD_MARGIN * 6) / 3; // 48 for container padding

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

const TabComponent = ({
  categories,
  onSelectCategory,
  selectedCategory
}: any) => {
  const renderItem = useCallback(
    ({ item }: { item: any }) => {
      const isSelected = selectedCategory === item;
      return (
        <AnimatedTouchable
          onPress={() => onSelectCategory(item === "All" ? null : item)}
          className={`px-3 py-2 mx-1 rounded-full ${
            isSelected ? "bg-gray-700" : "bg-gray-200"
          }`}>
          <Text
            className={`font-bold ${
              isSelected
                ? "text-white font-satoshi-bold"
                : "text-gray-800 font-satoshi-medium"
            }`}>
            {item}
          </Text>
        </AnimatedTouchable>
      );
    },
    [selectedCategory, onSelectCategory]
  );

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="py-4">
      {["All", ...categories.map((c: { name: any }) => c.name)].map((item) =>
        renderItem({ item })
      )}
    </ScrollView>
  );
};
const LinkCard = ({ item, onPress, isSelected }: any) => {
  const scaleAnim = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true
    }).start();
  };

  return (
    <AnimatedTouchable
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[
        {
          transform: [{ scale: scaleAnim }]
        }
      ]}
      className="m-1 my-3">
      <View
        className={`p-3 rounded-xl items-center justify-center bg-gray-100 ${
          isSelected ? "border-2 border-blue-500" : "border border-gray-200"
        }`}
        style={{ width: CARD_WIDTH, height: CARD_WIDTH }}>
        <Image
          source={item.icon}
          style={{ width: CARD_WIDTH * 0.4, height: CARD_WIDTH * 0.4 }}
          resizeMode="contain"
          className="mb-2"
        />
        <Text className="text-gray-800 font-bold text-center text-xs font-satoshi-medium">
          {item.name}
        </Text>
      </View>
    </AnimatedTouchable>
  );
};

// const LinkCard = ({ item, onPress }: any) => {
//   const scaleAnim = new Animated.Value(1);

//   const handlePressIn = () => {
//     Animated.spring(scaleAnim, {
//       toValue: 0.95,
//       useNativeDriver: true
//     }).start();
//   };

//   const handlePressOut = () => {
//     Animated.spring(scaleAnim, {
//       toValue: 1,
//       friction: 3,
//       tension: 40,
//       useNativeDriver: true
//     }).start();
//   };

//   return (
//     <AnimatedTouchable
//       onPress={onPress}
//       onPressIn={handlePressIn}
//       onPressOut={handlePressOut}
//       style={[
//         {
//           transform: [{ scale: scaleAnim }]
//         }
//       ]}
//       className="m-1 my-3">
//       <View
//         className="p-3 rounded-xl items-center justify-center bg-gray-100 border border-gray-200"
//         style={{ width: CARD_WIDTH, height: CARD_WIDTH }}>
//         <Image
//           source={item.icon}
//           style={{ width: CARD_WIDTH * 0.4, height: CARD_WIDTH * 0.4 }}
//           resizeMode="contain"
//           className="mb-2"
//         />
//         <Text className="text-gray-800 font-bold text-center text-xs font-satoshi-medium">
//           {item.name}
//         </Text>
//       </View>
//     </AnimatedTouchable>
//   );
// };

export const Contact2 = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLink, setSelectedLink] = useState<any | null>(null);
  const [linkValue, setLinkValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [linkTypes, setLinkTypes] = useState(initialLinkTypes);
  const [selectedLinks, setSelectedLinks] = useState<LinkType[]>([]);

  const filteredLinks = linkTypes.filter(
    (link) =>
      (selectedCategory
        ? categories
            .find((c) => c.name === selectedCategory)
            ?.ids.includes(link.id)
        : true) && link.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSaveLink = () => {
    if (selectedLink && linkValue.trim()) {
      toggleLink({ ...selectedLink, value: linkValue });
      setModalVisible(false);
      setLinkValue("");
    }
  };

  const toggleLink = (link: LinkType) => {
    if (selectedLinks.some((r) => r.id === link.id)) {
      setSelectedLinks(selectedLinks.filter((r) => r.id !== link.id));
    } else if (selectedLinks.length < 2) {
      setSelectedLinks([...selectedLinks, link]);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1">
      <ScrollView>
        <Text className="text-3xl font-satoshi-black mb-4">
          Add Contact and Social Links
        </Text>

        {selectedLinks.length > 0 && (
          <View className="mb-6">
            <Text className="text-lg font-satoshi-bold mb-2 text-gray-600">
              You added:
            </Text>
            <View className="flex-row flex-wrap">
              {selectedLinks.map((link) => (
                <View
                  key={link.id}
                  className="bg-sky-100 rounded-full px-3 py-2 m-1 flex-row items-center">
                  <Image source={link.icon} className="w-5 h-5 mr-2" />
                  <Text className="text-blue-700 font-satoshi-medium">
                    {link.name}
                  </Text>
                  <TouchableOpacity
                    onPress={() => toggleLink(link)}
                    className="ml-2">
                    <Ionicons name="close-circle" size={20} color="#1d4ed8" />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        )}

        <View className="flex-row items-center bg-gray-100 rounded-full p-2 mb-4 mt2">
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search links..."
            className="flex-1 ml-2 font-satoshi-medium"
          />
        </View>

        <TabComponent
          categories={categories}
          onSelectCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
        />

        <View className="flex flex-row flex-wrap justify-between mt-4">
          {filteredLinks.map((item) => (
            <LinkCard
              key={item.id}
              item={item}
              // onPress={() => {
              //   setSelectedLink(item);
              //   setModalVisible(true);
              // }}
              isSelected={selectedLinks.some((link) => link.id === item.id)}
              onPress={() => {
                const isAlreadySelected = selectedLinks.some(
                  (link) => link.id === item.id
                );
                if (isAlreadySelected) {
                  // If already selected, remove it
                  setSelectedLinks(
                    selectedLinks.filter((link) => link.id !== item.id)
                  );
                } else {
                  // If not selected, open modal to add handle
                  setSelectedLink(item);
                  setModalVisible(true);
                }
              }}
            />
          ))}
        </View>
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <BlurView intensity={20} style={{ flex: 1 }} tint="dark">
          <View className="flex-1 justify-end">
            <View className="bg-white rounded-t-3xl p-6">
              <Text className="text-2xl font-bold mb-6 text-gray-800 font-satoshi-black">
                Add handle
              </Text>
              {selectedLink && (
                <>
                  <View className="flex-row items-center mb-6">
                    <Image
                      source={selectedLink.icon}
                      className="w-12 h-12 mr-4"
                    />

                    <Text className="text-lg font-medium text-gray-800 font-satoshi-medium">
                      {selectedLink.name}
                    </Text>
                  </View>
                  <TextInput
                    placeholder={selectedLink.placeholder}
                    value={linkValue}
                    onChangeText={setLinkValue}
                    className="border border-gray-300 rounded-lg p-4 text-base font-satoshi-bold"
                  />
                </>
              )}
              <View className="flex-row justify-between mt-6">
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  className="bg-gray-200 rounded-full py-3 px-6 flex-1 mr-2">
                  <Text className="text-center font-semibold text-gray-800 font-satoshi-bold">
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={handleSaveLink}
                  className="bg-primary-light dark:bg-primary-dark rounded-full py-3 px-6 flex-1 ml-2">
                  <Text className="text-center font-semibold text-white font-satoshi-bold">
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BlurView>
      </Modal>
    </KeyboardAvoidingView>
  );
};

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
  Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Autocomplete, AutocompleteItem } from "@ui-kitten/components";
import { categories, linkTypes } from "@/config/data";
import { UserLink, LinkType } from "@/config/types";

export const Contact: React.FC = () => {
  const [links, setLinks] = useState<UserLink[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedLinkType, setSelectedLinkType] = useState<LinkType | null>(
    null
  );
  const [linkValue, setLinkValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredLinkTypes = linkTypes.filter(
    (link) =>
      (!selectedCategory ||
        categories
          .find((cat) => cat.name === selectedCategory)
          ?.ids.includes(link.id)) &&
      link.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // const filteredLinkTypes = linkTypes.filter((link) =>
  //   link.name.toLowerCase().includes(searchQuery.toLowerCase())
  // );

  const addLink = () => {
    if (selectedLinkType && linkValue) {
      setLinks([...links, { type: selectedLinkType, value: linkValue }]);
      setModalVisible(false);
      setSelectedLinkType(null);
      setLinkValue("");
    }
  };

  const removeLink = (index: number) => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  const renderLinkItem = ({
    item,
    index
  }: {
    item: UserLink;
    index: number;
  }) => (
    <View className="flex-row items-center bg-gray-100 rounded-lg p-3 mb-2">
      <Image source={{ uri: item.type.icon }} className="w-6 h-6 mr-3" />
      <Text className="flex-1 font-satoshi-medium">{item.value}</Text>
      <TouchableOpacity onPress={() => removeLink(index)}>
        <Ionicons name="close-circle" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );

  const renderOption = (item: LinkType) => (
    <AutocompleteItem
      key={item.id}
      title={item.name}
      accessoryLeft={() => (
        <Image source={{ uri: item.icon }} className="w-6 h-6" />
      )}
    />
  );

  return (
    <View className="flex-1 p-6 bg-white">
      <Text className="text-2xl font-satoshi-bold mb-4">Your Links</Text>

      {/* <FlatList
        data={links}
        renderItem={renderLinkItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text className="text-gray-500 italic">No links added yet</Text>
        }
      /> */}

      <FlatList
        data={["All", ...categories.map((c) => c.name)]}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedCategory(item === "All" ? null : item)}>
            <Text
              className={`p-2 ${
                selectedCategory === item ? "bg-blue-500 text-white" : ""
              }`}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="bg-blue-500 rounded-full p-4 mt-4 items-center">
        <Text className="text-white font-satoshi-bold">Add New Link</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View className="flex-1 justify-end bg-black bg-opacity-50">
          <View className="bg-white rounded-t-3xl p-6">
            <Text className="text-2xl font-satoshi-bold mb-4">
              Add New Link
            </Text>

            <Autocomplete
              placeholder="Search link type..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              onSelect={(index: any) => {
                setSelectedLinkType(filteredLinkTypes[index]);
                setSearchQuery("");
              }}>
              {filteredLinkTypes.map(renderOption)}
            </Autocomplete>

            {selectedLinkType && (
              <View className="mt-4">
                <Image
                  source={{ uri: selectedLinkType.icon }}
                  className="w-10 h-10 mb-2"
                />
                <TextInput
                  placeholder={selectedLinkType.placeholder}
                  value={linkValue}
                  onChangeText={setLinkValue}
                  className="border border-gray-300 rounded-lg p-2"
                />
              </View>
            )}

            <View className="flex-row justify-end mt-4">
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="bg-gray-200 rounded-lg p-2 mr-2">
                <Text className="font-satoshi-medium">Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={addLink}
                className="bg-blue-500 rounded-lg p-2">
                <Text className="text-white font-satoshi-medium">Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

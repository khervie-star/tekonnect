import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
  Modal
} from "react-native";

const connections = [
  {
    id: "1",
    name: "Alex",
    age: 28,
    image: "https://example.com/alex.jpg",
    bio: "Full-stack developer passionate about AI"
  },
  {
    id: "2",
    name: "Sam",
    age: 24,
    image: "https://example.com/sam.jpg",
    bio: "UX designer with 3 years of experience"
  },
  {
    id: "3",
    name: "Jordan",
    age: 30,
    image: "https://example.com/jordan.jpg",
    bio: "Data scientist specializing in machine learning"
  }
  // Add more connections as needed
];

const ConnectionItem = ({ name, age, image, onPress }) => (
  <TouchableOpacity onPress={onPress} className="items-center mx-2">
    <Image source={{ uri: image }} className="w-16 h-16 rounded-full" />
    <Text className="text-sm mt-1">{name}</Text>
    <Text className="text-xs text-gray-500">{age}</Text>
  </TouchableOpacity>
);

const UserDetailModal = ({ user, visible, onClose }) => (
  <Modal visible={visible} animationType="slide" transparent={true}>
    <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
      <View className="bg-white p-5 rounded-lg w-4/5">
        <Image
          source={{ uri: user?.image }}
          className="w-24 h-24 rounded-full self-center mb-4"
        />
        <Text className="text-xl font-bold mb-2">
          {user?.name}, {user?.age}
        </Text>
        <Text className="mb-4">{user?.bio}</Text>
        <TouchableOpacity
          onPress={onClose}
          className="bg-blue-500 py-2 px-4 rounded">
          <Text className="text-white text-center">Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);

const Connections = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredConnections = connections.filter(
    (connection) =>
      connection.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      connection.bio.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View className="flex-1 bg-white">
      <View className="pt-12 px-4">
        <Text className="text-2xl font-bold mb-4">Connections</Text>
        <TextInput
          placeholder="Search connections"
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="bg-gray-100 rounded-full py-2 px-4 mb-4"
        />
        <FlatList
          data={filteredConnections}
          renderItem={({ item }) => (
            <ConnectionItem {...item} onPress={() => setSelectedUser(item)} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={3}
          columnWrapperStyle={{
            justifyContent: "space-between",
            marginBottom: 20
          }}
        />
      </View>
      <UserDetailModal
        user={selectedUser}
        visible={!!selectedUser}
        onClose={() => setSelectedUser(null)}
      />
    </View>
  );
};

export default Connections;

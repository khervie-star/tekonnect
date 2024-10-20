import { allRoles, popularRoles } from "@/config/data";
import { Role } from "@/config/types";
import { Ionicons } from "@expo/vector-icons";
import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export const UserRole = () => {
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Role[]>([]);

  useEffect(() => {
    if (searchQuery.length > 0) {
      const filtered = allRoles.filter((role) =>
        role.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const toggleRole = (role: Role) => {
    if (selectedRoles.some((r) => r.id === role.id)) {
      setSelectedRoles(selectedRoles.filter((r) => r.id !== role.id));
    } else if (selectedRoles.length < 2) {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  // useEffect(() => {
  //   onRolesSelected(selectedRoles);
  // }, [selectedRoles, onRolesSelected]);

  const renderRoleButton = (role: Role) => (
    <TouchableOpacity
      key={role.id}
      onPress={() => toggleRole(role)}
      className={`flex-row items-center p-3 m-1 rounded-full ${
        selectedRoles.some((r) => r.id === role.id)
          ? "bg-primary-light dark:bg-primary-dark"
          : "bg-gray-200"
      }`}>
      <Ionicons
        name={role.icon as any}
        size={20}
        color={selectedRoles.some((r) => r.id === role.id) ? "white" : "black"}
      />
      <Text
        className={`ml-2 font-satoshi-bold text-[12px] ${
          selectedRoles.some((r) => r.id === role.id)
            ? "text-white"
            : "text-black"
        }`}>
        {role.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1">
      <Text className="text-3xl font-satoshi-black mb-4">
        Select Your Tech Roles
      </Text>
      <Text className="text-lg font-satoshi-medium text-gray-600 mb-6">
        Choose up to 2 roles that best describe you.
      </Text>
      {selectedRoles.length > 0 && (
        <View className="mb-6">
          <Text className="text-lg font-satoshi-bold mb-2">You selected:</Text>
          <View className="flex-row flex-wrap">
            {selectedRoles.map((role) => (
              // <View
              //   key={role.id}
              //   className="bg-[#FFF0E6] rounded-full px-3 py-2 m-1 flex-row items-center">
              //   <Ionicons
              //     name={role.icon as any}
              //     size={20}
              //     color="#FF8343"
              //   />
              //   <Text className="text-primary-light font-satoshi-medium ml-2">
              //     {role.name}
              //   </Text>
              //   <TouchableOpacity
              //     onPress={() => toggleRole(role)}
              //     className="ml-2">
              //     <Ionicons
              //       name="close-circle"
              //       size={20}
              //       color="#FF8343"
              //     />
              //   </TouchableOpacity>
              // </View>
              <View
                key={role.id}
                className="bg-blue-100 rounded-full px-3 py-2 m-1 flex-row items-center">
                <Ionicons name={role.icon as any} size={20} color="#3b82f6" />
                <Text className="text-blue-700 font-satoshi-medium ml-2">
                  {role.name}
                </Text>
                <TouchableOpacity
                  onPress={() => toggleRole(role)}
                  className="ml-2">
                  <Ionicons name="close-circle" size={20} color="#3b82f6" />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      )}

      <View className="mb-6">
        <View className="flex-row items-center bg-gray-100 rounded-full p-2 mb-4">
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search for roles..."
            className="flex-1 ml-2 font-satoshi-medium"
          />
        </View>
        <View className="flex-row flex-wrap">
          {searchResults.length > 0 && searchResults.map(renderRoleButton)}
        </View>
      </View>

      <View className="mb-6">
        <Text className="text-xl font-satoshi-bold mb-3">Popular Roles</Text>
        <View className="flex-row flex-wrap">
          {popularRoles.map(renderRoleButton)}
        </View>
      </View>
    </View>
  );
};

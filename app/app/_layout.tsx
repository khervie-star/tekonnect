import { Redirect, Stack } from "expo-router";

import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSession } from "@/context/ctx";

export default function TabLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/auth/login" />;
  }

  const TabBarIcon = ({ name, color, focused, label }: any) => (
    <View className="items-center">
      <Ionicons name={name} size={24} color={color} />
      {(focused || label === "Scan") && (
        <Text className="text-[10px] mt-1 font-satoshi-bold" style={{ color }}>
          {label}
        </Text>
      )}
    </View>
  );

  // This layout can be deferred because it's not the root layout.
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FF8343",
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 4,
          paddingTop: 4
        },
        tabBarShowLabel: false
      }}>
      <Tabs.Screen
        name="(home)/index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "grid" : "grid-outline"}
              color={color}
              focused={focused}
              label="Home"
            />
          )
        }}
      />
      <Tabs.Screen
        name="connections/index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "people" : "people-outline"}
              color={color}
              focused={focused}
              label="Connections"
            />
          )
        }}
      />
      <Tabs.Screen
        name="scan/index"
        options={{
          tabBarIcon: ({ focused }) => (
            <View className="bg-primary-light rounded-full p-3 shadow-lg">
              <Ionicons
                name={focused ? "qr-code-sharp" : "qr-code"}
                color="white"
                size={21}
              />
            </View>
          )
        }}
      />
      <Tabs.Screen
        name="events/index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "compass" : "compass-outline"}
              color={color}
              focused={focused}
              label="Events"
            />
          )
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "cog" : "cog-outline"}
              color={color}
              focused={focused}
              label="Settings"
            />
          )
        }}
      />
    </Tabs>
  );
}

import React from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  Pressable
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowTopRightOnSquareIcon,
  CalendarIcon,
  ClockIcon,
  EyeIcon,
  PaperAirplaneIcon,
  QrCodeIcon,
  ShareIcon,
  ChatBubbleLeftEllipsisIcon,
  UserGroupIcon,
  EnvelopeIcon,
  PhoneIcon
} from "react-native-heroicons/solid";
import {
  ChevronRightIcon,
  ArrowRightIcon
} from "react-native-heroicons/outline";
// import QRCode from "react-native-qrcode-svg";
import QRCodeStyled from "react-native-qrcode-styled";
import { router } from "expo-router";

const EventItem = ({ item }) => (
  <View className="flex flex-row items-center mb-3">
    <Image
      source={require("../../../assets/images/user.jpg")}
      className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-sm"
    />
    <View className="flex-1 mr-4">
      <Text className="font-satoshi-bold text-[14px] text-gray-800 mb-1">
        {item.title}
      </Text>
      <Text className="text-gray-500 font-satoshi-regular text-[12px]">
        {item.date}
      </Text>
    </View>
    <TouchableOpacity className="bg-blue-50 rounded-full p-2">
      <ChevronRightIcon size={16} color="#3b82f6" />
    </TouchableOpacity>
  </View>
);

const ConnectionItem = ({ item }) => (
  <View className="flex flex-row items-center mb-3">
    <Image
      source={{ uri: item.avatar }}
      className="w-12 h-12 rounded-full mr-4"
    />
    <View className="flex-1 mr-4">
      <Text className="font-satoshi-bold text-[14px] text-gray-800 mb-1">
        {item.name}
      </Text>
      <Text className="text-gray-500 font-satoshi-regular text-[12px]">
        {item.role}
      </Text>
    </View>
    <TouchableOpacity className="bg-green-50 rounded-full p-2">
      <UserGroupIcon size={16} color="#10b981" />
    </TouchableOpacity>
  </View>
);

const SectionCard = ({ title, data, renderItem, viewAllText, icon }) => (
  <View className="w-full flex flex-col mb-8">
    <View className="rounded-[16px] border border-gray-200 bg-white shadow-[0px_4px_16px_rgba(0,0,0,0.08)] p-6">
      <Text className="text-[18px] font-satoshi-bold mb-6 text-gray-800">
        {title}
      </Text>
      <FlatList
        data={data.slice(0, 3)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View className="h-[1px] bg-gray-100 my-3" />
        )}
      />
      <TouchableOpacity className="mt-6 bg-primary-light dark:bg-primary-dark rounded-full py-3 px-4 flex-row justify-center items-center">
        <Text className="text-white font-satoshi-medium mr-2">
          {viewAllText}
        </Text>
        {icon}
      </TouchableOpacity>
    </View>
  </View>
);

const QRComponent = ({ value, size }) => (
  <QRCodeStyled
    data={"Custom Corners"}
    style={{ backgroundColor: "white", borderRadius: 36, overflow: "hidden" }}
    padding={20}
    pieceSize={8}
    pieceBorderRadius={4}
    gradient={{
      type: "radial",
      options: {
        center: [0.5, 0.5],
        radius: [1, 1],
        colors: ["#ff7bc6", "#0f0080"],
        locations: [0, 1]
      }
    }}
    outerEyesOptions={{
      topLeft: {
        borderRadius: [20, 20, 0, 20]
      },
      topRight: {
        borderRadius: [20, 20, 20]
      },
      bottomLeft: {
        borderRadius: [20, 0, 20, 20]
      }
    }}
    innerEyesOptions={{
      borderRadius: 12,
      scale: 0.85
    }}
  />
);

export default function HomeScreen() {
  const upcomingEvents = [
    { id: 1, title: "Tech Innovators Conf.", date: "2024-09-15" },
    { id: 2, title: "React Native Workshop", date: "2024-09-20" },
    { id: 3, title: "AI & Machine Learning Summit", date: "2024-09-25" },
    { id: 4, title: "Cybersecurity Expo", date: "2024-09-30" }
  ];

  const recentConnections = [
    {
      id: 1,
      name: "Jane Doe",
      role: "UX Designer",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 2,
      name: "John Smith",
      role: "Backend Developer",
      avatar: "https://i.pravatar.cc/150?img=2"
    },
    {
      id: 3,
      name: "Alice Johnson",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 4,
      name: "Bob Brown",
      role: "Data Scientist",
      avatar: "https://i.pravatar.cc/150?img=4"
    }
  ];

  const gradientColors = ["#000000", "#434343"];

  const viewId = () => {
    router.push("/user/qr-card");
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView>
        <View className="px-5 pt-8">
          <View className="flex flex-row justify-between items-center">
            <Text className="font-satoshi-black text-[24px]">Home</Text>
            <View className="flex-row items-center">
              <View className="relative mr-4">
                <ChatBubbleLeftEllipsisIcon size={24} color="black" />
                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-4 h-4 items-center justify-center">
                  <Text className="text-white text-[10px] font-bold">3</Text>
                </View>
              </View>
              <Image
                source={require("../../../assets/images/user.jpg")}
                className="w-9 h-9 rounded-full"
              />
            </View>
          </View>

          <View className="mt-10 mb-8">
            <Text className="font-satoshi-black text-[32px]">Hello,</Text>
            <Text className="font-satoshi-black text-[32px]">
              Kwesi Hervie 👋
            </Text>
          </View>

          <View className="rounded-[12px] w-full h-[200px] overflow-hidden shadow-lg mb-8">
            <View className="flex-row h-full relative">
              <View className="w-1/2">
                <Image
                  source={require("../../../assets/images/user.jpg")}
                  className="h-full w-full"
                  resizeMode="cover"
                />
              </View>
              <LinearGradient
                colors={["#000000", "#4f4f4f"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="w-1/2 justify-center px-4">
                <Text className="font-satoshi-black text-[24px] text-white leading-tight mb-2">
                  Kwesi Hervie
                </Text>
                <Text className="font-satoshi-medium text-[14px] text-white opacity-80">
                  Frontend Developer, DevOps Engineer
                </Text>
              </LinearGradient>
            </View>
          </View>

          <View className="flex flex-row gap-4 mb-8">
            <TouchableOpacity
              className="rounded-[12px] bg-blue-100 flex-1 p-4 items-center"
              onPress={viewId}>
              <QrCodeIcon size={24} color="#2563EB" />
              <Text className="mt-2 font-satoshi-medium text-blue-600">
                View Id
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-[12px] bg-green-100 flex-1 p-4 items-center">
              <EyeIcon size={24} color="#16A34A" />
              <Text className="mt-2 font-satoshi-medium text-green-600">
                Preview
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="rounded-[12px] bg-orange-100 flex-1 p-4 items-center">
              <PaperAirplaneIcon size={24} color="#ea580c" />
              <Text className="mt-2 font-satoshi-medium text-orange-600">
                Share
              </Text>
            </TouchableOpacity>
          </View>

          <SectionCard
            title="Upcoming Events"
            data={upcomingEvents}
            renderItem={({ item }) => <EventItem item={item} />}
            viewAllText="View All Events"
            icon={<ArrowRightIcon size={16} color="white" />}
          />

          <SectionCard
            title="Recent Connections"
            data={recentConnections}
            renderItem={({ item }) => <ConnectionItem item={item} />}
            viewAllText="View All Connections"
            icon={<ArrowTopRightOnSquareIcon size={16} color="white" />}
          />
        </View>
        <View className="px-6 shadow-slate-700 shadow-xl">
          <View className="w-full rounded-xl overflow-hidden shadow-lg">
            <LinearGradient colors={gradientColors} className="w-full p-4">
              <View className="flex-row items-center justify-between mb-8">
                <Image
                  source={require("../../../assets/images/logo.png")}
                  className="w-20 h-10"
                  resizeMode="contain"
                />
                <Pressable className="flex flex-row items-center">
                  <Text className="text-gray-200 font-satoshi-bold text-[12px] mr-2">
                    Send card
                  </Text>
                  <PaperAirplaneIcon size={14} color="#e5e7eb" />
                </Pressable>
              </View>
              <View className="flex-row justify-center mb-2">
                <QRComponent value={"qrValue"} size={160} />
              </View>
              <Text className="text-gray-200 font-satoshi-medium text-center mb-4">
                Scan or click to preview
              </Text>
            </LinearGradient>
            <View className="bg-white p-4">
              <View className="flex-row justify-between items-center pb-3">
                <View className="flex-row items-center">
                  <Image
                    source={require("../../../assets/images/user.jpg")}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <View>
                    <Text className="text-gray-800 text-[16px] font-satoshi-bold">
                      Kwesi Hervie
                    </Text>
                    <Text className="text-gray-500 text-[12px] font-satoshi-regular">
                      UI developer
                    </Text>
                  </View>
                </View>
              </View>
              <View className="pt-3 border-t border-gray-200">
                <View className="flex flex-row items-center justify-start mb-1">
                  <EnvelopeIcon size={14} color={"#1f2937"} />
                  <Text className="text-gray-800 text-[12px] font-satoshi-bold ml-2">
                    example@email.com
                  </Text>
                </View>

                <View className="flex flex-row items-center justify-start">
                  <PhoneIcon size={14} color={"#1f2937"} />
                  <Text className="text-gray-800 text-[12px] font-satoshi-bold ml-2">
                    08180746707
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  svg: {
    backgroundColor: "white",
    borderRadius: 16,
    overflow: "hidden"
  },
  shadow: {
    shadowColor: "#34495E",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 16,
    borderRadius: 20
  }
});

import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Dimensions,
  TextInput
} from "react-native";
import { ArrowLongRightIcon } from "react-native-heroicons/mini";
import { BookmarkIcon } from "react-native-heroicons/solid";
import { SwiperFlatList } from "react-native-swiper-flatlist";

const { width } = Dimensions.get("window");

const EventCard = ({ title, date, time, location, image }) => {
  return (
    <View
      className="w-4/5 bg-white rounded-lg shadow mr-4"
      style={{ width: width * 0.75 }}>
      <Image
        source={{ uri: image }}
        className="w-full h-40 rounded-t-lg"
        resizeMode="cover"
      />
      <View className="p-4">
        <Text className="text-[16px] font-satoshi-bold mb-2">{title}</Text>

        <View className="flex flex-row items-center mb-1">
          <View className="flex-row items-center">
            <Ionicons name="calendar-outline" size={12} color="#4B5563" />
            <Text className="text-gray-500 text-[11px] ml-1 font-satoshi-medium">
              {date}
            </Text>
          </View>
          <View className="w-2 h-2 bg-gray-400 rounded-full mx-2"></View>
          <View className="flex-row items-center">
            <Ionicons name="time-outline" size={12} color="#4B5563" />
            <Text className="text-gray-500 text-[11px] ml-1 font-satoshi-medium">
              {time}
            </Text>
          </View>
        </View>

        <View className="flex-row items-center">
          <Ionicons name="location-outline" size={12} color="#4B5563" />
          <Text className="text-gray-500 text-[12px] ml-1 font-satoshi-medium">
            {location}
          </Text>
        </View>
      </View>
    </View>
  );
};

const EventSection = ({ title, events }) => {
  return (
    <View className={"mb-8"}>
      <View className={"flex-row justify-between items-center mb-4"}>
        <Text className={"text-[20px] font-satoshi-bold"}>{title}</Text>
        <TouchableOpacity className="flex flex-row justify-start items-center">
          <Text className={"text-gray-500 font-satoshi-medium mr-2"}>
            View more
          </Text>
          <ArrowLongRightIcon color={"#6b7280"} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </ScrollView>
    </View>
  );
};

const EventsPage = () => {
  const popularEvents = [
    {
      title: "Summer Music Festival",
      date: "Jul 15-17, 2024",
      time: "12:00 PM - 11:00 PM",
      location: "Central Park, New York City",
      image: "https://picsum.photos/id/58/400/300"
    },
    {
      title: "Virtual Food & Wine Expo",
      date: "Aug 5-7, 2024",
      time: "10:00 AM - 8:00 PM",
      location: "Online Event",
      image: "https://picsum.photos/id/20/400/300"
    },
    {
      title: "International Film Festival",
      date: "Sep 20-30, 2024",
      time: "Various Screenings",
      location: "Multiple Venues, Los Angeles",
      image: "https://picsum.photos/id/22/400/300"
    },
    {
      title: "Comic Con",
      date: "Oct 10-13, 2024",
      time: "9:00 AM - 7:00 PM",
      location: "Convention Center, San Diego",
      image: "https://picsum.photos/id/45/400/300"
    },
    {
      title: "New Year's Eve Gala",
      date: "Dec 31, 2024",
      time: "8:00 PM - 2:00 AM",
      location: "Grand Hotel Ballroom, Las Vegas",
      image: "https://picsum.photos/id/30/400/300"
    }
  ];

  const recommendedEvents = [
    {
      title: "Tech Conference 2024",
      date: "Sep 10-12, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Moscone Center, San Francisco",
      image: "https://picsum.photos/id/48/400/300"
    },
    {
      title: "Virtual Art Gallery Opening",
      date: "Jul 22, 2024",
      time: "7:00 PM - 10:00 PM",
      location: "Online Event",
      image: "https://picsum.photos/id/59/400/300"
    },
    {
      title: "Yoga and Wellness Retreat",
      date: "Aug 15-18, 2024",
      time: "All Day",
      location: "Serenity Resort, Bali",
      image: "https://picsum.photos/id/223/400/300"
    },
    {
      title: "Online Photography Workshop",
      date: "Oct 5, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Online Event",
      image: "https://picsum.photos/id/250/400/300"
    },
    {
      title: "Cooking Masterclass",
      date: "Nov 15, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Culinary Institute, Paris",
      image: "https://picsum.photos/id/431/400/300"
    }
  ];

  const upcomingEvents = [
    {
      title: "Local Theater Play",
      date: "Jun 30, 2024",
      time: "7:30 PM - 10:00 PM",
      location: "Community Playhouse, Boston",
      image: "https://picsum.photos/id/452/400/300"
    },
    {
      title: "Virtual Charity Run",
      date: "Jul 2, 2024",
      time: "8:00 AM - 11:00 AM",
      location: "Participate from Anywhere",
      image: "https://picsum.photos/id/40/400/300"
    },
    {
      title: "Book Fair",
      date: "Jul 10-12, 2024",
      time: "10:00 AM - 7:00 PM",
      location: "Public Library, Chicago",
      image: "https://picsum.photos/id/24/400/300"
    },
    {
      title: "Jazz in the Park",
      date: "Jul 20, 2024",
      time: "5:00 PM - 9:00 PM",
      location: "Golden Gate Park, San Francisco",
      image: "https://picsum.photos/id/96/400/300"
    },
    {
      title: "Virtual Science Exhibition",
      date: "Aug 1-3, 2024",
      time: "9:00 AM - 6:00 PM",
      location: "Online Event",
      image: "https://picsum.photos/id/256/400/300"
    }
  ];

  const nearbyEvents = [
    {
      title: "Farmers Market",
      date: "Every Saturday",
      time: "7:00 AM - 1:00 PM",
      location: "City Square, Your City",
      image: "https://picsum.photos/id/292/400/300"
    },
    {
      title: "Street Food Festival",
      date: "Jul 8-10, 2024",
      time: "11:00 AM - 10:00 PM",
      location: "Downtown Area, Your City",
      image: "https://picsum.photos/id/365/400/300"
    },
    {
      title: "Local Art Walk",
      date: "First Friday of Every Month",
      time: "6:00 PM - 9:00 PM",
      location: "Arts District, Your City",
      image: "https://picsum.photos/id/106/400/300"
    },
    {
      title: "Community Garden Workshop",
      date: "Jul 15, 2024",
      time: "10:00 AM - 12:00 PM",
      location: "Community Center, Your Neighborhood",
      image: "https://picsum.photos/id/253/400/300"
    },
    {
      title: "Outdoor Movie Night",
      date: "Every Friday in August",
      time: "8:30 PM - 11:00 PM",
      location: "Local Park, Your City",
      image: "https://picsum.photos/id/364/400/300"
    }
  ];

  return (
    <SafeAreaView className={"flex-1 bg-gray-100"}>
      <ScrollView className="p-5">
        <View className="flex flex-row justify-between items-center mb-6">
          <Text className="font-satoshi-black text-[24px]">
            Discover Events
          </Text>
          <TouchableOpacity>
            <BookmarkIcon color="#FF8343" />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center bg-gray-200 rounded-full p-2 mb-8">
          <Ionicons name="search" size={24} color="gray" />
          <TextInput
            placeholder="Search events"
            className="flex-1 ml-2 font-satoshi-medium"
          />
        </View>

        <EventSection title="Popular Events" events={popularEvents} />
        <EventSection title="Recommended for You" events={recommendedEvents} />
        <EventSection title="Happening Soon" events={upcomingEvents} />
        <EventSection title="Nearby Events" events={nearbyEvents} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsPage;

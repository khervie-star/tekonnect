import React, { useState, useEffect, useRef } from "react";
import {
  Animated,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  CheckIcon
} from "react-native-heroicons/solid";
import {
  Bio,
  Contact,
  Experience,
  Gender,
  Name,
  Review,
  UserRole
} from "./components";
import { Contact2 } from "./components/contact2";
import { router } from "expo-router";

const ProfileSetup = () => {
  const progress = useRef(new Animated.Value(0)).current;
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    "Name & Date of Birth",
    "Gender",
    "Role",
    "Bio",
    "Experience",
    "Contact Details",
    "Review and Finish"
  ];

  useEffect(() => {
    Animated.timing(progress, {
      toValue: (currentStep + 1) / steps.length,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [currentStep]);

  const widthInterpolated = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"]
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleFinish = () => {
    router.push("/user/create-profile/response/success");
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-4">
      <LinearGradient
        colors={["#FFE0CC", "#FFD1B3"]}
        className="h-1 mb-4 mx-5"
        style={{ borderRadius: 5 }}>
        <Animated.View
          style={{
            width: widthInterpolated,
            height: "100%",
            backgroundColor: "#FFA07A"
          }}
        />
      </LinearGradient>
      <View className="flex-1 px-5 mt-10">
        {currentStep === 0 && <Name />}
        {currentStep === 1 && <Gender />}
        {currentStep === 2 && <UserRole />}
        {currentStep === 3 && <Bio />}
        {currentStep === 4 && <Experience />}
        {currentStep === 5 && <Contact2 />}
        {currentStep === 6 && <Review />}
      </View>
      <View className="flex-row justify-between mt-4 px-5">
        <View className="">
          {currentStep > 0 && (
            <TouchableOpacity
              onPress={handlePrevious}
              className="px-4 py-2 bg-secondary-light dark:bg-secondary-dark rounded-lg flex-row items-center w-fit">
              <ChevronLeftIcon size={20} color="white" />
              <Text className="text-white text-[16px] font-satoshi-bold ml-2">
                Back
              </Text>
            </TouchableOpacity>
          )}
        </View>
        <View className="flex-1 flex-row justify-end">
          {currentStep < steps.length - 1 ? (
            <TouchableOpacity
              onPress={handleNext}
              className="px-4 py-2 bg-primary-light dark:bg-primary-dark rounded-lg flex-row items-center">
              <Text className="text-white text-[16px] font-satoshi-bold mr-2">
                Next
              </Text>
              <ChevronRightIcon size={20} color="white" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={handleFinish}
              className="px-4 py-2 bg-success-light dark:bg-success-dark rounded-lg flex-row items-center">
              <Text className="text-white text-[16px] font-satoshi-bold mr-2">
                Finish
              </Text>
              <CheckIcon size={20} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileSetup;

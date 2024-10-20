import { useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { AsyncStorage } from "react-native";
import { useSession } from "@/context/ctx";

export function useOnboardingCheck(fontsLoaded: unknown) {
  const { session } = useSession();

  useEffect(() => {
    if (fontsLoaded) {
      checkOnboardingStatus();
    }
  }, [fontsLoaded]);

  const checkOnboardingStatus = async () => {
    try {
      const value = await AsyncStorage.getItem("onboardingStatus");
      if (value !== null) {
        if (!session) {
          router.push("/get-started");
        } else {
          router.push("/(app)/(home)");
        }
      }
    } catch (e) {
      console.error("Error checking onboarding status:", e);
    }
  };
}

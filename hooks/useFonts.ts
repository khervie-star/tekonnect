import { useFonts as useExpoFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export function useFonts() {
  const [fontsLoaded] = useExpoFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    "Satoshi-Light": require("../assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Light.otf"),
    "Satoshi-Regular": require("../assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Regular.otf"),
    "Satoshi-Medium": require("../assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Medium.otf"),
    "Satoshi-Bold": require("../assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Bold.otf"),
    "Satoshi-Black": require("../assets/fonts/Satoshi_Complete/Fonts/OTF/Satoshi-Black.otf"),
    "Chillax-Light": require("../assets/fonts/Chillax_Complete/Fonts/OTF/Chillax-Light.otf"),
    "Chillax-Regular": require("../assets/fonts/Chillax_Complete/Fonts/OTF/Chillax-Regular.otf"),
    "Chillax-Medium": require("../assets/fonts/Chillax_Complete/Fonts/OTF/Chillax-Medium.otf"),
    "Chillax-Semibold": require("../assets/fonts/Chillax_Complete/Fonts/OTF/Chillax-Semibold.otf"),
    "Chillax-Bold": require("../assets/fonts/Chillax_Complete/Fonts/OTF/Chillax-Bold.otf")
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return fontsLoaded;
}

import React from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider as NavThemeProvider
} from "@react-navigation/native";
import { useColorScheme } from "@/hooks/useColorScheme";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const colorScheme = useColorScheme();
  return (
    <NavThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {children}
    </NavThemeProvider>
  );
};

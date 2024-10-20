import React from "react";
import { Toasts } from "@backpackapp-io/react-native-toast";

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Toasts defaultStyle={{ text: { fontFamily: "Satoshi-Medium" } }} />
    </>
  );
};

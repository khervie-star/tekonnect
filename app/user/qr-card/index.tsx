import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  View,
  Image,
  Text,
  Pressable,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native";
import {
  PaperAirplaneIcon,
  EnvelopeIcon,
  PhoneIcon,
  DocumentTextIcon,
  ShareIcon,
  ArrowLeftCircleIcon
} from "react-native-heroicons/solid";
import QRCodeStyled from "react-native-qrcode-styled";

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

const gradientColors = ["#000000", "#434343"];

const goBack = () => {
  router.back();
};

const QrCard = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <View className="flex-1 px-5 pt-8">
        <View className="flex flex-row items-center mb-5">
          <TouchableOpacity onPress={goBack}>
            <ArrowLeftCircleIcon size={24} color={"#000000"} />
          </TouchableOpacity>
          <Text className="font-satoshi-black text-[24px] ml-2">My ID</Text>
        </View>

        {/* Centered Card */}
        <View className="flex-1 justify-center items-center w-full">
          <View className="w-full rounded-xl shadow-xl shadow-slate-300">
            <LinearGradient
              colors={gradientColors}
              className="w-full p-4 rounded-t-xl">
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
            <View className="bg-white p-4 rounded-b-xl">
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

        {/* Buttons at the Bottom */}
        <View className="space-y-3">
          <Pressable className="bg-primary-light flex-row items-center justify-center w-full py-3 rounded-lg">
            <DocumentTextIcon size={20} color="white" />
            <Text className="text-white font-satoshi-bold ml-2">
              Save to Files
            </Text>
          </Pressable>
          <Pressable className="border border-primary-light flex-row items-center justify-center w-full py-3 rounded-lg">
            <ShareIcon size={20} color="#FF8343" />
            <Text className="text-primary-light font-satoshi-bold ml-2">
              Share
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>

    // <SafeAreaView className="flex-1 bg-gray-50">
    //   <View className="px-5">
    //     <View className="flex flex-row justify-between items-center">
    //       <Text className="font-satoshi-black text-[24px]">Home</Text>
    //       <View className="flex-row items-center">
    //         <Image
    //           source={require("../../../../assets/images/user.jpg")}
    //           className="w-9 h-9 rounded-full"
    //         />
    //       </View>
    //     </View>

    //     <View className="w-full rounded-xl shadow-xl shadow-slate-300">
    //       <LinearGradient
    //         colors={gradientColors}
    //         className="w-full p-4 rounded-t-xl">
    //         <View className="flex-row items-center justify-between mb-8">
    //           <Image
    //             source={require("../../../../assets/images/logo.png")}
    //             className="w-20 h-10"
    //             resizeMode="contain"
    //           />
    //           <Pressable className="flex flex-row items-center">
    //             <Text className="text-gray-200 font-satoshi-bold text-[12px] mr-2">
    //               Send card
    //             </Text>
    //             <PaperAirplaneIcon size={14} color="#e5e7eb" />
    //           </Pressable>
    //         </View>
    //         <View className="flex-row justify-center mb-2">
    //           <QRComponent value={"qrValue"} size={160} />
    //         </View>
    //         <Text className="text-gray-200 font-satoshi-medium text-center mb-4">
    //           Scan or click to preview
    //         </Text>
    //       </LinearGradient>
    //       <View className="bg-white p-4 rounded-b-xl">
    //         <View className="flex-row justify-between items-center pb-3">
    //           <View className="flex-row items-center">
    //             <Image
    //               source={require("../../../../assets/images/user.jpg")}
    //               className="w-10 h-10 rounded-full mr-3"
    //             />
    //             <View>
    //               <Text className="text-gray-800 text-[16px] font-satoshi-bold">
    //                 Kwesi Hervie
    //               </Text>
    //               <Text className="text-gray-500 text-[12px] font-satoshi-regular">
    //                 UI developer
    //               </Text>
    //             </View>
    //           </View>
    //         </View>
    //         <View className="pt-3 border-t border-gray-200">
    //           <View className="flex flex-row items-center justify-start mb-1">
    //             <EnvelopeIcon size={14} color={"#1f2937"} />
    //             <Text className="text-gray-800 text-[12px] font-satoshi-bold ml-2">
    //               example@email.com
    //             </Text>
    //           </View>

    //           <View className="flex flex-row items-center justify-start">
    //             <PhoneIcon size={14} color={"#1f2937"} />
    //             <Text className="text-gray-800 text-[12px] font-satoshi-bold ml-2">
    //               08180746707
    //             </Text>
    //           </View>
    //         </View>
    //       </View>
    //     </View>
    //   </View>
    // </SafeAreaView>
  );
};

export default QrCard;

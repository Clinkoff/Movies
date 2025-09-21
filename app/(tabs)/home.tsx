import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import React from "react";
import { Image, ScrollView, View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView className="flex-1 z-10 px-5">
        <Image source={icons.logo} className="w-28 h-10 mt-20 mb-5 mx-auto" resizeMode="contain" />
      </ScrollView>
    </View>
  );
}

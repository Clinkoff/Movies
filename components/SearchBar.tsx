import { icons } from "@/constants/icons";
import React from "react";
import { Image, TextInput, View } from "react-native";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
  return (
    <View className="flex-row itens-center bg-dark-200 px-5 py-4 rounded-full">
      <Image
        source={icons.search}
        style={{ width: 20, height: 20, tintColor: "#ab8bff", marginTop: 10 }}
        resizeMode="contain"
      />
      <TextInput
        onPress={onPress}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={"#a8b5db"}
        className="flex-1 ml-2 text-light-100"
      />
    </View>
  );
};

export default SearchBar;

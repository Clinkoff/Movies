import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";

const TabIcon = ({ focused, icon, title, color }: any) => {
  return (
    <View 
      className={`flex-row items-center justify-center ${
        focused ? 'px-5 py-2.5' : 'p-2'
      }`}
      style={focused ? {
        backgroundColor: '#FFB162', 
        borderRadius: 25,
        minWidth: 90,
      } : {}}
    >
      <Image
        source={icon}
        tintColor={focused ? '#1B2632' : color} 
        className="size-5"
        resizeMode="contain"
      />
      {focused && (
        <Text
          className="ml-2.5 font-semibold text-sm"
          style={{ color: '#1B2632' }} 
        >
          {title}
        </Text>
      )}
    </View>
  );
};

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFB162", 
        tabBarInactiveTintColor: "#4A5A6B", 
        tabBarStyle: {
          borderRadius: 25,
          marginHorizontal: 15,
          marginBottom: 45,
          height: 65,
          position: "absolute",
          bottom: 0,
          backgroundColor: "#1B2632",
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.35,
          shadowRadius: 6,
          paddingBottom: 8,
          paddingTop: 8,
          paddingHorizontal: 10,
        },
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              title="Home"
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              icon={icons.search}
              title="Pesquisar"
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              icon={icons.save}
              title="Favoritos"
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <TabIcon
              focused={focused}
              icon={icons.person}
              title="Perfil"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
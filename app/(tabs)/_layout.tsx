import { Tabs } from "expo-router";
import React from "react";
import CustomNavBar from "../../components/CustomNavBar";

const _layout = () => {
  return (
    <Tabs tabBar={(props) => <CustomNavBar {...props} />} screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: '#000' } }}>
      <Tabs.Screen
        name="home"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "Pesquisar", headerShown: false }}
      />
      <Tabs.Screen
        name="save"
        options={{ title: "Favoritos", headerShown: false }}
      />
      <Tabs.Screen
        name="profile"
        options={{ title: "Perfil", headerShown: false }}
      />
    </Tabs>
  );
};

export default _layout;

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Profile = () => {
  const mockUser = {
    name: "Felipe Clink",
    email: "felipe.clink@movies.com",
    joinDate: "Setembro 2024",
    favoriteMovies: 24,
    watchedMovies: 158,
    reviews: 12
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 z-10 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Header */}
        <View className="items-center mt-10 mb-8">
          <Text className="text-2xl font-bold text-white mb-2">Meu Perfil</Text>
        </View>

        {/* Profile Card */}
        <View className="bg-dark-200 rounded-2xl p-6 mb-6 border border-dark-100">
          {/* Avatar and Basic Info */}
          <View className="items-center mb-6">
            <View className="bg-secondary rounded-full p-4 mb-4">
              <Image
                source={icons.profile}
                className="size-16"
                tintColor="#ab8bff"
                resizeMode="contain"
              />
            </View>
            <Text className="text-xl font-bold text-white mb-1">{mockUser.name}</Text>
            <Text className="text-light-300 text-sm">{mockUser.email}</Text>
            <Text className="text-accent text-xs mt-1">Membro desde {mockUser.joinDate}</Text>
          </View>

          {/* Stats */}
          <View className="flex-row justify-around border-t border-dark-100 pt-4">
            <View className="items-center">
              <Text className="text-2xl font-bold text-accent">{mockUser.favoriteMovies}</Text>
              <Text className="text-light-300 text-xs">Favoritos</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-accent">{mockUser.watchedMovies}</Text>
              <Text className="text-light-300 text-xs">Assistidos</Text>
            </View>
            <View className="items-center">
              <Text className="text-2xl font-bold text-accent">{mockUser.reviews}</Text>
              <Text className="text-light-300 text-xs">Avaliações</Text>
            </View>
          </View>
        </View>

        {/* Menu Options */}
        <View className="bg-dark-200 rounded-2xl border border-dark-100 overflow-hidden">
          <TouchableOpacity className="flex-row items-center p-4 border-b border-dark-100">
            <Image source={icons.star} className="size-5 mr-3" tintColor="#ab8bff" />
            <View className="flex-1">
              <Text className="text-white font-medium">Meus Favoritos</Text>
              <Text className="text-light-300 text-xs">Filmes que você salvou</Text>
            </View>
            <Text className="text-light-300">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center p-4 border-b border-dark-100">
            <Image source={icons.search} className="size-5 mr-3" tintColor="#ab8bff" />
            <View className="flex-1">
              <Text className="text-white font-medium">Histórico de Busca</Text>
              <Text className="text-light-300 text-xs">Suas pesquisas recentes</Text>
            </View>
            <Text className="text-light-300">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center p-4 border-b border-dark-100">
            <Image source={icons.home} className="size-5 mr-3" tintColor="#ab8bff" />
            <View className="flex-1">
              <Text className="text-white font-medium">Configurações</Text>
              <Text className="text-light-300 text-xs">Preferências do app</Text>
            </View>
            <Text className="text-light-300">›</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center p-4">
            <Image source={icons.logo} className="size-5 mr-3" tintColor="#ab8bff" />
            <View className="flex-1">
              <Text className="text-white font-medium">Sobre o Movies+</Text>
              <Text className="text-light-300 text-xs">Versão 1.0.0</Text>
            </View>
            <Text className="text-light-300">›</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity className="bg-red-600 rounded-2xl p-4 mt-6 items-center">
          <Text className="text-white font-bold">Sair do App</Text>
        </TouchableOpacity>

        <View className="items-center mt-6">
          <Text className="text-light-300 text-xs">Movies+ v1.0.0</Text>
          <Text className="text-light-300 text-xs">Desenvolvido por Felipe Clink e Estefany Lika</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
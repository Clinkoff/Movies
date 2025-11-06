import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
    isFromCache,
    refetch,
  } = useFetch(() => fetchMovies({ query: "" }));

  return (
    <View className="flex-1 bg-primary">
      <Image source={images.bg} className="absolute w-full z-0" />

      <ScrollView
        className="flex-1 z-10 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10, minHeight: "100%" }}
        refreshControl={
          <RefreshControl
            refreshing={moviesLoading}
            onRefresh={refetch}
            tintColor="#ffffff"
            colors={["#ffffff"]}
          />
        }
      >
        <Image
          source={icons.logo}
          className="w-28 h-10 mt-20 mb-5 mx-auto"
          resizeMode="contain"
        />

        {((moviesError?.fromCache && movies && movies.length > 0) ||
          (isFromCache && !moviesLoading && movies && movies.length > 0)) && (
          <View className="bg-yellow-500/20 border border-yellow-400/50 rounded-lg px-4 py-3 mb-3">
            <Text className="text-yellow-300 text-sm font-semibold text-center">
              {moviesError?.fromCache ? "📡 Modo Offline" : "📦 Cache Local"}
            </Text>
            <Text className="text-yellow-200/80 text-xs text-center mt-1">
              {moviesError?.fromCache
                ? `Sem conexão - Exibindo ${movies.length} filmes do cache`
                : `Carregando do cache - ${movies.length} filmes`}
            </Text>
          </View>
        )}

        {moviesLoading ? (
          <ActivityIndicator
            size="large"
            color="#0000ff"
            className="mt-10 self-center"
          />
        ) : moviesError && (!movies || movies.length === 0) ? (
          <View className="mt-10 self-center">
            <Text className="text-red-500 text-center px-5">
              {moviesError.message}
            </Text>
          </View>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Pesquise um filme"
            />
            <Text className="text-lg text-white font-bold mt-5 mb-3">
              Ultimos filmes
            </Text>
            <FlatList
              data={movies}
              renderItem={({ item }) => <MovieCard {...item} />}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              columnWrapperStyle={{
                justifyContent: "flex-start",
                gap: 20,
                paddingRight: 5,
                marginBottom: 15,
              }}
              className="mt-2 pb-32"
              scrollEnabled={false}
            />
          </View>
        )}
      </ScrollView>
    </View>
  );
}

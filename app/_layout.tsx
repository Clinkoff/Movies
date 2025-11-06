import { Stack } from "expo-router";
import "./globals.css";
// Importa o database para garantir inicialização automática
import "@/services/database";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="movies/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}

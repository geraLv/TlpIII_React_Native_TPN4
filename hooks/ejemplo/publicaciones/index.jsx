import { publicaciones } from "@/constants/data";
import { router, Stack } from "expo-router";
import { FlatList, ScrollView, Text, TouchableOpacity } from "react-native";

export default function Publicaciones() {
  return (
    <>
      <Stack.Screen options={{ title: "Publicaciones" }} />
      <ScrollView className="flex-1 bg-white p-4">
        <Text className="text-xl font-bold mb-4">Publicaciones</Text>
        <FlatList
          data={publicaciones}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              className="p-4 mb-3 rounded-xl bg-blue-100"
              onPress={() => router.push(`/publicaciones/${item.id}`)}
            >
              <Text className="text-lg font-semibold">{item.titulo}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </>
  );
}

import { useState } from "react";
import { publicaciones } from "@/constants/data";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View, Pressable } from "react-native";
import { CheckBox } from "@react-native-community/checkbox";
import Navigationbar from "../../../../components/navegacion";
export default function SubtareaDetalle() {
  const [isChecked, setIsChecked] = useState(false);

  const { idPublicacion, idComentario } = useLocalSearchParams();
  const publicacion = publicaciones.find((p) => p.id === idPublicacion);
  const comentario = publicacion?.comentarios.find(
    (c) => c.id === idComentario
  );

  if (!publicacion || !comentario) {
    return (
      <>
        <Stack.Screen options={{ title: "Comentario no encotnrado" }} />
        <View className="flex-1 p-4 bg-white">
          <Text className="text-red-500">Comentario no encontrado</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: publicacion.titulo + " / ID Comentario :" + idComentario,
        }}
      />
      <View className="flex-1 p-4 bg-white ">
        <Text className="text-xl font-bold mb-2">SubTarea #{idComentario}</Text>
        <Text className="text-base">{comentario.texto}</Text>
        <View className="flex-row justify-between w-1/3 items-center gap-3">
          <Text className="mt-4 text-gray-500 text-sm">
            Título de la publicación: {publicacion.titulo}
          </Text>
          <Pressable
            className={
              !isChecked
                ? "w-8 h-8 border-2 rounded-full"
                : "bg-lime-400 w-8 h-8 rounded-full"
            }
            onPress={() => setIsChecked(!isChecked)}
          ></Pressable>
          {/* <Text>{isChecked ? "Activado" : "Desactivado"}</Text> */}
        </View>
      </View>
      <Navigationbar></Navigationbar>
    </>
  );
}

import { publicaciones } from '@/constants/data';
import { Stack, useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ComentarioDetalle() {
  const { idPublicacion, idComentario } = useLocalSearchParams();
  const publicacion = publicaciones.find((p) => p.id === idPublicacion);
  const comentario = publicacion?.comentarios.find((c) => c.id === idComentario);

  if (!publicacion || !comentario) {
    return (
      <>
        <Stack.Screen options={{ title: 'Comentario no encotnrado' }} />
        <View className="flex-1 p-4 bg-white">
          <Text className="text-red-500">Comentario no encontrado</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: publicacion.titulo + ' / ID Comentario :' + idComentario }} />
      <View className="flex-1 p-4 bg-white">
        <Text className="text-xl font-bold mb-2">Comentario #{idComentario}</Text>
        <Text className="text-base">{comentario.texto}</Text>
        <Text className="mt-4 text-gray-500 text-sm">
          Título de la publicación: {publicacion.titulo}
        </Text>
      </View>
    </>
  );
}

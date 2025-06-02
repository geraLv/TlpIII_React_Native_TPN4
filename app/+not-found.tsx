import { router } from 'expo-router';
import { XCircle } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <XCircle size={80} color="#EF4444" />
      <Text className="text-4xl font-extrabold text-red-600 mt-4">404</Text>
      <Text className="text-xl font-semibold text-gray-800 mt-2">Pantalla no encontrada</Text>
      <Text className="text-center text-gray-500 mt-2">
        La ruta que estás buscando no existe o ha sido movida.
      </Text>

      <TouchableOpacity
        className="mt-6 px-6 py-3 bg-blue-600 rounded-full"
        onPress={() => router.replace('/')}
      >
        <Text className="text-white text-base font-medium">Volver al inicio</Text>
      </TouchableOpacity>
    </View>
  );
}

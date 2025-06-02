import { View, Text, StatusBar, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import NavigateBar from "@/components/navegacion";
import SvgPerfil_img from "@/assets/svg/perfil_img";
interface perfilProps {
  user: string;
}
export default function Perfil({ user }: perfilProps) {
  return (
    <View className="flex-1 bg-gray-100 justify-between">
      <View className="bg-white rounded-2xl w-full items-center shadow-lg p-4">
        <View className="w-full max-w-md bg-slate-100 rounded-2xl shadow-md p-6">
          <View className="items-center mb-6">
            <SvgPerfil_img />
          </View>

          <Text className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Opciones de Perfil
          </Text>

          <TouchableOpacity className="flex-row items-center space-x-4 p-4 rounded-xl bg-white shadow-sm mb-3 active:opacity-80">
            <Feather name="edit" size={22} color="#1F2937" />
            <Text className="text-gray-800 text-lg">Editar Perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center space-x-4 p-4 rounded-xl bg-white shadow-sm mb-3 active:opacity-80">
            <Feather name="settings" size={22} color="#1F2937" />
            <Text className="text-gray-800 text-lg">Ajustes</Text>
          </TouchableOpacity>

          <TouchableOpacity className="flex-row items-center space-x-4 p-4 rounded-xl bg-red-600 shadow-md mt-6 active:opacity-90">
            <Feather name="log-out" size={22} color="white" />
            <Text className="text-white text-lg font-medium">
              Cerrar Sesión
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <NavigateBar></NavigateBar>
    </View>
  );
}

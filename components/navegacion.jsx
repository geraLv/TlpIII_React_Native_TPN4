import { View, Text, Pressable } from "react-native";
// import { Navigation } from "lucide-react-native";
import SvgComponent from "../assets/svg/home";
import SvgPerfil from "../assets/svg/perfil";
import SvgOpciones from "../assets/svg/opciones";
import PressableComp from "./pressable";
import { useRouter } from "expo-router";
import { Ruler } from "lucide-react-native";
import SvgTareas from "../assets/svg/tareas";

const NavigateBar = () => {
  const router = useRouter();
  const stylePressable = "flex justify-center items-center gap-2";
  const text = "text-white font-bold ";

  return (
    <View className="flex-row justify-around items-center w-full bg-white shadow-md px-6 py-3 rounded-t-3xl">
      <Pressable
        onPress={() => router.push("/publicaciones")}
        className="items-center"
      >
        <View className="bg-gray-100 p-3 rounded-full shadow-sm">
          <SvgTareas />
        </View>
        <Text className="text-gray-700 text-sm mt-1 font-medium">Tareas</Text>
      </Pressable>

      <Pressable onPress={() => router.push("/main")} className="items-center">
        <View className="bg-gray-100 p-3 rounded-full shadow-sm">
          <SvgComponent />
        </View>
        <Text className="text-gray-700 text-sm mt-1 font-medium">Inicio</Text>
      </Pressable>

      <Pressable
        onPress={() => router.push("/perfil")}
        className="items-center"
      >
        <View className="bg-gray-100 p-3 rounded-full shadow-sm">
          <SvgPerfil />
        </View>
        <Text className="text-gray-700 text-sm mt-1 font-medium">Perfil</Text>
      </Pressable>

      <Pressable className="items-center">
        <View className="bg-indigo-500 p-3 rounded-full shadow-md">
          <SvgOpciones />
        </View>
        <Text className="text-white text-sm mt-1 font-medium">Opciones</Text>
      </Pressable>
    </View>
  );
};

export default NavigateBar;

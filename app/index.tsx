import { TextInput, Text, View, Button } from "react-native";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Register from "@/components/services/register";
//import { useRouter } from "expo-router"; // Importa el hook useRouter de Expo Router
//import { useRouter } from "expo-router"; // Importa el hook useRouter de Expo Router
//import { useRouter }
export default function Regis() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [pressed, setPressed] = useState(false);
  const router = useRouter();

  function registrar() {
    Register({ user, pass });
  }

  return (
    <View className="flex-1  justify-center items-center ">
      <Text className="fond-bold text-3xl mb-8">Bienvenido</Text>
      <View className="gap-4 shadow-xl bg-white p-10 rounded-lg w-3/4">
        <Text className="text-left">Ingrese su Usuario</Text>
        <TextInput
          value={user}
          onChangeText={setUser}
          className="shadow-lg border-gray-300 border-2 rounded-lg bg-white"
        />
        <Text className="text-left rounded-sm boxShadow">
          Ingrese su Contraseña
        </Text>
        <TextInput
          value={pass}
          onChangeText={setPass}
          className="shadow-lg border-gray-300 border-2 rounded-lg bg-white"
        />
        <Button title="Registrar" onPress={() => setPressed(!pressed)}></Button>
        {pressed ? <Register user={user} pass={pass}></Register> : null}
      </View>
    </View>
  );
}

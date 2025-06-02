import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import BuscarUsuario from "@/components/services/buscarUsuario";
export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [pressed, setPressed] = useState(false);
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
        <Button title="Aceptar" onPress={() => setPressed(!pressed)} />

        {pressed ? (
          <BuscarUsuario user={user} pass={pass}></BuscarUsuario>
        ) : null}
      </View>
    </View>
  );
}

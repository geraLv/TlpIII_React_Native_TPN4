import axios from "axios";
import { Text } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";
interface LoginPromps {
  user: string;
  pass: string;
}

export default function BuscarUsuario({ user, pass }: LoginPromps) {
  const router = useRouter();
  useEffect(() => {
    const fechData = async () => {
      try {
        const response = await axios.post("http://localhost:3000/api/login", {
          user: user,
          pass: pass,
        });
        console.log("Respuesta del servidor: ", response.data);
        router.replace("/main");
      } catch (error) {
        console.error("Error en la solicitud: ", error);
      }
    };
    fechData();
  }, []);
  return <Text>Cargando...</Text>;
}

import { Alert, Text } from "react-native";
import { useEffect } from "react";
import axios from "axios";
import { View } from "lucide-react-native";
import { useRouter } from "expo-router";
interface RegisterProps {
  user: string;
  pass: string;
}

export default function Register({ user, pass }: RegisterProps) {
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3000/api/register",
          { user: user, pass: pass }
        );
        console.log("Respuesta del servidor", response.data);
        router.replace("/login");
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    fetchData(); // Ejecuta la función correctamente
  }, []);
  return (
    <View>
      <Text>Se registro correctamente</Text>
    </View>
  );
}

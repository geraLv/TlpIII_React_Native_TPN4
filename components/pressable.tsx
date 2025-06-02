import { Pressable, Text, View } from "react-native";
import { useState } from "react";

export default function PressableComp() {
  const [press, setPress] = useState(false);
  const [style, setStyle] = useState("");

  return (
    <View className="flex flex-row gap-4">
      <Pressable
        className={press ? "bg-yellow-400" : "bg-red-700"}
        onPress={() => setPress(!press)}
      >
        <Text className="text-white font-bold">hola</Text>
      </Pressable>
      <Pressable className={style} onPress={() => setPress(!press)}>
        <Text className="text-white font-bold">hola</Text>
      </Pressable>
    </View>
  );
}

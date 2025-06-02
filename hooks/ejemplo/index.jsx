import { useNavigation } from "expo-router";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Ejemplo() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>1 - Inicio</Text>
      <View style={styles.button}>
        <Button
          title="Ir a 'CONTENIDO' con PUSH"
          onPress={() => navigation.push("./Main")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Ir a 'CONTENIDO' con REPLACE"
          onPress={() => navigation.replace("ejemplo/contenido")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="Ir a 'CONTENIDO' con NAVIGATE"
          onPress={() => navigation.navigate("ejemplo/contenido")}
        />
      </View>
      <View style={styles.hr} />
      <View style={styles.button}>
        <Button
          title="PUSH a la misma vista (Inicio)"
          onPress={() => navigation.push("ejemplo/index")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="REPLACE a la misma vista (Inicio)"
          onPress={() => navigation.replace("ejemplo/index")}
        />
      </View>
      <View style={styles.button}>
        <Button
          title="NAVIGATE a la misma vista (Inicio)"
          onPress={() => navigation.navigate("ejemplo/index")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    nativeWind: {
      fontFamily: "sans-serif-light",
      color: "#333",
    },
  },
  button: {
    marginBlock: 5,
  },
  hr: {
    padding: 20,
  },
});

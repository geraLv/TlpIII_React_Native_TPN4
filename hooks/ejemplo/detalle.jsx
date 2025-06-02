import { useNavigation } from 'expo-router';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Detalle() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>3 - Detalle</Text>
      <View style={styles.button}>
        <Button title="Volver con PUSH" onPress={() => navigation.push('ejemplo/index')} />
      </View>
      <View style={styles.button}>
        <Button title="Volver con REPLACE" onPress={() => navigation.replace('ejemplo/index')} />
      </View>
      <View style={styles.button}>
        <Button title="Volver con Navigate" onPress={() => navigation.navigate('ejemplo/index')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    nativeWind: {
      fontFamily: 'sans-serif-light',
      color: '#333',
    },
  },
  button: {
    marginBlock: 5,
  }
});

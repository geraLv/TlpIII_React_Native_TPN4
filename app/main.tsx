import { Button, View, StatusBar } from "react-native";
import NavigateBar from "../components/navegacion";
import React, { useEffect, useState } from "react";
import {
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
export default function Main() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: "46315912-253f4c0324e800a0219411702",
          q: "jardinería",
          image_type: "photo",
          per_page: 12,
        },
      });
      setImages(response.data.hits);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const renderItem = ({ item }: any) => (
    <TouchableOpacity className="w-1/2 p-2">
      <Image
        source={{ uri: item.webformatURL }}
        className="w-full h-40 rounded-xl"
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#4B5563" />
        <Text className="text-gray-500 mt-4">Cargando imágenes...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white p-4">
      <Text className="text-2xl font-semibold text-center text-gray-800 mb-4">
        Galería de Jardinería
      </Text>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
      <NavigateBar></NavigateBar>
    </View>
  );
}

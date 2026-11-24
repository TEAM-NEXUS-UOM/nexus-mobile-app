import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import OrderProductCard from "@/Components/Cards/OrderProductCard";

const RecordNextDetails = () => {
  const router = useRouter();
  const list = [1, 2, 3, 4, 5, 6, 7, 8];
  const [number, setNumber] = useState(0);
  const changeCount = (n: number) => {
    setNumber((prev) => prev + n);
  };

  const searchComponent = (
    <>
      <View className="flex-row bg-white p-4 rounded-[14px] my-4 border-2 border-[#E3E6EB] items-center">
        <EvilIcons name="search" size={24} color="black" />

        <TextInput
          className="flex-1 ml-2 font-Poppins-Medium"
          placeholderTextColor="#000000"
          placeholder="Search Product"
        />
      </View>
    </>
  );
  return (
    <SafeAreaView className="flex-1 p-4" edges={["top", "left", "right"]}>
      <View className="flex-row items-center justify-center relative mb-2">
        <Pressable
          className="absolute left-0 bg-white p-2 rounded-full"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </Pressable>

        <Text className="text-xl font-Poppins-Medium">ABC Stores</Text>
      </View>

      <FlatList
        ListHeaderComponent={searchComponent}
        showsVerticalScrollIndicator={false}
        data={list}
        renderItem={({ index }) => <OrderProductCard />}
      />
       <TouchableOpacity
              onPress={() => {
                router.back();
              }}
            >
              <View className="bg-[#15803D] rounded-[24px] p-4 m-1 items-center justify-center">
                <Text className="font-Poppins-SemiBold text-xl text-white ">
                 Order Complete
                </Text>
              </View>
            </TouchableOpacity>
    </SafeAreaView>
  );
};

export default RecordNextDetails;

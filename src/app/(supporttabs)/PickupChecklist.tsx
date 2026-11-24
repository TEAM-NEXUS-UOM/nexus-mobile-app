import { Images } from "@/assets/assets";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as Progress from "react-native-progress";
import { SafeAreaView } from "react-native-safe-area-context";

import PickupChecklistComponent from "@/Components/PickupChecklistComponent";

const DeliveryCheckList = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 p-4" edges={["top", "left", "right"]}>
      <View className="flex-row items-center justify-center relative mb-2">
        <Pressable
          className="absolute left-0 bg-white p-2 rounded-full"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </Pressable>

        <Text className="text-xl font-Poppins-Medium">Kottawa CBL</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Delivery Info */}
        <LinearGradient
          style={{
            borderRadius: 24,
            marginHorizontal: 2,
            marginVertical: 20,
            padding: 12,
          }}
          colors={["#2A44D4", "#2A44D4"]}
        >
          {/* Delivery Summary */}
          <View className="flex-row justify-between items-center my-2">
            <View>
              <Text className="font-Poppins-Light text-lg text-white">
                Pickup
              </Text>

              <Text className="font-Poppins-SemiBold text-3xl text-white">
                P09134
              </Text>
            </View>

            <View>
              <Progress.Circle
                size={70}
                progress={0.8}
                thickness={4}
                color="#ffffff"
                unfilledColor="#D1D5DB"
                borderWidth={0}
                showsText
                formatText={() => "90%"}
                textStyle={{
                  fontFamily: "Poppins-Medium",
                  fontSize: 16,
                  color: "#ffffff",
                }}
                strokeCap="round"
              />
            </View>
          </View>
        </LinearGradient>

        {/* shop Details */}
        <View className="bg-white p-4 m-1 rounded-[24px] border border-[#E3E6EB]">
          <View className="flex-row items-center justify-between ">
            <View className="flex-1">
              <Text className="font-Poppins-Medium text-2xl">Kottawa CBL</Text>
              <View className="flex-row items-center mt-2">
                <EvilIcons name="location" size={20} color="black" />
                <Text className="font-Poppins-Light text-base flex-1">
                  24/14, Saman Mawatha, Kadawatha
                </Text>
              </View>
            </View>
            <Pressable>
              <View className="w-14 h-14 bg-[#EAEEFC] rounded-full items-center justify-center">
                <Feather name="phone-call" size={24} color="black" />
              </View>
            </Pressable>
          </View>

          {/* Total amount */}
          <View className="bg-[#F6F7F9] my-4 p-4 rounded-[20px] gap-2">
            <Text className="font-Poppins-Light">Scan here for Documents</Text>
            <View className="flex-1 items-center ">
              <Image
                source={Images.barcode}
                style={{ width: 300, height: 100 }}
                resizeMode="cover"
              />
            </View>
          </View>

          <View className="flex-row justify-around gap-3">
            <TouchableOpacity
              className="flex-1 bg-[#EAEEFC] my-2 p-3 rounded-[14px]"
              onPress={() => router.navigate("/(supporttabs)/ProductDetails")}
            >
              <Text className="text-center font-Poppins-Medium">
                View Product List
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View className="bg-white p-4 m-1 my-[20px] rounded-[24px] border-2 border-[#E3E6EB]">
       <Text className="font-Poppins-Medium text-xl m-3">
          Delivery Checklist
        </Text>
        <Checklist/>
       </View> */}

        <PickupChecklistComponent />

        <TouchableOpacity
          onPress={() => {
            router.dismissAll();
          }}
        >
          <View className="bg-[#15803D] rounded-[20px] p-4 m-2 items-center justify-center">
            <Text className="font-Poppins-SemiBold text-xl text-white ">
              Pickup Completed
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DeliveryCheckList;


import Header from "@/Components/Header";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import DropdownComponent from "@/Components/Dropdownlist";

const AddNewShop = () => {
  return (
    <SafeAreaView className="flex-1 p-2 pb-0" edges={["top", "left", "right"]}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header />

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="m-2 my-4 p-2">

            <Text className="px-2 font-Poppins-Medium text-lg">
              Name of the shop
            </Text>
            <View className="flex-row bg-white p-4 rounded-[14px] my-2 border-2 border-[#E3E6EB] items-center">
              <AntDesign name="shop" size={20} color="gray" />
              <TextInput
                className="flex-1 ml-2 font-Poppins-Medium"
                placeholderTextColor="gray"
                placeholder="Type here"
              />
            </View>

            <Text className="px-2 font-Poppins-Medium text-lg mt-4">
              Shop owner name
            </Text>
            <View className="flex-row bg-white p-4 rounded-[14px] my-2 border-2 border-[#E3E6EB] items-center">
              <AntDesign name="user" size={20} color="gray" />
              <TextInput
                className="flex-1 ml-2 font-Poppins-Medium"
                placeholderTextColor="gray"
                placeholder="Type here"
              />
            </View>

            <Text className="px-2 font-Poppins-Medium text-lg mt-4">
              Contact Number
            </Text>
            <View className="flex-row bg-white p-4 rounded-[14px] my-2 border-2 border-[#E3E6EB] items-center">
              <Feather name="phone" size={20} color="gray" />
              <TextInput
                className="flex-1 ml-2 font-Poppins-Medium"
                placeholderTextColor="gray"
                placeholder="Type here"
                keyboardType="phone-pad"
              />
            </View>

            <Text className="px-2 font-Poppins-Medium text-lg mt-4">
              Location
            </Text>
            <View className="flex-row bg-white p-4 rounded-[14px] my-2 border-2 border-[#E3E6EB] items-center">
              <AntDesign name="environment" size={20} color="gray" />
              <TextInput
                className="flex-1 ml-2 font-Poppins-Medium"
                placeholderTextColor="gray"
                placeholder="Type here"
              />
            </View>

            <Text className="px-2 font-Poppins-Medium text-lg mt-4">
              Type of the shop
            </Text>
            <DropdownComponent/>

            <Text className="px-2 font-Poppins-Medium text-lg mt-4">
              Special requests
            </Text>
            <View className="flex-row bg-white p-4 rounded-[14px] my-2 border-2 border-[#E3E6EB] items-start">
              <Feather
                name="edit-3"
                size={20}
                color="gray"
                style={{ marginTop: 4 }}
              />
              <TextInput
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                className="flex-1 ml-2 font-Poppins-Medium"
                style={{ minHeight: 100 }}
                placeholderTextColor="gray"
                placeholder="Type here"
              />
            </View>

            

          </View>
        </ScrollView>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            alert("Submitted for review");
          }}
        >
          <View className="bg-[#2A44D4] rounded-[24px] p-4 m-2 items-center justify-center">
            <Text className="font-Poppins-SemiBold text-xl text-white">
              Submit for review
            </Text>
          </View>
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default AddNewShop;

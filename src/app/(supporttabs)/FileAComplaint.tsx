import {
  View,
  Text,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import DropdownComponent from "@/Components/Dropdownlist";
import ImagePickerExample from "@/Components/ImagePicker";

const ActiveDeliveryDetails = () => {
  const router = useRouter();

  const { isActive } = useLocalSearchParams<{
    type: string;
    isActive: string;
  }>();

  const list = [1, 2, 3, 4, 5];

  return (
    <SafeAreaView className="flex-1 p-4" edges={["top", "left", "right"]}>
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View className="flex-row items-center justify-center relative my-4">
          <Pressable
            className="absolute left-0 bg-white p-2 rounded-full"
            onPress={() => router.back()}
          >
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </Pressable>

          <Text className="text-xl font-Poppins-Medium">ABC Store</Text>
        </View>

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          <View className="m-2 p-2">
            <Text className="px-2 font-Poppins-Medium text-lg mt-4">
              Type of the complaint
            </Text>
            <DropdownComponent type={0} />

            <Text className="px-2 font-Poppins-Medium text-lg mt-4">
              Complant (in brief)
            </Text>
            <View className="flex-row bg-white p-4 rounded-[14px] mt-2 border-2 border-[#E3E6EB] items-center">
              
              <TextInput
                className="flex-1 ml-2 font-Poppins-Medium"
                placeholderTextColor="gray"
                placeholder="Type here"
              />
            </View>

            <Text className="px-2 font-Poppins-Medium text-lg mt-4">
              Additional Comments
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



            <Text className="px-2 font-Poppins-Medium text-lg mt-2">
              Upload photos or documents 
            </Text>
            <ImagePickerExample/>


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

export default ActiveDeliveryDetails;

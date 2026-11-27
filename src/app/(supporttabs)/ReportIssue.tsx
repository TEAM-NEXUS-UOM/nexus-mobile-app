import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  ScrollView
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import * as Progress from "react-native-progress";
import { LinearGradient } from "expo-linear-gradient";


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
    keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
  >
      <View className="flex-row items-center justify-center relative my-4">
        <Pressable
          className="absolute left-0 bg-white p-2 rounded-full"
          onPress={() => router.back()}
        >
          <MaterialIcons name="arrow-back" size={24} color="black" />
        </Pressable>

        <Text className="text-xl font-Poppins-Medium">Report an Issue</Text>
      </View>
<ScrollView>
      <>
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
          <View className="flex-row justify-between items-center my-4">
            <View>
              <Text className="font-Poppins-Light text-lg text-white">
                Delivery
              </Text>

              <Text className="font-Poppins-SemiBold text-3xl text-white">
                D099134
              </Text>
            </View>

            <View>
              <Progress.Circle
                size={70}
                progress={0.9}
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

          {/* Delivery Information */}
          <View>
            <View className="flex-row justify-between mb-2">
              <Text className="font-Poppins-Light text-lg text-white">
                Next Stop
              </Text>

              <Text className="font-Poppins-Medium text-xl text-white">
                ABC Shop
              </Text>
            </View>

            <View className="flex-row justify-between mb-4">
              <Text className="font-Poppins-Light text-lg text-white">
                Delivery Vehicle
              </Text>

              <Text className="font-Poppins-Medium text-xl text-white">
                VEH1234
              </Text>
            </View>
          </View>

          {/* Action Buttons */}
          <View className="flex-row justify-around gap-3">
            <TouchableOpacity
              className="flex-1 bg-white my-2 p-3 rounded-[24px]"
              onPress={() => console.log("Call Driver")}
            >
              <Text className="text-center font-Poppins-Medium">
                Call head office
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        
      </>

      <Text className="font-Poppins-Medium text-lg my-1 mx-2">
                Quick Actions
              </Text>

      <TouchableOpacity className="flex-row m-2 items-center p-2 px-3 bg-[white] rounded-[14px] border border-gray-300 " >
      <Feather name="truck" size={18} color="gray" />
      <Text className="font-Poppins-Medium text-lg my-1 mx-2 text-[gray]">Vehicle Breakdown</Text> 
      </TouchableOpacity>

      <TouchableOpacity className="flex-row m-2 items-center p-2 px-3 bg-[white] rounded-[14px] border border-gray-300 " >
      <Feather name="alert-triangle" size={18} color="gray" />
      <Text className="font-Poppins-Medium text-lg my-1 mx-2 text-[gray]">Traffic or road delays</Text>
      </TouchableOpacity>


      <TouchableOpacity className="flex-row m-2 items-center p-2 px-3 bg-[white] rounded-[14px] border border-gray-300 " >
      <Feather name="package" size={18} color="gray" />
      <Text className="font-Poppins-Medium text-lg my-1 mx-2 text-[gray]">Damaged or shifted cargo</Text>
      </TouchableOpacity>


      <Text className="font-Poppins-Medium text-lg my-1 mx-2">
                State the issue
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

            </ScrollView>
            <TouchableOpacity 
            onPress={()=>{ alert("Reported")
            }}>
                <View className="bg-[#2A44D4] rounded-[24px] p-4 m-2 items-center justify-center">
                <Text className='font-Poppins-SemiBold text-xl text-white '>Report Issue</Text>
                </View>
              </TouchableOpacity>
              
            </KeyboardAvoidingView>

    </SafeAreaView>
  );
};

export default ActiveDeliveryDetails;

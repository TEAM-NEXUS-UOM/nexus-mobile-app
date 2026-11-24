
import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';
import { useRouter } from 'expo-router';

const ReportIssue_v2 = () => {

  const router = useRouter();
  return (
    <TouchableOpacity
    className="flex-row items-center justify-center gap-2 bg-[white] my-2 p-3 rounded-[14px]"
    onPress={() => router.navigate("/(supporttabs)/ReportIssue")}
  >
    {/* <Feather name="alert-triangle" size={16} color="#B91C1C" /> */}
    <Text className="text-center font-Poppins-Medium text-[#B91C1C]">
      Report an issue
    </Text>
  </TouchableOpacity>

  )
}

export default ReportIssue_v2

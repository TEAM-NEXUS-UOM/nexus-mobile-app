import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';
import Feather from '@expo/vector-icons/Feather';
<Feather name="alert-circle" size={16} color="#DC2626" />

const ReportIssue = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
    className="flex-row items-center justify-center gap-2  mt-3 p-3 rounded-[24px] border border-gray-200"
    onPress={() => router.navigate("/(supporttabs)/ReportIssue")}
  >
    <Feather name="alert-circle" size={16} color="#DC2626" />
    <Text className="text-center font-Poppins-Medium ext-gray-700">
      Report an issue
    </Text>
  </TouchableOpacity>

  )
}

export default ReportIssue

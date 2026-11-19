import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

const ReportIssue = () => {
  return (
    <TouchableOpacity
    className="flex-row items-center justify-center gap-2 bg-[#FFCCCC] my-2 p-3 rounded-[14px]"
    onPress={() => console.log("Pressed")}
  >
    {/* <Feather name="alert-triangle" size={16} color="#B91C1C" /> */}
    <Text className="text-center font-Poppins-Medium text-[#B91C1C]">
      Report an issue
    </Text>
  </TouchableOpacity>

  )
}

export default ReportIssue
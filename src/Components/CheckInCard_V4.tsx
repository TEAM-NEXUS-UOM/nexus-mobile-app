import { View, Text,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const CheckInCard4 = () => {
  const [isCheckedIn,setCheckIn] = useState<boolean>(false);
  const checkCheckedIn = ()=>{
    setCheckIn(prev=>!prev);
  }
  const today = new Date();

  const formattedDate = today.toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });
  return (
    <View
        
        >
          <View className='flex-row m-2 p-4 items-center justify-between'>
          <View className='flex-1 items-center justify-center'>
          <View className="w-24 h-24 bg-white rounded-full items-center justify-center my-2">
              <MaterialIcons name="person-outline" size={40} color="black" />
          </View>
          <View className='mx-5 '>
            <Text className='font-Poppins-Bold text-white text-[20px] text-center'>Eranjna Vishwajith</Text>
            <Text className='font-Poppins-Light text-white text-[15px] text-center'>Marketing Agent</Text>
          </View>
          </View>
          
          
          </View>
          



          
      </View>
  )
}

export default CheckInCard4
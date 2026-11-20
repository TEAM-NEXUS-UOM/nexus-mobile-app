import { View, Text, Pressable,TouchableOpacity,FlatList,Image,TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



const DeliveryCheckList = () => {
    const router = useRouter();
  return (
    <SafeAreaView className='flex-1 p-4' edges={['top', 'left', 'right']}>
    <View className="flex-row items-center justify-center relative mb-2">

<Pressable
  className="absolute left-0 bg-white p-2 rounded-full"
  onPress={() => router.back()}
>
  <MaterialIcons name="arrow-back" size={24} color="black" />
</Pressable>

<Text className="text-xl font-Poppins-Medium">ABC Stores</Text>

</View>
    
    
      


  </SafeAreaView>
  )
}

export default DeliveryCheckList


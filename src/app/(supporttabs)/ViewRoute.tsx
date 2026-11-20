import { View, Text, Pressable,TouchableOpacity,FlatList,Image,TextInput,StyleSheet } from 'react-native'
import React, { useState,useRef,useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MapView from 'react-native-maps';
import Feather from '@expo/vector-icons/Feather'
import EvilIcons from '@expo/vector-icons/EvilIcons'



const ViewRoute = () => {
  const router = useRouter()
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['15%', '50%', '90%'], []);
  const data = [1,2,3,4,5,6,7]
  return (
    <View className="flex-1">
      <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={{
          latitude: 7.8731,
          longitude: 80.7718,
          latitudeDelta: 3.5,
          longitudeDelta: 3.5,
        }}
      />

      <SafeAreaView
        className="px-4"
        edges={['top', 'left', 'right']}
        pointerEvents="box-none"
      >
        <View
          className="flex-row items-center justify-center relative my-4"
          pointerEvents="box-none"
        >
          <Pressable
            className="absolute left-0 bg-white p-2 rounded-full"
            onPress={() => router.back()}
          >
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </Pressable>

          <Text className="text-xl font-Poppins-Medium text-white">View Route</Text>
        </View>
      </SafeAreaView>

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={1}
        onChange={index => {
          console.log('onChange', index);
        }}
        onClose={() => {
          console.log('closed');
        }}
      >
        <BottomSheetView style={{ flex: 1, padding: 15,}}>
        <View className="flex-row items-center justify-between my-2">
  <View>
    <Text className="font-Poppins-Light text-md">
      Navigating to
    </Text>
    <Text className="font-Poppins-Medium text-4xl mt-2">
      ABC Stores
    </Text>
  </View>

  <Pressable>
    <View className="w-14 h-14 bg-[#EAEEFC] rounded-full items-center justify-center">
      <Feather name="phone-call" size={24} color="black" />
    </View>
  </Pressable>
</View>
<TouchableOpacity 
onPress={()=>{
  router.navigate("/(supporttabs)/DeliveryCheckList")
}}>
    <View className="bg-[#2A44D4] rounded-[14px] p-4 m-2 items-center justify-center">
    <Text className='font-Poppins-SemiBold text-xl text-white '>I've arrived at ABC Stores</Text>
    </View>
  </TouchableOpacity>
          
          <Text className='font-Poppins-Light text-md mt-3 text-base'>Next locations</Text>
          {data.map((item,index) => (

        <View key={index} className='p-4 m-2 rounded-[14px] bg-[#EAEEFC] border-2 border-[#E3E6EB]'>
          <Text className='font-Poppins-Regular text-xl '>XYZ mart</Text>
          <View className="flex-row items-center mt-2">
            <EvilIcons name="location" size={20} color="black" />

            <Text className="font-Poppins-Light text-base flex-1">
              24/14, Saman Mawatha, Kadawatha
            </Text>
          </View>
        </View>
      ))}

          
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}

export default ViewRoute;


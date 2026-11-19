import { View, Text, Pressable,TouchableOpacity,FlatList,Image,TextInput } from 'react-native'
import React, { useState,useRef,useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';



const ViewRoute = () => {
  const router = useRouter()
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['15%', '50%', '90%'], []);
  return (
    <SafeAreaView
    className="flex-1 p-4"
    edges={['top', 'left', 'right']}
  >
   <View className="flex-row items-center justify-center relative my-4">

<Pressable
  className="absolute left-0 bg-white p-2 rounded-full"
  onPress={() => router.back()}
>
  <MaterialIcons name="arrow-back" size={24} color="black" />
</Pressable>

<Text className="text-xl font-Poppins-Medium">View Route</Text>

</View>
<BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        onChange={index => {
          console.log('onChange', index);
        }}
        onClose={() => {
          console.log('closed');
        }}
      >
        <BottomSheetView style={{ flex: 1, padding: 24, alignItems: 'center' }}>
          <Text>Sheet content</Text>
        </BottomSheetView>
      </BottomSheet>
  </SafeAreaView>
  )
}

export default ViewRoute


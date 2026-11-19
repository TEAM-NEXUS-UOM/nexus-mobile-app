import { View, Text, Pressable,TouchableOpacity,FlatList,Image,TextInput,StyleSheet } from 'react-native'
import React, { useState,useRef,useMemo } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import MapView from 'react-native-maps';



const ViewRoute = () => {
  const router = useRouter()
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['15%', '50%', '90%'], []);
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
    </View>
  )
}

export default ViewRoute;


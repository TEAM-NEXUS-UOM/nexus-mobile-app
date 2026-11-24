import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';


interface prop{
  type:number
}


const HistoryCard = ({type}:prop) => {
  const router = useRouter()
  return (
    <View className='bg-[white] rounded-[24px] p-5 m-2 items-left justify-between border-2 border-[#E3E6EB]'>
    
    {type?<><Text className='font-Poppins-Medium text-xl'>Delivery : D099134</Text>
      <Text className='font-Poppins-Light text-lg'>Area : Katubedda</Text>
      <Text className='font-Poppins-Light text-lg'>Date : Monday,18 November</Text>
</>:<><Text className='font-Poppins-Medium text-xl'>Pickup : P099134</Text>
      <Text className='font-Poppins-Light text-lg'>Location : Kottawa CBL</Text>
      <Text className='font-Poppins-Light text-lg'>Date : Monday,18 November</Text>
</>}
      


      <TouchableOpacity className='bg-[#EAEEFC] my-4 p-2 rounded-[24px]'   onPress={() => {
    if (type) {
      router.push({
        pathname: "/ActiveDeliveryDetails",
        params: { type, isActive: 0 },
      });
    } else {
      router.push({
        pathname: "/ActivePickupDetails" as any,
        params: { type, isActive: 0 },
      });
    }
  }}>
                    <Text className='text-center font-Poppins-Medium text-[#1F33AE]'>View Report</Text>
                  </TouchableOpacity>
      
    
    

  </View>
  )
}

export default HistoryCard
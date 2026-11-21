import { View, Text,Pressable, } from 'react-native'
import React,{useState} from 'react'

const ProductDetailsCard = () => {
    const [number,setNumber] = useState(0)
    const changeCount= (n:number) =>{
        setNumber(prev=>prev + n)
    }
  return (
    <View className='flex-row bg-white p-4 my-2 items-center rounded-[24px] justify-between border-2 border-[#E3E6EB]'>
        <View className='p-2 flex-1 items-center'>
        
    <Text className='font-Poppins-Medium '>
        Munchee Cream Cracker 100g
    </Text>
        </View>
        <View className='mx-2 flex-row justify-center bg-[#F2F2F7] rounded-[14px] w-20'>
            
            <Text className='bg-[#F2F2F7] font-Poppins-Light text-xl py-3 mx-4 rounded-[5px]'>x {number}</Text>
            
        </View>
    
    </View> 
  )
}

export default ProductDetailsCard
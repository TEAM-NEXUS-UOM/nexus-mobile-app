import { View, Text,Pressable, } from 'react-native'
import React,{useState} from 'react'

const ProductDetailsCard = () => {
    const [number,setNumber] = useState(0)
    const changeCount= (n:number) =>{
        setNumber(prev=>prev + n)
    }
  return (
    <View className='flex-row bg-white p-4 my-2 items-center rounded-[10px] justify-between border-2 border-[#E3E6EB]'>
        <View className='p-2'>
        
    <Text className='font-Poppins-Medium mt-2'>
        Munchee Cream Cracker 100g
    </Text>
        </View>
        <View className='mx-2 flex-row justify-center bg-[#F2F2F7] rounded-[14px]'>
            <Pressable onPress={()=>changeCount(-1)}>
                <Text className='bg-[#F2F2F7] font-Poppins-Light text-xl px-3 py-3 rounded-[5px]'>-</Text>
            </Pressable>
            <Text className='bg-[#F2F2F7] font-Poppins-Light text-xl py-3 mx-4 rounded-[5px]'>{number}</Text>
            <Pressable onPress={()=>changeCount(+1)}>
                <Text className='bg-[#F2F2F7] font-Poppins-Light text-xl px-3 py-3 rounded-[5px]'>+</Text>
            </Pressable>
        </View>
    
    </View> 
  )
}

export default ProductDetailsCard
import { View, Text } from 'react-native'
import React from 'react'
import AssignedTaskCard from './Cards/AssignedTaskCard'

const AssignedTasks = () => {
  return (
    <View className='mt-4'>
    <Text className='m-2 font-Poppins-Medium text-xl'>Tasks assigned for today</Text>
    <AssignedTaskCard type={1}/>
    <AssignedTaskCard type={0}/>
    



  </View>
  )
}

export default AssignedTasks
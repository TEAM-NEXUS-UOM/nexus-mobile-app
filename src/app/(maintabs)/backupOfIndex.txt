import AssignedTasks from '@/Components/AssignedTasks'
import CheckInCard from '@/Components/Cards/CheckInCard'
import Header from '@/Components/Header'
import OngoingTask from '@/Components/OngoingTask'
import { ScrollView, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {


  return (
    <SafeAreaView className='flex-1 p-2 pb-0' edges={['top', 'left', 'right']}>
      <Header />

      <View className='flex-1 relative'>
        <ScrollView
          className='flex-1'
          showsVerticalScrollIndicator={false}

        >
          <CheckInCard />
          <OngoingTask />
          <AssignedTasks />
        </ScrollView>


      </View>
    </SafeAreaView>
  )
}

export default index


import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

const Header2 = () => {
  const today = new Date();

const hour = today.getHours();

let greeting;

if (hour < 12) {
  greeting = "Good Morning";
} else if (hour < 17) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}
  return (
    <View className='flex-row justify-between items-center m-1 p-3 rounded-[15px] bg-white/20'>
      <View>
      <Text className='font-Poppins-Regular font-bold text-md text-white'>
         {greeting}
        </Text>
        <Text className='font-Poppins-Medium font-bold text-2xl text-white'>
          Hello Eranjana
        </Text>
      </View>
     

    </View>
  )
}

export default Header2

import {
  View,
} from 'react-native';

import { useMemo, useRef } from 'react';

import { SafeAreaView } from 'react-native-safe-area-context';

import { useLocalSearchParams, useRouter } from 'expo-router';

import BottomSheet, {
  BottomSheetScrollView,
} from '@gorhom/bottom-sheet';

import AssignedTasks from '@/Components/AssignedTasks';
import CheckInCard3 from '@/Components/CheckInCard_V3';
import CheckInCard4 from '@/Components/CheckInCard_V4';
import Header2 from '@/Components/Header_V2';
import OngoingTask from '@/Components/OngoingTask';


const settings = () => {

  const router = useRouter();

  const bottomSheetRef = useRef<BottomSheet>(null);

  const { type } = useLocalSearchParams();

  const snapPoints = useMemo(() => ['60%', '80%'], []);

  return (
    <View className="flex-1 bg-[#2A44D4] ">

      {/* Header Section */}
      <SafeAreaView
        className="px-4 bg-[#2A44D4]"
        edges={['top', 'left', 'right']}
        pointerEvents="box-none"
      >
        <Header2 />
        <CheckInCard4 />
      </SafeAreaView>


      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        index={0}
        enableDynamicSizing={false}
        enablePanDownToClose={false}
        backgroundStyle={{
          backgroundColor: '#F6F7F9',
        }}
        onChange={(index) => {
          console.log('onChange', index);
        }}
      >

        {/* Scrollable Content */}
        <BottomSheetScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{
            padding: 10,
            paddingBottom: 50,
          }}
          showsVerticalScrollIndicator={false}
        >

          <CheckInCard3 />

          <OngoingTask />

          <AssignedTasks />

        </BottomSheetScrollView>

      </BottomSheet>

    </View>
  );
};

export default settings;

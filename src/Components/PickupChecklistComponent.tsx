
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type Task = {
  label: string;
  isAction?: boolean;
  onAction?: () => void;
};

const tasks: Task[] = [
  { label: 'Check product names and quantities against the shipment manifest' },
  { label: 'Inspect products and packaging for visible damage.' },
  { label: 'Confirm all assigned goods have been loaded securely.' },
  { label: 'sign from supervisor', isAction: true },
  { label: 'Capture Photo Evidence', isAction: true },
];

export default function PickupChecklistComponent() {
  const [checked, setChecked] = useState<boolean[]>(tasks.map(() => false));

  const router = useRouter();

  const toggleTask = (index: number) =>
    setChecked(prev => prev.map((v, i) => (i === index ? !v : v)));

  const activeIndex = checked.findIndex(c => !c);

  return (
    <View className="mx-1 my-5 rounded-[24px] border border-[#E3E6EB] bg-white px-8 py-6">
      <View
        pointerEvents="none"
        className="absolute bg-gray-200"
        style={{ left: 32 + 10, top: 55, bottom: 40, width: 2 }}
      />

      {tasks.map((task, index) => {
        const isChecked = checked[index];
        const isActive = index === activeIndex;

        return (
          <View key={index} className="flex-row items-center py-3">
            <Pressable
              onPress={() => toggleTask(index)}
              hitSlop={8}
              className={`h-8 w-8 items-center justify-center rounded-[24px] border-2 ${
                isChecked
                  ? 'border-green-700 bg-green-700'
                  : 'border-gray-300 bg-white'
              }`}
            >
              {isChecked && <Feather name="check" size={18} color="white" />}
            </Pressable>

            {task.isAction ? (
              <Pressable
                onPress={() => {
                  if (task.label === 'Record next order') {
                    router.push('/(supporttabs)/RecordNextDetails');
                  } else if (task.label === 'Capture payment invoice') {
                    router.push('/(supporttabs)/RecordNextDetails');
                  }
                }}
                className="ml-5 flex-1 flex-row items-center self-start rounded-[24px] border border-gray-200 p-3"
              >
                <Text className="flex-1 shrink font-Poppins-Medium">
                  {task.label}
                </Text>

                <Feather
                  name="arrow-right"
                  size={20}
                  color="black"
                  style={{ marginLeft: 10 }}
                />
              </Pressable>
            ) : (
              <Text
                className={`ml-5 flex-1 text-lg ${
                  isActive
                    ? 'font-Poppins-Medium text-gray-900'
                    : 'font-Poppins-Light text-gray-500'
                }`}
              >
                {task.label}
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

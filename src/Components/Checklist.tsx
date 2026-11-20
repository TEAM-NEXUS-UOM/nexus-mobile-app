import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

type Task = {
  label: string;
  isAction?: boolean;       // renders as a pill button
  onAction?: () => void;
};

const tasks: Task[] = [
  { label: 'Confirm the retail shop and delivery order' },
  { label: 'Verify products and quantities against the order' },
  { label: 'Inspect products for damage or missing items' },
  { label: 'Record next order', isAction: true },
  { label: 'Capture payment invoice', isAction: true },
];

export default function Checklist() {
  const [checked, setChecked] = useState<boolean[]>(tasks.map(() => false));

  const toggleTask = (index: number) =>
    setChecked(prev => prev.map((v, i) => (i === index ? !v : v)));

  // first unchecked item is the "current" step (dark + bold)
  const activeIndex = checked.findIndex(c => !c);

  return (
    <View className="mx-1 my-5 rounded-[24px] border border-[#E3E6EB] bg-white px-8 py-6">
      {/* vertical connector line, centered behind the 32px boxes */}
      <View
        pointerEvents="none"
        className="absolute bg-gray-200"
        style={{ left: 32 + 10, top: 45, bottom: 40, width: 2 }}
      />

      {tasks.map((task, index) => {
        const isChecked = checked[index];
        const isActive = index === activeIndex;

        return (
          <View key={index} className="flex-row items-center py-3">
            {/* checkbox */}
            <Pressable
              onPress={() => toggleTask(index)}
              hitSlop={8}
              className={`h-8 w-8 items-center justify-center rounded-lg border-2 ${
                isChecked
                  ? 'border-green-700 bg-green-700'
                  : 'border-gray-300 bg-white'
              }`}
            >
              {isChecked && <Feather name="check" size={18} color="white" />}
            </Pressable>

            {/* content */}
            {task.isAction ? (
              <Pressable
                onPress={task.onAction}
                className="ml-5 flex-row items-center self-start rounded-2xl bg-indigo-50 px-5 py-3"
              >
                <Text className="font-Poppins-SemiBold text-lg text-indigo-800">
                  {task.label}
                </Text>
                <Feather
                  name="arrow-right"
                  size={20}
                  color="#3730a3"
                  style={{ marginLeft: 10 }}
                />
              </Pressable>
            ) : (
              <Text
                className={`ml-5 flex-1 text-lg ${
                  isActive
                    ? 'font-Poppins-SemiBold text-gray-900'
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
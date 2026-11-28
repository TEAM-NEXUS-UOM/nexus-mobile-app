import { useState } from "react";
import {
  Alert,
  Button,
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function ImagePickerExample() {
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library.
    // Manually request permissions for videos on iOS when `allowsEditing` is set to `false`
    // and `videoExportPreset` is `'Passthrough'` (the default), ideally before launching the picker
    // so the app users aren't surprised by a system dialog after picking a video.
    // See "Invoke permissions for videos" sub section for more details.
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the media library is required."
      );
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const takePhoto = async () => {
    // Camera access always requires the user's permission.
    // Taking a photo also requires a device with a camera. The iOS Simulator
    // does not have one, so use a physical device to test this button.
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert(
        "Permission required",
        "Permission to access the camera is required."
      );
      return;
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <>
    <View className="flex  justify-center">
      <TouchableOpacity onPress={pickImage}>
        <View className="flex-row bg-white p-4 rounded-[14px] my-2 border-2 border-[#E3E6EB] items-center">
          <FontAwesome name="photo" size={18} color="gray" />
          <Text className="font-Poppins-Medium text-gray-500 ml-2">
            Pick an image from camera roll
          </Text>
        </View>
      </TouchableOpacity>


      <TouchableOpacity onPress={takePhoto}>
            <View className='flex-row bg-white p-4 rounded-[14px] my-2 border-2 border-[#E3E6EB] items-center'>
            <FontAwesome name="camera" size={18} color="gray" />
                <Text className='font-Poppins-Medium text-gray-500 ml-2'>Take a photo</Text>
            </View>
        </TouchableOpacity>
      
      
    </View>
    <View className="flex items-center">
    {image && <Image source={{ uri: image }} style={styles.image} />}
    </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 24,
    marginTop:10
  },
});

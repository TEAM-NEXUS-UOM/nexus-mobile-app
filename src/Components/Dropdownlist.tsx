import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data = [
    { label: 'Super Market', value: '1' },
    { label: 'Small Shop', value: '2' },
    { label: 'Sathosa', value: '3' },
    
  ];

  const Dropdownlist = () => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        renderLeftIcon={() => (
            <AntDesign name="shopping-cart" size={20} color="gray" 
            style={{ marginRight: 12 }}/>
        )}
      />
    );
  };

  export default Dropdownlist;

  const styles = StyleSheet.create({
    dropdown: {

      marginTop: 8,
      height: 50,
      borderColor:"#E3E6EB",
      borderWidth: 2,
      padding:16,
      borderRadius:14,
      backgroundColor:"white"
    },
    icon: {
      marginRight: 8,
    },
    placeholderStyle: {
        fontFamily:"Poppins-Medium",
      fontSize: 16,
      color:"gray"
    },
    selectedTextStyle: {
        fontFamily:"Poppins-Medium",
        fontSize: 16,
        color:"gray"
    },
    iconStyle: {
      width: 20,
      height: 20,
      marginRight:8
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
      fontFamily:"Poppins-Medium",
      color:"gray"
    },
  });
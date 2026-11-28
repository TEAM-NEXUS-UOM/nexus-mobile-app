import React, { useState } from 'react';
  import { StyleSheet } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';

  const data1 = [
    { label: 'Super Market', value: '1' },
    { label: 'Small Shop', value: '2' },
    { label: 'Sathosa', value: '3' },
    
  ];
  const data2 = [
    { label: 'Product defect', value: '1' },
    { label: 'Product return', value: '2' },
    { label: 'Payment issue', value: '3' },
    
  ];

interface prop{
  type:number
}

  const Dropdownlist = ({type}:prop) => {
    const [value, setValue] = useState(null);

    return (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={type?data1:data2}
        
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder="Select item"
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
        
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
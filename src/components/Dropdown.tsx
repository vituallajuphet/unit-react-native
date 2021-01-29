import React from 'react'
import { StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface Props {
  items?: any
  placeHolder?: string
  value?: string,
  onSelectChange: (dta:any) => void
}

const Dropdown = (props: Props) => {
  return (
    <DropDownPicker
      items={props.items}
      placeholder="asdfsadf sadfsadf"
      labelStyle={{ color: '#000' }}
      containerStyle={{ height: 60 }}
      itemStyle={{ justifyContent: 'flex-start' }}
      defaultValue={props.value}
      onChangeItem={item => props.onSelectChange(item)}
      style={styles.dropdown}
    />
  )
}

const styles = StyleSheet.create({
  dropdown: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderBottomColor: '#C7C7C7',
    color: '#C7C7C7',
    textAlign: 'left',
    paddingHorizontal: 0,
  }

});

export default Dropdown
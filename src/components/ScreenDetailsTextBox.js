import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../common/Styles';
import { AppColors } from '../common/Constants.json';

function ScreenDetailsTextBox({ text }) {
  return <View style={{ ...Styles.formElement, marginTop: 20 }}>
    <Text style={{ fontSize: 20, color: AppColors.Font.HeadingDescription, textAlign: "center",fontWeight:"bold",fontStyle:"normal", }}>{text}</Text>
  </View>;
}

export default ScreenDetailsTextBox;
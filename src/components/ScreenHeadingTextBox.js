import React from 'react';
import { View, Text } from 'react-native';
import Styles from '../common/Styles';
import { AppColors } from '../common/Constants.json';

function ScreenHeadingTextBox({ headingText }) {
  return <View style={{ ...Styles.formElement, marginTop: 10 }}>
    <Text style={{ fontSize: 25, color: AppColors.Font.Heading, textAlign: "center",fontWeight:"bold", }}>{headingText}</Text>
  </View>;
}

export default ScreenHeadingTextBox;

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
} from "react-native";
import { AppColors } from './../common/Constants.json';

const style = StyleSheet.create({
  safeAreaView: {
    backgroundColor: AppColors.LightMode.BackgroundColor,
    flex: 1,
  }
});

function ScreenContainer({ children }) {
  return <>
    <StatusBar />
    <SafeAreaView style={style.safeAreaView}>
      <ScrollView>
        {children}
      </ScrollView>
    </SafeAreaView>
  </>;
}

export default ScreenContainer;

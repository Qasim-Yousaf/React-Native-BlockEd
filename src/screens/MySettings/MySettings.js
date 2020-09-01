import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import ImageQr from "../../assets/images/ImageQr.png";
  import styles from "./styles";
  import Styles from "../../common/Styles";
  import ScreenContainer from "../../components/ScreenContainer";
  import HeaderAuthScreen from "../../components/HeaderAuthScreen";

  function MySettings(navigation) {

    return(
        <ScreenContainer>
            <HeaderAuthScreen />

            <View style={styles.screenHeadingView}>
                <Text style={styles.screenHeadingText}>BlockEd PROFILE</Text>
            </View>

            <View style={styles.screenHeadingView}>
                <Text style={styles.MySettings}>My Settings</Text>
            </View>

            <View style={styles.ImageQrView}>
                <Image style={styles.Qrcode} source={ImageQr} resizeMode="stretch"/>
            </View>

            <View style={{ ...Styles.formElement }}>
                <TextInput placeholder="EMAIL" textContentType="emailAddress" value="Nick R. Bocker" style={{...Styles.Input}}/>
            </View>

            <View style={{ ...Styles.formElement }}>
                <TextInput placeholder="EMAIL" textContentType="emailAddress" value="(+1) 231 402 1042" style={{...Styles.Input}}/>
            </View>

            <View style={{ ...Styles.formElement }}>
                <TextInput placeholder="EMAIL" textContentType="emailAddress" value="janedoe@gmail.com" style={{...Styles.Input}}/>
            </View>

        </ScreenContainer>
    )
  }

  export default MySettings;
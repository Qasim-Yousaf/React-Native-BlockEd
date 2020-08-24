import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Verify from "../../assets/images/Verify.png";
import ScreenContainer from "../../components/ScreenContainer";
import styles from "./styles";
import ApiCalls from "../../services/ApiCalls";
import { endPoints, apiStatusCodes } from "../../services/ApiConstants";
import AsyncStorage from "../../services/AsyncStorage";
import Constants from "../../common/Constants.json";
import Common from "../../common/Common";

function PhoneVerificationScreen(navigation) {
    return <ScreenContainer>
      
          <View style={styles.screenHeadingView}>
            <Text style={styles.screenHeadingText}>Phone Verification</Text>
          </View>
      
          <View style={styles.verificationCodeView}>
            <VerificationNumber value="" marginLeft={0} />
            <VerificationNumber value="" marginLeft={20} />
            <VerificationNumber value="" marginLeft={20} />
            <VerificationNumber value="" marginLeft={20} />
          </View>
      
          <View style={styles.reEnterMobileView}>
            <TouchableOpacity>
              <Text style={styles.reEnterMobileText}>Re-enter Your Mobile Number</Text>
            </TouchableOpacity>
          </View>
      
          <View style={styles.reEnterMobileView}>
            <Text style={styles.didNotReceiveCodeText}>You didn't receive a code?{" "}</Text>
      
            <TouchableOpacity>
              <Text style={styles.resendText}>Re-send</Text>
            </TouchableOpacity>
          </View>
      
          <View style={styles.numpadParentViewFirst}>
            <View style={styles.numpadChildView}>
              <NumpadKey value="1" verifyButtonDisabled={verifyButtonDisabled} onPress={onPressNumpad.bind(null, "1")} marginLeft={0} />
              <NumpadKey value="2" verifyButtonDisabled={verifyButtonDisabled} onPress={onPressNumpad.bind(null, "2")} />
              <NumpadKey value="3" verifyButtonDisabled={verifyButtonDisabled} onPress={onPressNumpad.bind(null, "3")} />
            </View>
          </View>
          <View style={styles.numpadParentViewSecond}>
            <View style={styles.numpadChildView}>
              <NumpadKey value="4" verifyButtonDisabled={verifyButtonDisabled} onPress={onPressNumpad.bind(null, "4")} marginLeft={0} />
              <NumpadKey value="5" verifyButtonDisabled={verifyButtonDisabled} onPress={onPressNumpad.bind(null, "5")} />
              <NumpadKey value="6" verifyButtonDisabled={verifyButtonDisabled} onPress={onPressNumpad.bind(null, "6")} />
            </View>
          </View>
          <View style={styles.numpadParentViewSecond}>
            <View style={styles.numpadChildView}>
              <NumpadKey value="7" verifyButtonDisabled={verifyButtonDisabled} onPress={onPressNumpad.bind(null, "7")} marginLeft={0} />
              <NumpadKey value="8" verifyButtonDisabled={verifyButtonDisabled} onPress={onPressNumpad.bind(null, "8")} />
              <NumpadKey value="9" verifyButtonDisabled={verifyButtonDisabled} onPress={onPressNumpad.bind(null, "9")} />
            </View>
          </View>
          <View style={styles.numpadParentViewSecond}>
            <View style={styles.numpadChildView}>
              <View style={styles.numpad(verifyButtonDisabled, 0)}></View>
              <NumpadKey value="0" verifyButtonDisabled={verifyButtonDisabled} onPress={onPressNumpad.bind(null, "0")} />
              <TouchableOpacity onLongPress={onLongPressCrossButton} onPress={onPressNumpad.bind(null, "x")} style={styles.numpad(verifyButtonDisabled)}><Text style={styles.numpadText}>x</Text></TouchableOpacity>
            </View>
          </View>
      
      
          <View style={styles.verifyButton}>
            <TouchableOpacity
              style={styles.verifyTouchableOpacity}
              onPress={onPressVerifyButton}
              disabled={verifyButtonDisabled}
            >
              <ImageBackground
                resizeMode="stretch"
                source={Verify}
                style={{ height: "100%", width: "100%", justifyContent: "center", opacity: verifyButtonDisabled ? 0.5 : 1 }}>
                <Text
                  style={styles.verifyTouchableOpacityText}>
                  Verify
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          </View>
      
        </ScreenContainer>;
}

  

export default PhoneVerificationScreen ;
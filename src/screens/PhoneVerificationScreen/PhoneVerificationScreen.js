import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Verify from "../../assets/images/Verify.png";
import ImageButtonGreen from "../../assets/images/button_green.png";
import ScreenContainer from "../../components/ScreenContainer";
import styles from "./styles";
import HeaderAuthScreen from "../../components/HeaderAuthScreen";
import { useLinkProps } from "@react-navigation/native";

function PhoneVerificationScreen(props) {

  // let type = props.route.params.type;
  const [type , setType] = useState(props.route.params.type);

  console.log('phone otp screen  type is ',type);


  const [verificationNumbers, setVerificationNumbers] = React.useState([]);
  const [verifyButtonDisabled, setVerifyButtonDisabled] = React.useState(true);

  function onPressNumpad(key) {
    const latestVerificationNumbers = verificationNumbers.concat();
    if (key === "x") {
      latestVerificationNumbers.pop();
      setVerificationNumbers(latestVerificationNumbers);
      lengthCheck(latestVerificationNumbers.length);
      return;
    }
     
    latestVerificationNumbers.push(key);
    setVerificationNumbers(latestVerificationNumbers);
    lengthCheck(latestVerificationNumbers.length);
  }

  function lengthCheck(updatedVerificationNumbersLength) {
    setVerifyButtonDisabled(updatedVerificationNumbersLength === 4 ? false : true);
  }

  async function onPressVerifyButton() {
    

    if(props.route.params.type == 'teacher'){
      props.navigation.navigate('TeacherDashboard');
      // props.navigation.navigate('CreateAccountasTeacher');


    } else if(props.route.params.type == 'student'){
      props.navigation.navigate('StudentDashboard');
      // props.navigation.navigate('CreateAccountasStudent');


    }

    
    
    // try {
    //   let response = await ApiCalls.createPostRequest(endPoints.verifyOtp, getOtpAndMobileNo())
    //   if (response.status == apiStatusCodes.STATUS_CODE_200 && response.data.success == true) {
    //     AsyncStorage.setAuthToken(response.data.token)
    //     Common.showSnackbar(Constants.AppMessages.successMsg, Common.SNACKBAR_SUCCESS);
    //   }
    //   else {
    //     Common.showSnackbar(Constants.AppMessages.errorMsg, Common.SNACKBAR_ERROR);
    //   }
    // }
    // catch (e) {
    //   Common.showSnackbar(Constants.AppMessages.errorMsg, Common.SNACKBAR_ERROR);
    // }
  }


  
  function onLongPressCrossButton() {
    setVerificationNumbers([]);
    setVerifyButtonDisabled(true);
  }


   return  <ScreenContainer  COLOR={"#F4F7FC"}  statBrColor={"#F4F7FC"}  BrStyle={"dark-content"}>
    
          <HeaderAuthScreen />
          <View style={styles.screenHeadingView}>
            <Text style={styles.screenHeadingText}>Phone Verification</Text>
          </View>
      
          <View style={styles.verificationCodeView}>
            <VerificationNumber value="2" marginLeft={0} />
            <VerificationNumber value="3" marginLeft={20} />
            <VerificationNumber value="4" marginLeft={20} />
            <VerificationNumber value="5" marginLeft={20} />
          </View>
      
          <View style={styles.reEnterMobileView}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('PhoneNumberScreen',{
              type:type,
            })}}>
              <Text style={styles.reEnterMobileText}>Enter Your Mobile Number</Text>
            </TouchableOpacity>
          </View>
      
          <View style={styles.reEnterMobileView}>
            <Text style={styles.didNotReceiveCodeText}>You didn't a receive a code? {" "}</Text>
      
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
                {/* <Text
                  style={styles.verifyTouchableOpacityText}>
                  Verify
                </Text> */}
              </ImageBackground>
            </TouchableOpacity>
          </View>
      
        </ScreenContainer>;
}


function VerificationNumber({ value, marginLeft }) {
  return value === undefined ? (
    <View style={styles.circleButton(marginLeft)} />
  ) : (
      <ImageBackground style={styles.circleButton(marginLeft)} source={ImageButtonGreen} resizeMode="stretch">
        <Text style={styles.circleText}>{value}</Text>
      </ImageBackground>
    );
}

function NumpadKey({ value, verifyButtonDisabled, onPress, marginLeft }) {
  return <TouchableOpacity
    onPress={onPress}
    disabled={!verifyButtonDisabled}
    style={styles.numpad(verifyButtonDisabled, marginLeft)}
  >
    <Text style={styles.numpadText}>{value}</Text>
  </TouchableOpacity>;
}

  

export default PhoneVerificationScreen ;
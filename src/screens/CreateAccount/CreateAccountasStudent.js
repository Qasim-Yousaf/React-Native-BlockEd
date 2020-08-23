import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import {
  Input,
} from 'react-native-elements';
import submit_btn from "../../assets/images/submit_btn.png";
import ScreenContainer from "../../components/ScreenContainer";
import HeaderAuthScreen from "../../components/HeaderAuthScreen";
import ScreenHeadingTextBox from '../../components/ScreenHeadingTextBox';
import ScreenDetailsTextBox from '../../components/ScreenDetailsTextBox';
import PhoneInput from 'react-native-phone-input';
import Styles from "../../common/Styles";
import CustomCountryPickerModal from '../../components/CustomCountryPickerModal';
import {Picker} from '@react-native-community/picker'

let myCountryPicker;
let phone;
    
function CreateAccountasStudent(navigation) {
    const [passwordHidden, setPasswordHidden] = React.useState(true);
    const [countryName, setCountryName] = React.useState('');
    const [agreementCheck, setAgreementCheck] = React.useState(false);

    function onPressFlag() {
        myCountryPicker.open();
    }

    async function onPressSubmit() {
    
        // if (validateFields() == true) {
        //   ApiCalls.createPostRequest(endPoints.registerUser, await createUserObject())
        //     .then((res) => {
        //       if(res.status == apiStatusCodes.STATUS_CODE_200) {
        //           res.data.data.otp  // 6410 
        //           navigation.push("PhoneVerificationScreen");
        //       }
        //       console.log(res)
        //     }).catch((err) => {
        //       console.log(err)
        //     })
        // }
        // else {
        //   Snackbar.show({
        //     text: Constants.AppMessages.mandatoryFieldsMsg,
        //     duration: Snackbar.LENGTH_LONG,
        //     backgroundColor: Constants.AppColors.Font.ButtonColor,
        //   })
        // }
      }

  return <ScreenContainer>
    <HeaderAuthScreen />
        <ScreenHeadingTextBox headingText="Sign Up"/>

        <ScreenDetailsTextBox text="Please fill below to create a new account" />

        <View style={{ ...Styles.formElement, marginTop:10 }} style={{...Styles.Input}}>
            <Input  underlineColorAndroid="transparent" placeholder="FIRST NAME" textContentType="name" value="James" />
        </View>

        <View style={{ ...Styles.formElement }}>
            <Input placeholder="LAST NAME" textContentType="name" value="Carter" />
        </View>

        <View style={{ ...Styles.formElement }}>
            <PhoneInput
                ref={(ref) => {
                phone = ref;
                }}
                onChangePhoneNumber={(num) => {
                setPhoneNumber(num)
                }}
                style={{ flex: 1, marginHorizontal: 5, }}
                textProps={{ placeholder: "PHONE NUMBER", style: { fontSize: 18, borderBottomWidth: 1, } }}
                onPressFlag={onPressFlag}
                autoFormat={true}
            />
        </View>

        <CustomCountryPickerModal
            ref={(ref) => {
                myCountryPicker = ref;
            }}
            // data={pickerData}
            data="{pickerData}"
            onChange={(country) => {
                selectCountry(country);
            }}
            cancelText="Cancel"
        />

        <View style={{ ...Styles.formElement, marginTop: "5%" }}>
            <Input placeholder="EMAIL" textContentType="emailAddress" value="jamescarter@gmail.com"/>
        </View>

        <View style={{ ...Styles.formElement, width: "80%" }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
                <Input placeholder="PASSWORD" textContentType="password" value="" secureTextEntry={passwordHidden} />
                <CheckBox
                value={!passwordHidden}
                onValueChange={setPasswordHidden.bind(null, !passwordHidden)} />
            </View>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", width: "90%", marginLeft: "5%", marginRight: "5%" }}>
            <CheckBox
                value={agreementCheck}
                onValueChange={setAgreementCheck.bind(null, !agreementCheck)} />
            <Text onPress={setAgreementCheck.bind(null, !agreementCheck)}>{`I Agree to the Terms & Conditions`}</Text>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "center", width: "90%", height: 50, marginLeft: "5%", marginRight: "5%", marginBottom: 20, marginTop: 20, }}>
            <TouchableOpacity
                style={{ width: "100%", height: "100%",backgroundColor: '#E5E5E5', }}
                onPress={onPressSubmit}>
                <Image resizeMode="stretch" source={submit_btn} />
            </TouchableOpacity>
        </View>
  </ScreenContainer>
};

export default CreateAccountasStudent;

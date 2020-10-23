import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
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
    
       
      }

  return <ScreenContainer statBrColor={"#E5E5E5"}  BrStyle={"dark-content"} COLOR={'#E5E5E5'}>
    <HeaderAuthScreen />
        <ScreenHeadingTextBox headingText="Sign Up"/>

        <ScreenDetailsTextBox text="Please fill below to create a new account" />

        <View style={{ ...Styles.formElement, marginTop:10 }} >
            <TextInput  underlineColorAndroid="transparent" placeholder="FIRST NAME" textContentType="name" value="James" style={{...Styles.Input}} />
        </View>

        <View style={{ ...Styles.formElement }} >
            <TextInput placeholder="LAST NAME" textContentType="name" value="Carter" style={{...Styles.Input}} />
        </View>

        <View style={{ ...Styles.formElement }} >
            <TextInput placeholder="PHONE NUMBER" keyboardType = 'numeric' textContentType="number" value="" style={{...Styles.Input}} />
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
                style={{...Styles.Input}}
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

        <View style={{ ...Styles.formElement }}>
            <TextInput placeholder="EMAIL" textContentType="emailAddress" value="jamescarter@gmail.com" style={{...Styles.Input}}/>
        </View>

        <View style={{ ...Styles.formElement,}}>
            <TextInput placeholder="PASSWORD" textContentType="PASSWORD" value="" style={{...Styles.Input}}/>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center", width: "90%", marginLeft: "4%", marginRight: "5%" }}>
            <CheckBox
                value={agreementCheck}
                onValueChange={setAgreementCheck.bind(null, !agreementCheck)} />
            <Text onPress={setAgreementCheck.bind(null, !agreementCheck)}>{`I Agree to the Terms & Conditions`}</Text>
        </View>

        <View>
            <TouchableOpacity 
                style={{...Styles.submit_btn}}
                onPress={onPressSubmit}>
                <Image resizeMode="stretch" source={submit_btn} />
            </TouchableOpacity>
        </View>
  </ScreenContainer>    
};

export default CreateAccountasStudent;

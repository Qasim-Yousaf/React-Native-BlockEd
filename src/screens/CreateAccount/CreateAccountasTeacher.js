import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import submit_btn from "../../assets/images/submit_btn.png";
import Page from "../../assets/images/Page.png";
import ScreenContainer from "../../components/ScreenContainer";
import HeaderAuthScreen from "../../components/HeaderAuthScreen";
import ScreenHeadingTextBox from '../../components/ScreenHeadingTextBox';
import ScreenDetailsTextBox from '../../components/ScreenDetailsTextBox';
import Styles from "../../common/Styles";
import { useLinkProps } from "@react-navigation/native";

    
function CreateAccountasTeacher (props) {
    const [agreementCheck, setAgreementCheck] = React.useState(false);


   async  function onPressSubmit() {
        props.navigation.navigate('TeacherDashboard')
    }

  return <ScreenContainer>
    <HeaderAuthScreen />
        <ScreenHeadingTextBox headingText="Sign Up"/>

        <ScreenDetailsTextBox text="Please fill below to create a new account" />

        <View style={{ ...Styles.formElement, marginTop:10 }} >
            <TextInput  underlineColorAndroid="transparent" placeholder="Enter your teaching course(s) speciality" textContentType="speciality" style={{...Styles.Input}} />
        </View>
        
        <View style={{ ...Styles.formElement, marginTop:10 }} >
            <Text style={{...Styles.SignUpTeacherDocsUploadText}}>upload your teaching certification and degree in education</Text>
        </View>

        <View  >
            <TouchableOpacity
                style={{ ...Styles.Inputupload }}
            >
                <Text style={{...Styles.uploadText,alignItems: 'flex-start'}}>Certification</Text>
                <Image resizeMode="stretch" source={Page} style={{position: "absolute",top: 13, right: 13}} />
            </TouchableOpacity>
        </View>

        <View  >
            <TouchableOpacity
                style={{ ...Styles.Inputupload }}
            >
                <Text style={{...Styles.uploadText,alignItems: 'flex-start'}}>Education Degree</Text>
                <Image resizeMode="stretch" source={Page} style={{position: "absolute",top: 13, right: 13}} />
            </TouchableOpacity>
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

export default CreateAccountasTeacher ;

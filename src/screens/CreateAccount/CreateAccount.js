import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import ImageLandingPageAccountType from "../../assets/images/landing_page_account_type.png";
import ImageAsStudentButton from "../../assets/images/button_as_a_student.png";
import ImageAsTeacherButton from "../../assets/images/button_as_a_teacher.png";
import ScreenContainer from "../../components/ScreenContainer";
import HeaderAuthScreen from "../../components/HeaderAuthScreen";
import Styles from "../../common/Styles";
import Constants from "../../common/Constants.json";

const CreateAccount = ({ navigation }) => {

  function CreateAccountasStudent() {
    navigation.push("CreateAccountasStudent");
  }

  function CreateAccountasTeacher() {
    navigation.push("CreateAccountasTeacher");
  }


  return <ScreenContainer>
    <View style={{ flexDirection: "row-reverse" }}>
      <TouchableOpacity style={{ marginRight: 10, padding: 2 }}>
        <Text style={{fontWeight:"bold",color:'#010169'}}>Choose Language</Text>
      </TouchableOpacity>
    </View>

    <HeaderAuthScreen />

    <View style={{ alignItems: "center", height: 280, marginTop: 10 }}>
      <Image source={ImageLandingPageAccountType} resizeMode="contain" />
    </View>

    <View style={{ alignItems: "center", paddingBottom: 20, marginLeft: "10%", marginRight: "10%", width: "80%" }}>

      <View style={{ marginTop: 5, justifyContent: "center", alignItems: "center", alignContent: "center" }}>
        <Text style={{...Styles.registerScreensSubtitleTextHeadingStyle, textAlign: "center", }}>CREATE ACCOUNT</Text>
        <Text style={{ textAlign: "center", marginTop: 10, fontSize:15 }}>Please click if you would like to sign up<Text style={{fontWeight: 'bold'}}> as a Student</Text></Text>
      </View>

      <View>
        <TouchableOpacity onPress={CreateAccountasStudent} style={{ marginTop: 20, }}>
          <Image source={ImageAsStudentButton} resizeMode="stretch" />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={CreateAccountasTeacher} style={{ paddingBottom: 55 }}>
          <Image source={ImageAsTeacherButton} resizeMode="stretch" />
        </TouchableOpacity>
      </View>
    </View>

  </ScreenContainer>
};

export default CreateAccount;

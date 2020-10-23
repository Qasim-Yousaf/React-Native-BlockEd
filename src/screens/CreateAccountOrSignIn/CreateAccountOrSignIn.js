import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import ImageLandingPage from "../../assets/images/landing_page.png";
import ImageCreateAccountButton from "../../assets/images/button_create_account.png";
import ImageSignInButton from "../../assets/images/button_sign_in.png";
import Carousel from "../../assets/images/carousel.png"
import Common from "../../common/Common";
import ScreenContainer from "../../components/ScreenContainer";
import HeaderAuthScreen from "../../components/HeaderAuthScreen";
import Styles from "../../common/Styles";
import Constants from "../../common/Constants.json";
import ChooseLanguage from "../../components/ChooseLanguage"
export default function CreateAccountOrSignIn({ navigation }) {

  const [openModel , setOpenModel] = React.useState(false);


  function onPressCreateAccount() {
    navigation.push("CreateAccount");
  }

  function testPhoneVerificationScreen() {
    // navigation.push("MySettings");
    navigation.push("SocialLogin2");

  }
  




  return <ScreenContainer COLOR={"white"}  statBrColor={"white"}  BrStyle={"dark-content"} >

    <View style={{ flexDirection: "row-reverse" }}>
      <TouchableOpacity onPress={ () => {setOpenModel(!openModel)}} style={{ marginRight: 10, padding: 2 }}>
        <Text style={{fontWeight:"bold",color:'#010169'}}>Choose Language</Text>
      </TouchableOpacity>

    </View>

     {openModel == true ? 
          <>
          <ChooseLanguage openModel={true} />
          </> 
    
        : null}
    <HeaderAuthScreen />

    <View style={{ height: 280, marginTop: 10,marginBottom: 15, alignItems: "center" }}>
      <Image source={ImageLandingPage} resizeMode="contain" />
    </View>

    <View style={{ alignItems: "center", width: "90%", marginLeft: "5%", marginRight: "5%" }}>

      <Text style={{...Styles.registerScreensSubtitleTextHeadingStyle,fontWeight: 'normal', width: "100%", textAlign: "center", }}>PLEASE CREATE AN ACCOUNT</Text>
      <Text style={{...Styles.registerScreensSubtitleTextHeadingStyle, fontWeight: 'bold', width: "100%", textAlign: "center",paddingBottom: 20}}>OR SIGN IN</Text>

      <View style={{marginBottom: 10}}>
        <Image source={Carousel} />
      </View>

      <View style={{borderWidth:0,}}>
        <TouchableOpacity onPress={onPressCreateAccount} style={{marginBottom: 0,borderWidth:0}}>
          <Image source={ImageCreateAccountButton} resizeMode="contain" />
        </TouchableOpacity>
      </View>

      <View style={{borderWidth:0}}>
        <TouchableOpacity onPress={testPhoneVerificationScreen} style={{ paddingBottom: 0 ,borderWidth:0}}>
          <Image source={ImageSignInButton} resizeMode="stretch" />
        </TouchableOpacity>
      </View>

    </View>
  </ScreenContainer>;
};

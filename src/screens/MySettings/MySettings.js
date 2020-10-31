import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    Switch
  } from "react-native";
  import ImageQr from "../../assets/images/ImageQr.png";
  import styles from "./styles";
  import Styles from "../../common/Styles";
  import ScreenContainer from "../../components/ScreenContainer";
  import HeaderAuthScreen from "../../components/HeaderAuthScreen";


  import fb from "../../assets/images/fb.png";
  import insta from "../../assets/images/insta.png";
  import zoom from "../../assets/images/zoom.png";
  import Gclassroom from "../../assets/images/Gclassroom.png";




  function MySettings(props) {


    const [isEnabled, setIsEnabled] = React.useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    return(
        <ScreenContainer COLOR={"#F4F7FC"}  statBrColor={"#F4F7FC"}  BrStyle={"dark-content"}>

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

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:10,height:50,borderRadius:5,marginHorizontal:20,marginBottom:5}}>
                <Text>Push Notification</Text>


                <Switch
                    trackColor={{ false: "#CCC", true: "green" }}
                    thumbColor={isEnabled ? "white" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />

            </View>


            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingHorizontal:30,height:50,borderRadius:5,marginHorizontal:20,marginBottom:5}}>
                

{/* 
                handleNavigation('MySettings')

*/}
                <TouchableOpacity onPress={ () => {}}  style={{backgroundColor:'white',width:60,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Image source={zoom} style={{width:35,height:35}}/>
                </TouchableOpacity>

{/* 
                handleNavigation('MySettings')

*/}
                <TouchableOpacity  onPress={ () => {}} style={{backgroundColor:'white',width:60,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Image source={Gclassroom} style={{width:25,height:25}}/>
                </TouchableOpacity>
{/* 
                handleNavigation('MySettings')

*/}
                <TouchableOpacity  onPress={ () => {}} style={{backgroundColor:'white',width:60,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Image source={fb} style={{width:25,height:25}}/>
                </TouchableOpacity>

                


                {/* 
                handleNavigation('MySettings')
                
                */}
                <TouchableOpacity  onPress={ () => {}} style={{backgroundColor:'white',width:60,height:50,justifyContent:'center',alignItems:'center'}}>
                    <Image source={insta} style={{width:25,height:25}}/>
                </TouchableOpacity>


            </View>


            

        </ScreenContainer>
    )
  }

  export default MySettings;
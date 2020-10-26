import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
  } from "react-native";
  import fb from "../../assets/images/fb.png";
  import insta from "../../assets/images/insta.png";
  import zoom from "../../assets/images/zoom.png";
  import Gclassroom from "../../assets/images/Gclassroom.png";
  import zoom3 from "../../assets/images/zoom3.png";

  import styles from "./styles";
  import ScreenContainer from "../../components/ScreenContainer";
  import HeaderAuthScreen from "../../components/HeaderAuthScreen";

  function SocialLogin1(props) {

    return(
        // <ScreenContainer>
        <ScreenContainer COLOR={"white"}  statBrColor={"white"}  BrStyle={"dark-content"}>

            <HeaderAuthScreen />

            <View style={styles.screenHeadingView} style={{paddingBottom: 65}}>
                <Text style={styles.screenHeadingText}>Social Login</Text>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2')} >
                <View style={styles.row}>
                <Text style={styles.txt}>Login with Zoom (required)</Text>
                <Image source={zoom3} style={{...styles.img, width:45,height:45}} />
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2')} >
                <View style={styles.row}>
                    <Text style={styles.txt}>Login with Zoom (required)</Text>
                    <Image source={Gclassroom} style={{...styles.img,marginRight:5}} />
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2')} >
                <View style={styles.row}>
                    <Text style={styles.txt}>Login with Facebook</Text>
                    <Image source={fb} style={{...styles.img,marginRight:5}} />
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2')} >
                <View style={styles.row}>
                    <Text style={styles.txt}>Login with Insta</Text>
                    <Image source={insta} style={{...styles.img,marginRight:5}} />
                </View>
            </TouchableOpacity>


            {/* <View style={{marginBottom: 15}} >
                <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2')} style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Classroom (required)</Text>
                    <Image source={Gclassroom} style={styles.zoomimg} />
                </TouchableOpacity>
            </View>

            <View style={{marginBottom: 15}} >
                <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2')} style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Facebook</Text>
                    <Image source={fb} style={styles.zoomimg} />
                </TouchableOpacity>
            </View>

            <View style={{marginBottom: 15}} >
                <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2')} style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Insta</Text>
                    <Image source={insta} style={styles.zoomimg} />
                </TouchableOpacity>
            </View> */}

        </ScreenContainer>
    )
  }

  export default SocialLogin1;
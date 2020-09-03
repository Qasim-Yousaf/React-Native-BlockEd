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

  import styles from "./styles";
  import ScreenContainer from "../../components/ScreenContainer";
  import HeaderAuthScreen from "../../components/HeaderAuthScreen";

  function SocialLogin1(navigation) {

    return(
        <ScreenContainer>
            <HeaderAuthScreen />

            <View style={styles.screenHeadingView} style={{paddingBottom: 65}}>
                <Text style={styles.screenHeadingText}>Social Login</Text>
            </View>

            <View style={{marginBottom: 15}} >
                <TouchableOpacity style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Zoom (required)</Text>
                    <Image source={zoom} style={styles.zoomimg} />
                </TouchableOpacity>
            </View>

            <View style={{marginBottom: 15}} >
                <TouchableOpacity style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Classroom (required)</Text>
                    <Image source={Gclassroom} style={styles.zoomimg} />
                </TouchableOpacity>
            </View>

            <View style={{marginBottom: 15}} >
                <TouchableOpacity style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Facebook</Text>
                    <Image source={fb} style={styles.zoomimg} />
                </TouchableOpacity>
            </View>

            <View style={{marginBottom: 15}} >
                <TouchableOpacity style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Insta</Text>
                    <Image source={insta} style={styles.zoomimg} />
                </TouchableOpacity>
            </View>

        </ScreenContainer>
    )
  }

  export default SocialLogin1;
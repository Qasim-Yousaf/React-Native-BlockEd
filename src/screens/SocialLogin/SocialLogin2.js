import React from "react";
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar
  } from "react-native";
  import fb from "../../assets/images/fb.png";
  import insta from "../../assets/images/insta.png";
  import zoom3 from "../../assets/images/zoom3.png";
  import Gclassroom from "../../assets/images/Gclassroom.png";

  import styles from "./styles";
  import ScreenContainer from "../../components/ScreenContainer";
  import HeaderAuthScreen from "../../components/HeaderAuthScreen";

  function SocialLogin1(props) {

    return(
        <ScreenContainer COLOR={"white"}  statBrColor={"white"}  BrStyle={"dark-content"}>
            <StatusBar barStyle="dark-content"  backgroundColor="white" />
            <HeaderAuthScreen />
            


            <View style={styles.screenHeadingView} style={{paddingBottom: 25}}>
                <Text style={styles.screenHeadingText}>Social Login</Text>
            </View>

        


                <View style={styles.secondaccounttextView} >
                    <Text style={styles.secondaccounttext}>Have a second account? Login here</Text>
                </View>


            <TouchableOpacity onPress={() => props.navigation.navigate('StudentDashboard')} >

                    <View style={styles.row}>
                        <Text style={styles.txt}>Login with Zoom (required)</Text>
                        <Image source={zoom3} style={{...styles.img, width:45,height:45}} />
                    </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate('StudentDashboard')} >

            <View style={styles.row}>
                <Text style={styles.txt}>Login with Zoom (required)</Text>
                <Image source={Gclassroom} style={{...styles.img,marginRight:5}} />
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => props.navigation.navigate('StudentDashboard')} >

            <View style={styles.row}>
                <Text style={styles.txt}>Login with Facebook</Text>
                <Image source={fb} style={{...styles.img,marginRight:5}} />
            </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate('StudentDashboard')} >

            <View style={styles.row}>
                <Text style={styles.txt}>Login with Insta</Text>
                <Image source={insta} style={{...styles.img,marginRight:5}} />
            </View>
            </TouchableOpacity>

            {/* <View style={{marginBottom: 15}} >
                <TouchableOpacity style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Zoom (required)</Text>
                    <Image source={zoom} style={styles.zoomimg} />
                </TouchableOpacity>
            </View> */}

            {/* <View style={{marginBottom: 15}} >
                <TouchableOpacity style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Classroom (required)</Text>
                    <Image source={Gclassroom} style={styles.zoomimg} />
                </TouchableOpacity>
            </View> */}

            {/* <View style={{marginBottom: 15}} >
                <TouchableOpacity style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Facebook</Text>
                    <Image source={fb} style={styles.zoomimg} />
                </TouchableOpacity>
            </View> */}

            {/* <View style={{marginBottom: 15}} >
                <TouchableOpacity style={styles.zoom}>
                    <Text  style={styles.socialText}>Login with Insta</Text>
                    <Image source={insta} style={styles.zoomimg} />
                </TouchableOpacity>
            </View> */}

        </ScreenContainer>
    )
  }

  export default SocialLogin1;
import React,{ useState, useEffect } from "react";
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
//   import auth from '@react-native-firebase/auth';
//   import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
//   } from '@react-native-community/google-signin';

  function SocialLogin1(props) {
      let type = props.route.params.type;
      console.log('screen social media 1 type is ',type);

//     const [initializing, setInitializing] = useState(true);
//     const [user, setUser] = useState();


    
//       // Handle user state changes
//   function onAuthStateChanged(user) {
//     setUser(user);
//     if (initializing) setInitializing(false);
//   }



//   useEffect(() => {
//     const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//     return subscriber; // unsubscribe on unmount
//   }, []);

// for google sign In
  // useEffect( () => {
  //   GoogleSignin.configure({
  //     scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId: '',
      
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  //   });


  // },[]);



  // if (initializing) return null;

  // if (!user) {

  //   return (
  //     <View style={{flex:1}}>
  //       {/* <Text>Login</Text> */}
  //       <TouchableOpacity
  //       onPress={ () => {
  //           auth()
  //           .signInAnonymously()
  //           .then(() => {
  //               console.log('User signed in anonymously');
  //           })
  //           .catch(error => {
  //               if (error.code === 'auth/operation-not-allowed') {
  //               console.log('Enable anonymous in your firebase console.');
  //               }

  //               console.error(error);
  //           });
  //       }}
        
  //       style={{backgroundColor:'red',padding:20,margin:20}} >
  //           <Text>Anonymous Login</Text>
  //       </TouchableOpacity>




  //       <TouchableOpacity
  //       onPress={ async() => {
  //           try {
  //               await GoogleSignin.hasPlayServices();
  //               const userInfo = await GoogleSignin.signIn();
  //               // this.setState({ userInfo });
  //               console.log('user info is -------- ', JSON.stringify(userInfo))
  //             } catch (error) {
  //                 console.log(error)
  //               if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //                 // user cancelled the login flow
  //               } else if (error.code === statusCodes.IN_PROGRESS) {
  //                 // operation (e.g. sign in) is in progress already
  //               } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //                 // play services not available or outdated
  //               } else {
  //                 // some other error happened
  //               }
  //             }
  //       }}
        
  //       style={{backgroundColor:'blue',padding:20,margin:20}} >
  //           <Text style={{color:'white'}}>Google Login</Text>
  //       </TouchableOpacity>


  //     </View>
  //   );
  // }

  // return (
  //   <View>
  //     <Text>Welcome {user.email}</Text>
  //     <TouchableOpacity style={{padding:50,backgroundColor:'orange'}} onPress={()=>{
  //         auth()
  //         .signOut()
  //         .then(() => console.log('User signed out!'));
  //     }}>
  //         <Text>LOgout</Text>
  //     </TouchableOpacity>
  //   </View>
  // );


    
    return(
        // <ScreenContainer>
        // <ScreenContainer COLOR={"white"}  statBrColor={"white"}  BrStyle={"dark-content"}>
<ScreenContainer  COLOR={"#F4F7FC"}  statBrColor={"#F4F7FC"}  BrStyle={"dark-content"}>

            <HeaderAuthScreen />

            <View style={styles.screenHeadingView} style={{paddingBottom: 65}}>
                <Text style={styles.screenHeadingText}>Social Login</Text>
            </View>

            <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2',{
                type:props.route.params.type,
            })} >
                <View style={styles.row}>
                <Text style={styles.txt}>Login with Zoom (required)</Text>
                <Image source={zoom3} style={{...styles.img, width:45,height:45}} />
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2',{
                type:props.route.params.type,
            })} >
                <View style={styles.row}>
                    <Text style={styles.txt}>Login with Zoom (required)</Text>
                    <Image source={Gclassroom} style={{...styles.img,marginRight:5}} />
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2',{
                type:props.route.params.type,
            })} >
                <View style={styles.row}>
                    <Text style={styles.txt}>Login with Facebook</Text>
                    <Image source={fb} style={{...styles.img,marginRight:5}} />
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => props.navigation.navigate('SocialLogin2',{
                type:props.route.params.type,
            })} >
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
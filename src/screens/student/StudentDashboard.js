import React , {Componet} from 'react';
import { View , Text , StyleSheet , TextInput , TouchableOpacity} from 'react-native';
import ScreenContainer from "../../components/ScreenContainer";
import HeaderAuthScreen from "../../components/HeaderAuthScreen";
import SearchBar from "../../components/SearchBar";

import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const StudentDashboard = (props) => {
        const [selectedMenuItem , setMenuItem ] = React.useState('');

        const handleNavigation =  (nextScreen) => {
                props.navigation.navigate(nextScreen);

        }

    return(
        <ScreenContainer COLOR={"#F4F7FC"}  statBrColor={"#F4F7FC"}  BrStyle={"dark-content"}>
           
           
            <View style={{marginTop:15}}>
                <HeaderAuthScreen />
            </View>


               <SearchBar /> 


        <TouchableOpacity  onPress={ () =>{
                setMenuItem('myclasses')
                handleNavigation('MyClasses')

        }} style={{backgroundColor: selectedMenuItem == "myclasses"?'#3FB65F':'transparent',marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:selectedMenuItem == "myclasses"?'white':'black',fontSize:16,fontWeight:'bold'}}>My Classes</Text>
        </TouchableOpacity>



        <TouchableOpacity  onPress={ () =>{
                setMenuItem('mycourses');
                handleNavigation('StudenViewAllCourseList');


        }} style={{backgroundColor: selectedMenuItem == "mycourses"?'#3FB65F':'transparent',marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:selectedMenuItem == "mycourses"?'white':'black',fontSize:16,fontWeight:'bold'}}>My Courses</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={ () =>{
                setMenuItem('mycalander');
                handleNavigation('TodayAppointment');


        }} style={{backgroundColor: selectedMenuItem == "mycalander"?'#3FB65F':'transparent',marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:selectedMenuItem == "mycalander"?'white':'black',fontSize:16,fontWeight:'bold'}}>My Calander</Text>
        </TouchableOpacity>





        <TouchableOpacity onPress={ () =>{
                setMenuItem('wallet');
                handleNavigation('WalletScreenOne');

        }} style={{backgroundColor: selectedMenuItem == "wallet"?'#3FB65F':'transparent',marginHorizontal:5,marginTop:10,borderRadius:25,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:selectedMenuItem == "wallet"?'white':'black',fontSize:16,fontWeight:'bold'}}>Block Ed Wallet</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () =>{
                setMenuItem('profile')
                handleNavigation('MySettings')

        }} style={{backgroundColor: selectedMenuItem == "profile"?'#3FB65F':'transparent',marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:selectedMenuItem == "profile"?'white':'black',fontSize:16,fontWeight:'bold'}}>My Profile</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={ () =>{
                setMenuItem('messages')
                handleNavigation('MyMessages')

        }} style={{backgroundColor: selectedMenuItem == "messages"?'#3FB65F':'transparent',marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:selectedMenuItem == "messages"?'white':'black',fontSize:16,fontWeight:'bold'}}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () =>{
                setMenuItem('logout')

        }} style={{backgroundColor: selectedMenuItem == "logout"?'#3FB65F':'transparent',marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:selectedMenuItem == "logout"?'white':'black',fontSize:16,fontWeight:'bold'}}>Logout</Text>
        </TouchableOpacity>

        {/* <LinearGradient  colors={['#00A86B', '#2C786C', '#00A86B']} style={styles.linearGradient}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient> */}
    



        </ScreenContainer>
    );

} 


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },
})





export default StudentDashboard;
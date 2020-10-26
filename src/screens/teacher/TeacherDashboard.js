import React , {Componet} from 'react';
import { View , Text , StyleSheet , TextInput , TouchableOpacity} from 'react-native';
import ScreenContainer from "../../components/ScreenContainer";
import HeaderAuthScreen from "../../components/HeaderAuthScreen";
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';

const TeacherDashboard = () => {


    return(
        <ScreenContainer COLOR={"#F4F7FC"}  statBrColor={"#F4F7FC"}  BrStyle={"dark-content"}>
           
           
            <View style={{marginTop:15}}>
                <HeaderAuthScreen />
            </View>

    <TouchableOpacity onPress={ () => {console.log('searchIsPress')}} style={{flexDirection:'row',borderWidth:0,backgroundColor:'white',marginHorizontal:20,borderRadius:5,height:60,marginVertical:10,padding:10,alignItems:'center'}}>

            <Fontisto name="search" size={20} color="black" style={{paddingRight:10}}/>
            <TextInput 
                  placeholderTextColor = "black"  
                  placeholder="SEARCH MY STUDENTS "
                  underlineColorAndroid = "transparent"
                  style={{borderWidth:0,flex:1}}
                // ,borderRadius:5,marginHorizontal:20,marginVkkdfkkdertical:10,paddingHorizontal:10,height:60,backgroundColor:'white'}}
                />

            <MaterialCommunityIcons name="microphone-outline" size={30} color="black" style={{paddingRight:10}}/>

        </TouchableOpacity>


        <TouchableOpacity  onPress={ () =>{}} style={{marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>My Classes</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={ () =>{}} style={{marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>My Calander</Text>
        </TouchableOpacity>





        <TouchableOpacity onPress={ () =>{}} style={{backgroundColor:'green',marginHorizontal:5,marginTop:10,borderRadius:25,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:'white',fontSize:16,fontWeight:'bold'}}>My Students</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={ () =>{}} style={{marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>Block Ed Wallet</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={ () =>{}} style={{marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>My Profile</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={ () =>{}} style={{marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>Messages</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={ () =>{}} style={{marginHorizontal:5,marginTop:10,borderRadius:20,borderWidth:0,paddingHorizontal:30,paddingVertical:15}}>
                <Text style={{color:'black',fontSize:16,fontWeight:'bold'}}>Logout</Text>
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





export default TeacherDashboard;
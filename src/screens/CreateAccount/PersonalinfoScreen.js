import React, { useState ,useRef} from 'react';
import {View , Text,StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import HeaderAuthScreen from "../../components/HeaderAuthScreen";
import ScreenContainer from "../../components/ScreenContainer";
import PhoneInput from "react-native-phone-number-input";
import AntDesign from 'react-native-vector-icons/AntDesign';

const PersonalinfoScreen = (props) =>{
    



    const [type , setType] = useState(props.route.params.type);
    console.log('phone number screen  type is ',type);

    const [gender , setGender] = useState('male');
    const [dob , setDob] = useState('20 Sep 2020');
    const [grade , setGrade] = useState('k-12');
    const [skills ,setSkills] = useState('Science');




    return(

        // <ScreenContainer COLOR={"white"}  statBrColor={"white"}  BrStyle={"dark-content"}>

<ScreenContainer  COLOR={"#F4F7FC"}  statBrColor={"#F4F7FC"}  BrStyle={"dark-content"}>
    
        <View style={styles.backContainer}>
            <AntDesign name="arrowleft" size={20} color="black"/>
        </View>
 
        <HeaderAuthScreen />

        <View style={styles.WelcomeHeadingContiner}>
            <Text style={styles.headingTxt}>Personal Information</Text>
        </View>


       <View style={styles.genderInfo}>
            <Text style={styles.txt}>Provide Your Gender </Text>
            <View style={styles.genderBtnRow}>



                    {gender=="male"?
                        <TouchableOpacity onPress={ ()=>setGender('male')} style={styles.btn}>
                            <Text style={{color:'white',fontWeight:'bold'}}>Male</Text>
                        </TouchableOpacity>

                        :
                        <TouchableOpacity onPress={ ()=>setGender('male')} style={styles.btn2}>
                            <Text style={{color:'black',fontWeight:'bold'}}>Male</Text>
                        </TouchableOpacity>

                    }


                    {gender=="female"?
                        <TouchableOpacity onPress={ ()=>setGender('female')} style={styles.btn}>
                                <Text style={{color:'white',fontWeight:'bold'}}>female</Text>
                        </TouchableOpacity>

                                :
                        <TouchableOpacity onPress={ ()=>setGender('female')} style={styles.btn2}>
                                <Text style={{color:'black',fontWeight:'bold'}}>female</Text>
                        </TouchableOpacity>

                    }


            </View>
       </View>


       <View style={styles.genderInfo}>
            <Text style={styles.txt}>What is your Date of birth? </Text>
            
            <TouchableOpacity onPress={ ()=>{}} style={styles.btn3}>
                <Text style={styles.txt2}>{dob}</Text>
                <AntDesign name="calendar" size={15} color="black" />
            </TouchableOpacity>


        </View>

        <View style={styles.genderInfo}>
            <Text style={styles.txt}>What is the highest school grade that you completed</Text>
            
            <TouchableOpacity onPress={ ()=>{}} style={styles.btn3}>
                <Text style={styles.txt2}>{grade}</Text>
                <AntDesign name="downcircleo" size={15} color="black" />
            </TouchableOpacity>


        </View>


        <View style={styles.genderInfo}>
            <Text style={styles.txt}>What skills do you have to study</Text>
            
            <TouchableOpacity onPress={ ()=>{}} style={styles.btn3}>
                <Text style={styles.txt2}>{skills}</Text>
                <AntDesign name="downcircleo" size={15} color="black" />
            </TouchableOpacity>


        </View>

        <View style={styles.genderInfo}>
            {/* <Text style={styles.txt}>What skills do you have to study</Text> */}
            
            <TouchableOpacity onPress={ ()=>{props.navigation.navigate('PhoneVerificationScreen',{
                type:type,
            })}} style={{...styles.btn3,backgroundColor:'#3FB65F',alignItems:'center',justifyContent:'center'}}>
                <Text style={{...styles.txt2,fontWeight:'bold',color:'white'}}>{'Next'}</Text>
                {/* <AntDesign name="downcircleo" size={15} color="black" /> */}
            </TouchableOpacity>


        </View>

        </ScreenContainer>

    );
}

const styles = StyleSheet.create({
    txt2:{
        color:'black',
        fontSize:15
    },
    btn3:{
        backgroundColor:'white',
        elevation:5,
        padding:20,
        borderRadius:5,
        width:'100%',
        marginVertical:15,
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    btn:{
        paddingHorizontal:55,
        paddingVertical:20,
        // borderWidth:1,
        borderRadius:5,
        backgroundColor:'#3FB65F',
        marginBottom:5

    },
    btn2:{
        paddingHorizontal:55,
        paddingVertical:20,
        // borderWidth:1,
        borderRadius:5,
        backgroundColor:'white',
        elevation:5,
        marginBottom:5
    },
    genderBtnRow:{
        flexDirection:'row',
        // borderWidth:1,
        marginTop:10,
        justifyContent:'space-between',
        alignItems:'center',
        // paddingHorizontal:20,
    },
    txt:{
        fontSize:16,
        fontWeight:"bold"
    },
    genderInfo:{
        marginHorizontal:20,
        // borderWidth:1,
        marginTop:10

    },
    backContainer:{
        height:20,
        // borderWidth:1,
        marginHorizontal:10,
        marginVertical:5
    },
    WelcomeHeadingContiner:{
        margin:10,
        // borderWidth:1,
        justifyContent:'center',
        alignItems:'center',

    },
    headingTxt:{
        fontSize:20,
        fontWeight:"bold",

    },
    numberContainer:{
        marginTop:50,
        marginHorizontal:40,
        // borderWidth:1,
        backgroundColor:'white',
        height:70,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        elevation:5
    }
})

export default PersonalinfoScreen;

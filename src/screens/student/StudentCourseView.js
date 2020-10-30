import React from 'react';
import {View , Text , Image  ,StyleSheet, Dimensions ,TouchableOpacity } from 'react-native';
import ScreenContainer from "../../components/ScreenContainer";
import HeaderAuthScreen from "../../components/HeaderAuthScreen";
import SearchBar from "../../components/SearchBar";
import AntDesign from 'react-native-vector-icons/AntDesign';


const StudentCourseView = (props) => {
    return(
        <ScreenContainer COLOR={"#F4F7FC"}  statBrColor={"#F4F7FC"}  BrStyle={"dark-content"}>
           
            <View style={{marginTop:15}}>
                <HeaderAuthScreen />
            </View>
       
            <SearchBar /> 
            

            <View style={styles.CourseViewContainer}>
                <Image style={styles.courseImg} source={require('../../assets/images/course.png')} />
            
                <Image style={styles.BarCodeImg} source={require('../../assets/images/barcode.png')} />

                <Text style={styles.courseTitle}>Mathematics for Computer Game Developement </Text>


                <Text style={styles.coursePrice}>$ 22</Text>

                <TouchableOpacity style={styles.btn} onPress={ () => props.navigation.navigate('StudentCheckout')}>
                    <AntDesign  size={25} name="shoppingcart" color="white" />
                    <Text style={styles.cartTxt}>Cart</Text>
                </TouchableOpacity>
            </View>



       
       
        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    CourseViewContainer:{
        // borderWidth:1,
        marginHorizontal:10,
        alignItems:'center'

    },
    courseImg:{
        width:Dimensions.get('window').width/2,
        height:Dimensions.get('window').width/2,
        marginVertical:15,

    },
    BarCodeImg:{
        width:Dimensions.get('window').width/4,
        height:Dimensions.get('window').width/4,
        marginBottom:15,
    },
    courseTitle:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold'
    },
    coursePrice:{
        color:'#3FB65F',
        fontWeight:'bold',
        fontSize:18,
        marginTop:10
    },
    btn:{
        width:'100%',
        padding:15,
        backgroundColor:'#3FB65F',
        borderRadius:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:30,
        flexDirection:'row'
    },
    cartTxt:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
        paddingLeft:10
    }
});


export default StudentCourseView;

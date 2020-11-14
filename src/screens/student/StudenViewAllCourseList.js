import React from 'react';
import {View , Text , Image  ,StyleSheet, Dimensions ,TouchableOpacity, ScrollView } from 'react-native';
import ScreenContainer from "../../components/ScreenContainer";
import HeaderAuthScreen from "../../components/HeaderAuthScreen";
import SearchBar from "../../components/SearchBar";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';


const StudenViewAllCourseList = (props) => {
    const Card = () => {
        return(
        <TouchableOpacity onPress={ () => props.navigation.navigate('StudentCourseView')} style={styles.content}>
            <View style={styles.imgCon}>
                <Image source={ require('../../assets/images/barcode.png')} style={styles.img} />
            </View>

            <View style={styles.cardContent}>
                   <Text style={styles.cardTitle}>Mathematics for Computer Games Development</Text>
                   <Text style={styles.cardPrice}>$ 22.2</Text> 
            </View>
        </TouchableOpacity>
        )
    }
    return(
        <ScreenContainer COLOR={"#F4F7FC"}  statBrColor={"#F4F7FC"}  BrStyle={"dark-content"}>
    

            <View style={styles.container}>

                <View style={styles.header}>
                    <AntDesign onPress={ () =>props.navigation.goBack()} name="arrowleft" size={20} color="color" />
                    <Text style={styles.headerTxt}>SELECT AVAILABLE COURSE</Text>
                </View>

                    <Card />
                    <Card />
                    <Card />
                    <Card />


            </View>   




        </ScreenContainer>
    );
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:10,
        // borderWidth:1,
        marginTop:30

    },
    header:{
        flexDirection:'row',
        marginBottom:30,

    },
    headerTxt:{
        fontSize:15,
        paddingLeft:10,
        fontWeight:'bold'
    },
    content:{
        // borderWidth:1,
        // marginHorizontal:10
        marginBottom:10,
        flexDirection:'row',
        backgroundColor:'white',
        elevation:5,
        // borderWidth:1,
        
        // borderRadius:5
    },
    imgCon:{
        width:100,
        height:100
    },
    img:{
        width:'100%',
        height:'100%',
    },
    cardContent:{
        padding:10,
        // backgroundColor:'red',
        width:'70%',



    },
    cardTitle:{
        fontWeight:'bold',
        fontSize:15,
        color:'black',

    },
    cardPrice:{
        fontWeight:'bold',
        fontSize:15,
        color:'#3FB65F',
        paddingTop:5
        
    }
});

export default StudenViewAllCourseList;

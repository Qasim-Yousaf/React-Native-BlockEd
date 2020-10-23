import { StyleSheet } from 'react-native';
import { AppColors } from "../../common/Constants.json";
import CommonStyles from "../../common/Styles";

const styles = StyleSheet.create({

  screenHeadingView: {
    ...CommonStyles.formElement,
    marginTop: 10
  },
  screenHeadingText: {
    fontSize: 25,
    color: "#303030",
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "Sansation",
    paddingTop: 75,
  },
  secondaccounttext: { 
    fontFamily: 'Sansation',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 22,
    textAlign: 'center',
    color: '#767676',
    marginBottom: 25
  },
  zoom: {
    backgroundColor: "#CCEEE1",
    borderRadius: 7,
    height: 55,
    display: 'flex',
    alignItems: 'center',
    // alignContent: 'center',
    // justifyContent: 'center',
    width: "90%",
    marginHorizontal: "5%",
    flexDirection:'row',
    
  },
  zoomimg: {
    // height: 35,
    // width: 35,
    justifyContent:'flex-end',
    alignContent:'flex-end',
    
    
  },
  socialText: {
    fontFamily: "Sansation",
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: "center",
    color: '#000000',
    paddingLeft: 15,
    // borderWidth:1
  },
  row:{flexDirection:'row',marginHorizontal:20,borderRadius:7,alignItems:'center',paddingHorizontal:10,backgroundColor:'#CCEEE1',height:55,marginBottom:15,justifyContent:'space-between'},
  txt:{fontWeight:'bold',fontFamily: "Sansation",fontStyle: 'normal',fontWeight: 'bold',fontSize: 16,alignItems: "center",color: '#000000'},
  img:{width:35,height:35},
});

export default styles;

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
    // display: 'flex',
    // alignItems: 'flex-start',
    // alignContent: 'space-between',
    // justifyContent: 'center',
    width: "90%",
    marginHorizontal: "5%",
  },
  zoomimg: {
    // height: 35,
    // width: 35
  },
  socialText: {
    fontFamily: "Sansation",
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: "center",
    color: '#000000',
    paddingLeft: 15
  }
});

export default styles;

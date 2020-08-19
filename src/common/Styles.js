import { StyleSheet } from 'react-native';
import Constants from './Constants.json';

const Styles = StyleSheet.create({
  formElement: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    marginHorizontal: "5%",
  },
  phoneNoFormStyle: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    marginHorizontal: "5%",
  },
  formTextStyle: {
    fontFamily: "Sansation_Bold",
    fontStyle: "normal",
    fontWeight: "bold",
  },
  registerScreensSubtitleTextHeadingStyle: {
    color: Constants.AppColors.Font.Heading,
    fontFamily: 'Sansation', 
    fontStyle: "normal",
    fontSize: 20
  },
  formTextInputStyle: {
    backgroundColor: '#FAFBFD',
    flex: 1,
    marginTop: 10,
    borderRadius: 6,
    shadowColor:"#0D000000",
    elevation: 4,
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "left",
    textAlignVertical: "center",
  },
  labelTextStyleBlack: {
    fontSize:16,
    fontWeight:'bold',
    fontFamily:'Sansation',
  }
});

export default Styles;

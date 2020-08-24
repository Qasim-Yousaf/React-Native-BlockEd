import { StyleSheet } from 'react-native';
import Constants from './Constants.json';

const Styles = StyleSheet.create({
  formElement: {
    flexDirection: "row",
    justifyContent: "center",
  },
  Input: {
    backgroundColor: '#ffffff',
    borderRadius: 6,
    width: "90%",
    marginHorizontal: "5%",
    marginBottom:10,
    paddingLeft: 10
  },
  Inputupload: {
    flexDirection: "row",
    backgroundColor: '#ffffff',
    borderRadius: 6,
    width: "90%",
    marginHorizontal: "5%",
    marginBottom:10,
    paddingLeft: 10,
    padding:15
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
  },
  submit_btn:{
    flexDirection: "row",
    justifyContent: "center", 
    width: "88%", 
    height: 50, 
    marginLeft: "6%",
    marginRight: "6%",
    marginBottom: 20,
    marginTop: 20
  },
  SignUpTeacherDocsUploadText: {  
    fontFamily: 'Sansation',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 17,
    display: 'flex',
    alignItems: 'center',
    color: '#222222',
    width: "90%",
    marginHorizontal: "5%",
    marginBottom: 30
  }
});

export default Styles;

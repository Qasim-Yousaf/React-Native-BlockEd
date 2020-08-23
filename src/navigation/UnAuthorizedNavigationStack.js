import React from "react";
import { createStackNavigator, } from '@react-navigation/stack';
import CreateAccountOrSignIn from "../screens/CreateAccountOrSignIn/CreateAccountOrSignIn";
import CreateAccount from "../screens/CreateAccount/CreateAccount";
import CreateAccountasStudent from "../screens/CreateAccount/CreateAccountasStudent";


const { Navigator, Screen } = createStackNavigator();

export default class UnAuthorizedNavigationStack extends React.Component {
  render() {
    return <Navigator screenOptions={{ headerShown: false }} initialRouteName="CreateAccountOrSignIn">
      <Screen name="CreateAccountOrSignIn" component={CreateAccountOrSignIn} />
      <Screen name="CreateAccount" component={CreateAccount} />
      <Screen name="CreateAccountasStudent" component={CreateAccountasStudent} />
      {/* <Screen name="SocialAuthStepOneScreen" component={SocialAuthStepOneScreen} />
      <Screen name="SocialAuthStepTwoScreen" component={SocialAuthStepTwoScreen} />
      <Screen name="SignUpScreen" component={SignUpScreen} />
      <Screen name="SellerFormRegisterScreen" component={SellerFormRegisterScreen} />
      <Screen name={"PhoneVerificationScreen"} component={PhoneVerificationScreen} />
      <Screen name={Constants.AppScreens.BusinessInfo} component={BusinessInfo} />
      <Screen name={Constants.AppScreens.QuestionnaireStepOne} component={QuestionnaireStepOne} />
      <Screen name={Constants.AppScreens.QuestionnaireStepTwo} component={QuestionnaireStepTwo} /> */}
      {/* ITS KEPT HERE ONLY FOR TESTING PURPOSES, AFTER TESTING IT SHOULD BE MOVED TO "AuthorizedNavigationStack" */}
    </Navigator>;
  }
}
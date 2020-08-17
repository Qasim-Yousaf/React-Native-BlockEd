import React from 'react';
import SplashScreen from "react-native-splash-screen";

export default class AppNavigator extends React.Component{
    componentDidMount() {
        SplashScreen.hide();
    }
}

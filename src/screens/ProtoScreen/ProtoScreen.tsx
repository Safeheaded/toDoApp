import React, { Component } from 'react';
import { NavigationState, NavigationParams, DrawerActions, NavigationScreenProp, NavigationDrawerScreenOptions } from 'react-navigation';


interface Props{
    navigation: NavigationScreenProp<NavigationState, NavigationParams>
}

abstract class ProtoScreen extends Component<Props>{

    static navigationOptions: NavigationDrawerScreenOptions = {
        drawerLabel: "",
    }

    abstract render(): JSX.Element;

    sideDrawerHandler = () : void => {
        this.props.navigation.dispatch(DrawerActions.toggleDrawer())
    }

}

export default ProtoScreen;
import React, { Component } from 'react';
import { View, Text } from 'react-native';

import SideDrawerToggleButton from '../../components/UI/SideDrawerToggleButton/SideDrawerToggleButton';
import { DrawerActions, NavigationToggleDrawerAction } from 'react-navigation';
 
// FIXME:
interface props{
    navigation: {
        dispatch: (NavigationToggleDrawerAction: any) => void
    }
}

class AddTodoScreen extends Component<props>{

    static navigationOptions = {
        drawerLabel: "Dodaj zadanie"
    }

    sideDrawerHandler = () => {
        this.props.navigation.dispatch(DrawerActions.toggleDrawer())
    }

    render(){
        return (
            <View>
                <SideDrawerToggleButton onToggle={this.sideDrawerHandler} />
                <Text>
                    AddTodo Screen
                </Text>
            </View>
        );
    }

}

export default AddTodoScreen;
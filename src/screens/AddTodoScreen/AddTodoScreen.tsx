import React, { Component } from 'react';
import { View, Text } from 'react-native';

import SideDrawerToggleButton from '../../components/UI/SideDrawerToggleButton/SideDrawerToggleButton';
import { DrawerActions, NavigationToggleDrawerAction, NavigationDrawerScreenOptions } from 'react-navigation';
import ProtoScreen from '../ProtoScreen/ProtoScreen';

export class AddTodoScreen extends ProtoScreen{

    static navigationOptions: NavigationDrawerScreenOptions = {
        drawerLabel: "Dodaj zadanie",
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
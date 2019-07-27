import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerActions, NavigationDrawerScreenOptions } from 'react-navigation';

import SideDrawerToggleButton from '../../components/UI/SideDrawerToggleButton/SideDrawerToggleButton';
import ProtoScreen from '../ProtoScreen/ProtoScreen';

class TodoListScreen extends ProtoScreen{

    static navigationOptions: NavigationDrawerScreenOptions = {
        drawerLabel: "Lista zadań"
    }

    render(){
        return (
            <View>
                <SideDrawerToggleButton onToggle={this.sideDrawerHandler}/>
                <Text>
                    TodoList screen
                </Text>
            </View>
        );
    }

}

export default TodoListScreen;
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { DrawerActions } from 'react-navigation';

import SideDrawerToggleButton from 'UI/SideDrawerToggleButton/SideDrawerToggleButton';

// FIXME:
interface props{
    navigation: {
        dispatch: (NavigationToggleDrawerAction: any) => void
    }
}

class TodoListScreen extends Component<props>{

    static navigationOptions = {
        drawerLabel: "Lista zadań"
    }

    sideDrawerHandler = () => {
        this.props.navigation.dispatch(DrawerActions.toggleDrawer())
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
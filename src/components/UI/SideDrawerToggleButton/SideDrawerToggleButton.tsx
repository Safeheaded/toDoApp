import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    onToggle: () => void
}

const sideDrawerToggleButton = (props: Props) => {

    return (
        <TouchableOpacity onPress={props.onToggle}>
            <Icon name="md-menu" size={35}/>
        </TouchableOpacity>
    );

}

export default sideDrawerToggleButton;
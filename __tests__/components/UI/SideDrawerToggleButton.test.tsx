import React from 'react';
import {shallow} from 'enzyme';
import SideDrawerToggleButton from '../../../src/components/UI/SideDrawerToggleButton/SideDrawerToggleButton'

describe("Rendering", () => {
    it("Should match to snapshot", () => {
        const component = shallow(<SideDrawerToggleButton onToggle={() => {}} />);
        expect(component).toMatchSnapshot();
    })
});
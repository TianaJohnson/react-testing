import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header Component', () => {

    it('Should render without errors', () => {
        const component = shallow(<Header />);
        console.log(component.debug());
        const wrapper = component.find('.headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        const component = shallow(<Header />);
        console.log(component.debug());
        const logo = component.find('.logoImg');
        expect(logo.length).toBe(1);
    })

})


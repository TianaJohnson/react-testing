import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from './../../../Utils';
import Header from './Header';

//component is shallow render
const setUp = (props={}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}

describe('Header Component', () => {

    // before each test, run setUp.
    let component;
    beforeEach(() => {
        component = setUp();
    })

    it('Should render without errors', () => {       
        const wrapper = findByTestAttr(component, 'headerComponent');
        expect(wrapper.length).toBe(1);
    });

    it('Should render a logo', () => {
        // console.log(component.debug());
        const logo = component.find('.logoImg');
        expect(logo.length).toBe(1);
    });

});


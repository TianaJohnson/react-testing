import React from 'react';
import { shallow } from 'enzyme';
import Headline from './Headline';

import { findByTestAttr } from './../../../../Utils/index';

const setUp = (props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
}


describe('Headline Component', () => {

    describe('Have props', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            wrapper = setUp(props);
        });

        it('Should render without errors', () => {
            const component = findByTestAttr(wrapper, 'HeadlineComponent' );
            expect(component.length).toBe(1);
        })

    });

    describe('Have NO props', () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setUp(); 
        })
    });
});
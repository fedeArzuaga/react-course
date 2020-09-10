import React from 'react';
import '@testing-library/jest-dom';
import CounterApp from '../CounterApp';
import { shallow } from 'enzyme';

describe( 'Tests on CounterApp', () => {

    let wrapper = shallow( <CounterApp /> );

    beforeEach( () => {

        wrapper = shallow( <CounterApp /> );

    })

    test( 'should to show CounterApp succesfully', () => {

        const value = 20;
        expect( wrapper ).toMatchSnapshot();

    });

    test('should to be 10 the default value on component', () => {
        
        const value = 10;
        const defaultValue = parseInt(wrapper.find('h2').text());
        expect(value).toBe(defaultValue);

    });

    test('should to increment the value with the + button', () => {

        wrapper.find('button').at(2).simulate('click');
        const value = wrapper.find('h2').text().trim();
        expect( value ).toBe('11');

    });

    test('should to decrement the value with the - button', () => {

        wrapper.find('button').at(0).simulate('click');
        const value = wrapper.find('h2').text().trim();
        expect( value ).toBe('9');

    });

    test('should to reset the value with the "reset" button', () => {

        const wrapper = shallow( <CounterApp value={105} /> )

        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(0).simulate('click')
        wrapper.find('button').at(1).simulate('click')

        const counterText = wrapper.find('h2').text().trim();

        expect( counterText ).toBe( '105' );

    });

})
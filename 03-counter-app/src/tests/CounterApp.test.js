import React from 'react';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';
import CounterApp from './../CounterApp';

describe('CounterApp testing process', () => {
    
    test('should show <CounterApp /> correctly', () => {

        const wrapper = shallow( <CounterApp  /> )

        expect( wrapper ).toMatchSnapshot();

    });

    test('should show <CounterApp /> with the "value" value as 100 by default', () => {

        const valueByDefault = 100;
        const wrapper = shallow( <CounterApp value={valueByDefault} /> )

        const valueInComponent = parseInt(wrapper.find('h2').text());

        // console.log( valueInComponent );
        expect( valueByDefault ).toBe( valueInComponent );

    });

});
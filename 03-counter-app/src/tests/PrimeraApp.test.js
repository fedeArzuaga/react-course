import React from 'react'
import { shallow } from 'enzyme';
import '@testing-library/jest-dom'
import PrimeraApp from "../PrimeraApp";

describe('PrimeraApp testing', () => {
    
    // test('should show the message "Salude caramba!"', () => {
        
    //     const greeting = "Salude caramba!";

    //     const { getByText } = render( <PrimeraApp greeting={greeting} /> );

    //     expect( getByText(greeting) ).toBeInTheDocument();

    // });

    test('should show <PrimeraApp /> correctly"', () => {
        
        const wrapper = shallow( <PrimeraApp greeting='Salude caramba!' /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('should show the subtitle sent by props', () => {

        const greeting = "Salude caramba!";
        const wrapper = shallow(
            <PrimeraApp 
                greeting='Salude caramba!'
                subtitle="I'm a subtitle"
            />
        );

        const pText = wrapper.find('p').text();

        // console.log(pText);
        expect( pText ).toBe( "I'm a subtitle" );

    });

});
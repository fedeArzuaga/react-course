import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import PrimeraApp from '../PrimeraApp';
import { shallow } from 'enzyme';

describe('Pruebas en <PrimeraApp />', () => {
    
    test('debe de mostrar <PrimeraApp /> correctamente', () => {
        
        // Creando el sujeto == Constante con el saludo que esperamos
        // const saludo = "Hola, soy Goku";

        // Busca en el componente si se encuentra el texto que estamos mandando llamar (en este caso, saludo)
        // const { getByText } = render( <PrimeraApp saludo={ saludo } /> );

        // Espera en el documento dicho texto
        // expect( getByText(saludo) ).toBeInTheDocument();

        const saludo = "Hola, soy Goku";
        const wrapper = shallow( <PrimeraApp saludo={ saludo } /> );

        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar el subtitulo enviado por props', () => {
        
        const saludo = "Hola, soy Goku";
        const subtitulo = "Soy un subtitulo";
        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        )
                            // Equivalente al querySelector
        const textoParrafo = wrapper.find('p').text();
        
        expect( textoParrafo ).toBe( subtitulo );

    });

});  
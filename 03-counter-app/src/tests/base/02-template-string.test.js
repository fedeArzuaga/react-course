import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {

    test('prueba en el metodo getSaludo', () => {
        
        const name = "Federico";

        const saludo = getSaludo( name );

        expect( saludo ).toBe( `Hola ${name}` );

    })
   
    // getSaludo debe retornar Hola Pepe! si no hay argmuento

    test('probando getSaludo sin argumentos', () => {

        const saludo = getSaludo();

        expect( saludo ).toBe( `Hola Pepe` );

    })

});
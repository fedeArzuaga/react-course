import { retornaArreglo } from '../../base/07-deses-arr';

describe('Destructuring test', () => {

    test('should to return a string and a number', () => {
        
        const [ string, number ] = retornaArreglo();

        // excpect( arr ).toEqual( ['ABC', 123] );

        expect( typeof string ).toBe( 'string' );
        expect( typeof number ).toBe( 'number' );

    })

});
import { returnArray } from "../../base/07-deses-arr";


describe('07-deses-arr.js testing', () => {

    test('should return a string and a number respectively', () => {

        const [letters, numbers] = returnArray();

        expect( letters ).toBe( 'ABC' );
        expect( typeof letters ).toBe( 'string' );

        expect( numbers ).toBe( 123 );
        expect( typeof numbers ).toBe( 'number' );

    });

});
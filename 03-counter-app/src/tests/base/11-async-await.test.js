import { getImagen } from '../../base/11-async-await';

describe( 'Testing width Async/Await and Fetch API', () => {

    test('should to return the image url', async () => {
        
        const url = await getImagen();
        expect( typeof url ).toBe( 'string' );

    });

} );
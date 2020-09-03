import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Promises testing', () => {
    
    test('should return an async heroe', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync(id)
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();

            })

    }); // No se pudo encontrar el héroe

    test('should get an error when the heroe does not exist', ( done ) => {
        
        const id = 10;

        getHeroeByIdAsync(id)
            .catch( error => {

                expect( error ).toBe( "No se pudo encontrar el héroe" );
                done();

            })

    });

});
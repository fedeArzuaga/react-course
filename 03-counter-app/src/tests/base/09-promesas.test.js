import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";


describe('Promises testing', () => {

    test('Should return an async heroe', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {

                expect( heroe ).toBe( heroes[0] );
                done();

            })

    });

    test('Should return an error if the heroe doesn\'t exist', ( done ) => {
        
        const id = 10;
        getHeroeByIdAsync(id)
            .catch( error => {
                expect( error ).toBe( "Sorry, that heroe couldn\'t be found" );
                done();
            })

    });

});
import heroes from '../../data/heroes';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';

describe("Testing on Heores's functions", () => {
    
    test('should return an heroe by id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find( heore => heroe.id === id );

        expect( heroe ).toEqual( heroeData );

    });

    test("should return undefined if heroe doesn't exist", () => {
        
        const id = 10;
        const heroe = getHeroeById(id);

        expect( heroe ).toEqual( undefined );

    });

    test('should return the heroes by owner DC', () => {
        
        const owner = 'DC';
        const heroe = getHeroesByOwner(owner);

        const heroeTesting = heroes.filter( heroe => heroe.owner === owner );

        expect( heroe ).toEqual( heroeTesting );

    });

    test('should return the length of array that contains the Marvel Heroes', () => {
        
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);

        const heroeTesting = heroes.filter( heroe => heroe.owner === owner );

        expect( heroe.length ).toBe( heroeTesting.length );

    });

})

import heroes from "../../data/heroes";
import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";


describe('08-imp-exp testing', () => {

    test('should return a heroe by ID', () => {

        const id = 1;
        const heroe = getHeroeById( id );

        const heroeData = heroes.find( heroe => heroe.id === id );

        expect( heroe ).toEqual( heroeData );

    });

    test('should return undefined if heroe doesn\'t exist', () => {

        const id = 10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );

    });

    test('Should return an array with all DC heroes contained inside it', () => {

        const owner = 'DC';
        const dcHeroes = getHeroesByOwner( owner );

        const dcHeroesTest = heroes.filter( heroe => heroe.owner === owner );

        expect( dcHeroes ).toEqual( dcHeroesTest );

    });

    test('Should return an array with all Marvel heroes contained inside it', () => {

        const owner = 'Marvel';
        const marvelHeroes = getHeroesByOwner( owner );

        expect( marvelHeroes.length ).toBe( 2 );

    });

});
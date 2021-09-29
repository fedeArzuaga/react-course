// import { heroes } from './data/heroes';

// Export by default and individuals exports
import heroes from "../data/heroes";


// console.log( heroes );

export const getHeroeById = id => {
    return heroes.find( heroe => heroe.id === id );
}
// console.log( getHeroeById(2) );

export const getHeroeByOwner = owner => {
    return heroes.filter( heroe => heroe.owner === owner );
}
// console.log( getHeroeByOwner('Marvel') );
// console.log( owners );
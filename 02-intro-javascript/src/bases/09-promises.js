import { getHeroeById } from "./bases/08-import-export";

// Promises
// const promise = new Promise( ( resolve, reject ) => {

//     setTimeout( () => {
        
//         // Task
//         const heroe = getHeroeById(2);
//         resolve( heroe );

//     }, 2000)

// });

// promise.then( (heroe) => {
//     console.log('Heroe', heroe);
// })
// .catch( error => console.warn( error ) );

const getHeroeByIdAsync = ( id ) => {
    return new Promise( ( resolve, reject ) => {
        setTimeout( () => {
            
            // Task
            const heroe = getHeroeById( id );

            if ( heroe === undefined ) {
                reject("Sorry, we couldn't find the corresponding heroe");
            } else {
                resolve( heroe );
            }

        }, 2000);
    });
}

getHeroeByIdAsync(10)
    .then( console.log )
    .catch( console.error )
// Array destructuring

const characters = ['Fede', 'Paco', 'Juan'];

const [ , , c3 ] = characters;

// console.log( c3 );

const getArray = () => {
    return ['ABC', 123];
}

const [letters, numbers] = getArray();

// console.log( letters, numbers );

const getAnotherArr = ( value ) => {
    return [ value, () => console.log('Hello World!') ];
}

const [ name, setName ] = getAnotherArr( 'Goku' );

console.log( name );
setName();
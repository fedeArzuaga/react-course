

const personajes = ['Goku','Vegeta','Trunks'];
const [ , , p3 ] = personajes;
// console.log( p3 );


export const returnArray = () =>{
    return ['ABC', 123];
}

// const [ letras, numeros ] = returnArray(); 
// console.log(letras, numeros);


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const usState = ( valor ) => {
    return [ valor, ()=>{ console.log('Hola Mundo') } ];
}

const [ nombre, setNombre ] = usState( 'Goku' );

// console.log( nombre );
setNombre();






// Seccion 3 => Template Strings
// ======================================================================

/* const nombre = 'Fernando';
const apellido = 'Herrera';

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto); */

// ======================================================================
// Seccion 3 => Objetos literales
// ======================================================================

/* const persona = {
    nombre: "Paco",
    apellido: "Rabbane",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 5135431,
        lat: 14.3232,
        long: 32.5842
    }
};

const persona2 = persona;
persona2.nombre = "Juancho";

console.log( persona, persona2 ); */

// ======================================================================
// Seccion 3 => Arreglos
// ======================================================================

// const arreglo = new Array();
/* const arreglo = [1,2,3,4];
/* arreglo.push(1)
arreglo.push(2)
arreglo.push(3)
arreglo.push(4) */

/* let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
} ); 

console.log(arreglo, arreglo2, arreglo3); */

// ======================================================================
// Seccion 3 => Funciones
// ======================================================================

/* const saludar = function(nombre){
    return `Hola, ${nombre}`;
} */

// const saludar2 = nombre => `Hola ${nombre}`;

/* console.log(saludar('Gohan'));

const getUsers = () => ({
    uid: 'ABC123',
    username: "papitoriko123"
})

const user = getUsers();
// console.log(user);

// Task
const getUsuarioActivo = nombre => ({
    uid: 'ABC124',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo); */

// ======================================================================
// Seccion 3 => Desectructuracion de objetos
// ======================================================================

/* const persona = {
    nombre: "Tony",
    edad: 45,
    clave: 'Ironman',
    rango: "Maricon"
}; */

// const { nombre, edad, clave } = persona;

// Forma vieja
/* console.log( nombre );
console.log( edad );
console.log( clave ); */

/* const useContext = ({nombre, edad, rango = "Capitan", clave}) => {

    return {
        nombreClave: clave,
        anios: edad,
        latlang: {
            lat: 21513,
            long: 514851
        }
    }

}

const { nombreClave, anios, latlang:{lat, long} } = useContext(persona);

console.log(nombreClave, anios, lat, long); */

// ======================================================================
// Seccion 3 => Desectructuracion de arreglos
// ======================================================================

/* const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , , per3] = personajes;

console.log(per3)

const retornaArreglo = () => {
    return['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

// Tarea

function useState( valor ){
    return [ valor, function(){ console.log("Hola mundo!") } ];
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre(); */

// ======================================================================
// Seccion 3 => Import, export y funciones comunes de arreglos
// ======================================================================

// import { heroes } from './data/heroes';

// const getHeroeById = (id) => {
//     return heroes.find( el => el.id === id );
// }

// const getHeroeByOwner = owner => {
//     return heroes.filter( el => el.owner === owner );
// }

// console.log(getHeroeById(1));
// console.log(getHeroeByOwner('DC'));
// console.log(owners);

// ======================================================================
// Seccion 3 => Promesas
// ======================================================================

// const promesa = new Promise( (resolve, reject) => {  
//     setTimeout( () => {
//         const heroe = getHeroeById(2);
//         console.log(heroe);
//         resolve( heroe );
//         reject( 'No se pudo encontrar el héroe' );
//     }, 2000 )
// })

// promesa
//     .then( ( heroe ) => {
//         console.log('Heroe recibido: ', heroe);
//     } )
//     .catch( ( error ) => {
//         console.error( error )
//     } )

// const getHeroeByIdAsync = (id) => {

//     return new Promise( (resolve, reject) => {  
//         setTimeout( () => {
//             const heroe = getHeroeById(id);
            
//             if( heroe ) {
//                 resolve( heroe );
//             }else{
//                 reject( 'No se pudo encontrar el héroe' );
//             }

//         }, 2000 )
//     })

// }

// getHeroeByIdAsync(5)
//     .then( console.log )
//     .catch( console.error )

// ======================================================================
// Seccion 3 => Fetch API
// ======================================================================

// const apiKey = 'l8Th4RQ5OLAN5qMc4EViivT4NWPFMOiX';

// const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then( resp => resp.json() )
//     .then( ({data}) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;
//         document.body.appendChild(img);

//     } )
//     .catch( error => {
//         console.error(error);
//     } )

// ======================================================================
// Seccion 3 => Fetch API
// ======================================================================

const getImage = async () => {

    const apiKey = 'l8Th4RQ5OLAN5qMc4EViivT4NWPFMOiX';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const data = await resp.json();
    const { url } = data.data.images.original;

    let image = document.createElement('img');
    image.src = url;
    document.body.appendChild(image);

}

getImage();
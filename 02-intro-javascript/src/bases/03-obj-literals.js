// Object literals

const user = {
    name: "Federico",
    lastname: "Arzuaga",
    age: 25,
    address: {
        city: 'Montevideo',
        zip_code: 11600
    }
}

console.log( user );

// Clone an object using spread operator
const user2 = { ...user };

console.log( user2 );
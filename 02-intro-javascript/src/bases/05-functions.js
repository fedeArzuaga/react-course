// Functions

const greeting = function ( name ) {
    return `Hello, ${name}!`;
}

const greeting2 = name => `Hello, ${name}!`;

const getUser = () => {
    return {
        uid: 'ABC123',
        username: 'El_Dani_del_CAP'
    }
}

// console.log(greeting('Federico'));
console.log( greeting('Federico') );
console.log( greeting2('Federico') );
console.log( getUser() );

// Task
const getActiveUser = name => ({
    uid: 'ABC567',
    username: name
});

const activeUser = getActiveUser('Federico');
console.log(activeUser);
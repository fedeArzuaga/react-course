// Template strings

const name = "Federico";
const lastname = "Arzuaga";

/* Old way */
// const fullName = name + lastname;

/* New way */
const fullName = `${name} ${lastname}`;

console.log(fullName);

function getGreeting( name ) {
    return `Hello ${name}!`;
}

console.log( `This is a simple text... ${ getGreeting('Federico') }` )
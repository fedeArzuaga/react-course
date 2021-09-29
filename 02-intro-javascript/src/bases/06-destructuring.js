// Destructiring

const person = {
    name: 'Fede',
    age: 25,
    key: 'Fefito',
};

const { name: otherName, age, key } = person;

const getUser = ({ name: otherName, age, key, range = 'Developer' }) => {

    return {
        keyName: key,
        age: age,
        props: {
            lat: '3423412',
            long: '12423'
        }
    }

}

// console.log( otherName );
// console.log( age );
// console.log( key );

const user = getUser( person );
const { keyName, age: otherAge, props: {lat, long} } = user;

console.log( keyName, otherAge, lat, long );
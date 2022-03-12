import '@testing-library/jest-dom';
import { getActiveUser, getUser } from '../../base/05-funciones';

describe('05-funciones testing', () => {

    test('getUser should return an object', () => {

        const userObj = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect( user ).toEqual( userObj );

    });

    test('getActiveUser should return an object with the name inside it passed as an argument', () => {

        const name = "fefo_96";

        const userObj = {
            uid: 'ABC567',
            username: name
        };

        const user = getActiveUser(name);

        expect(user).toEqual(userObj);

    });

});
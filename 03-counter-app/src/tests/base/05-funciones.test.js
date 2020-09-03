import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas de funciones', () => {

    test('should return an object', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        expect(user).toEqual( userTest );

    })

    test('should return an user object, working with parameters', () => {

        let userName = "fefo_1996";

        const userTest = {
            uid: 'ABC567',
            username: userName
        }

        const realUser = getUsuarioActivo(userName);

        expect( realUser ).toEqual(userTest);

    })
    
    

})
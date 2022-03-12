import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";


describe('template strings methods testing', () => {

    test('Should return "Hola " + argument', () => {

        const name = "Federico";

        const greeting = getSaludo(name);

        expect(greeting).toBe('Hola ' + name);

    });

    //getSaludo should return 'Carlos' if there's not agruments on its call
    test('Should return "Hola Carlos" if there\'s not agruments on its call', () => {

        const greeting = getSaludo();

        expect(greeting).toBe('Hola Carlos');

    });

});
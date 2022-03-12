
describe('demo.test.js testing', () => {

    test('should be equal both strings', () => {
    
        //1. Initialization
        const message = 'HelloWorld!';
    
        //2. Estimulo
        const message2 = 'HelloWorld!';
    
        //3. Watch behaivior
        expect( message ).toBe( message2 );
    
    });

});
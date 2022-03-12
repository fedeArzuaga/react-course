import { getImagen } from "../../base/11-async-await";


describe('Testing Async-Await and fetch', () => {
    
    test('should return the url of the image', async () => {
        
        const url = await getImagen();

        expect(url.includes("https://")).toBe(true);

    });

});
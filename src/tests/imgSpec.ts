import fs from 'fs';
import resizeImage from '../utility/imgprocessing';

const inputImage = `./images/full/fjord.jpg`;
const outputImage = `./images/thumbs/fjord-thumb.jpg`;
const widthImage = 200;
const heightImage = 200;
//  Testing image processing to resize image
describe('Test Image Pocessing', () => {
    it('Test for fjord image', async () => {
        await resizeImage(inputImage, widthImage, heightImage, outputImage);
        expect(fs.existsSync(outputImage)).toBeTruthy();
    });
});

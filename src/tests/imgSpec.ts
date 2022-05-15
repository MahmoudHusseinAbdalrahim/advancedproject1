import fs from 'fs';
import resizeImage from '../utility/imgprocessing';

//   Function to check if a file already exists in the given path or not
async function checkFileExists(outputImage: fs.PathLike): Promise<boolean> {
    try {
        await fs.promises.access(outputImage, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

const inputImage = `./images/full/fjord.jpg`;
const outputImage = `./images/thumbs/fjord-thumb.jpg`;
const widthImage = 200;
const heightImage = 200;
//  Testing image processing to resize image
describe('Test Image Pocessing', (): void => {
    it('Test for fjord image', async (): Promise<void> => {
        await resizeImage(inputImage, widthImage, heightImage, outputImage);
        expect(await checkFileExists(outputImage)).toBeTruthy();
    });
});

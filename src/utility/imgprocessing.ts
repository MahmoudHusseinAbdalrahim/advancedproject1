//  Import npm sharp module to resize images
import sharp from 'sharp';

//  Asyncronous Function to resize input image and return it as output image
const resizeImage = async (
    inputImage: string,
    widthImage: number,
    heightImage: number,
    outputImage: string
): Promise<void> => {
    await sharp(inputImage)
        .resize({
            width: widthImage,
            height: heightImage,
            fit: 'contain',
            position: 'center',
            background: { r: 255, g: 255, b: 255, alpha: 0.5 },
        })
        .toFile(outputImage)
        .then(() => console.log('done...'))
        .catch((error: string) => console.log('error', error));
};

export default resizeImage;

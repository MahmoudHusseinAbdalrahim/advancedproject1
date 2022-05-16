import express from 'express';
import path from 'path';
import fs from 'fs';
import resizeImage from '../../utility/imgprocessing';

const img = express.Router();

//   Function to check if a file already exists in the given path or not
async function checkFileExists(outputImage: fs.PathLike): Promise<boolean> {
    try {
        await fs.promises.access(outputImage, fs.constants.F_OK);
        return true;
    } catch {
        return false;
    }
}

//  Get method that apply to resize image
img.get(
    '/',
    async (req: express.Request, res: express.Response): Promise<void> => {
        const inputImage = `./images/full/${req.query.filename}.jpg`;
        const outputImage = `./images/thumbs/${req.query.filename}${req.query.width}-${req.query.height}.jpg`;
        const widthImage: number = Number(req.query.width as string);
        const heightImage: number = Number(req.query.height as string);
        if (
            Number.isNaN(Number(widthImage)) ||
            Number.isNaN(Number(heightImage)) ||
            widthImage <= 0 ||
            heightImage <= 0
        ) {
            res.send('Error,Width or Height or both is not valid number');
        } else if ((await checkFileExists(inputImage)) === false) {
            res.send('Error,The souce image is not exist');
        } else if (
            //   Check if a file already exists in the given path or not
            await checkFileExists(outputImage)
        ) {
            res.sendFile(
                `${req.query.filename}${req.query.width}-${req.query.height}.jpg`,
                {
                    root: path.join(__dirname, '../../../images/thumbs'),
                }
            );
        } else {
            //  Wait the image to resize and get output
            await resizeImage(inputImage, widthImage, heightImage, outputImage);
            res.sendFile(
                `${req.query.filename}${req.query.width}-${req.query.height}.jpg`,
                {
                    root: path.join(__dirname, '../../../images/thumbs'),
                }
            );
        }
    }
);

export default img;

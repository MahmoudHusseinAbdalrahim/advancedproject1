import express from 'express';
import path from 'path';
import NodeCache from 'node-cache';
import fs from 'fs';
import resizeImage from '../../utility/imgprocessing';

const img = express.Router();
//  Create new Node cache to store resized image in it
const myCache = new NodeCache();

//  Get method that apply to resize image
img.get('/', async (req, res): Promise<void> => {
    const inputImage = `./images/full/${req.query.filename}.jpg`;
    const outputImage = `./images/thumbs/${req.query.filename}${req.query.width}-${req.query.height}.jpg`;
    const widthImage: number = Number(req.query.width as string);
    const heightImage: number = Number(req.query.height as string);

    if (
        myCache.get('filename') === req.query.filename &&
        myCache.get('width') === req.query.width &&
        myCache.get('height') === req.query.height &&
        //   Check if a file already exists in the given path or not
        fs.existsSync(outputImage)
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
        //  Set values in the node cache
        myCache.set('filename', req.query.filename);
        myCache.set('width', req.query.width);
        myCache.set('height', req.query.height);
    }
});

export default img;

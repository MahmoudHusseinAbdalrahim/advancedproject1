'use strict';
var __awaiter =
    (this && this.__awaiter) ||
    function (thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P
                ? value
                : new P(function (resolve) {
                      resolve(value);
                  });
        }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator['throw'](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done
                    ? resolve(result.value)
                    : adopt(result.value).then(fulfilled, rejected);
            }
            step(
                (generator = generator.apply(thisArg, _arguments || [])).next()
            );
        });
    };
var __importDefault =
    (this && this.__importDefault) ||
    function (mod) {
        return mod && mod.__esModule ? mod : { default: mod };
    };
Object.defineProperty(exports, '__esModule', { value: true });
const express_1 = __importDefault(require('express'));
const path_1 = __importDefault(require('path'));
const sharp_1 = __importDefault(require('sharp'));
const node_cache_1 = __importDefault(require('node-cache'));
const fs_1 = __importDefault(require('fs'));
const img = express_1.default.Router();
const myCache = new node_cache_1.default();
const resizeImage = (inputImage, widthImage, heightImage, outputImage) =>
    __awaiter(void 0, void 0, void 0, function* () {
        yield (0, sharp_1.default)(inputImage)
            .resize({
                width: widthImage,
                height: heightImage,
                fit: 'contain',
                position: 'center',
                background: { r: 255, g: 255, b: 255, alpha: 0.5 },
            })
            .toFile(outputImage)
            .catch((error) => console.log('error', error));
    });
img.get('/', (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
        const inputImage = `./images/full/${req.query.filename}.jpg`;
        const outputImage = `./images/thumbs/${req.query.filename}-thumb.jpg`;
        const widthImage = Number(req.query.width);
        const heightImage = Number(req.query.height);
        if (
            myCache.get('filename') === req.query.filename &&
            myCache.get('width') === req.query.width &&
            myCache.get('height') === req.query.height &&
            fs_1.default.existsSync(outputImage)
        ) {
            res.sendFile(`${req.query.filename}-thumb.jpg`, {
                root: path_1.default.join(__dirname, '../../../images/thumbs'),
            });
        } else {
            yield resizeImage(inputImage, widthImage, heightImage, outputImage);
            res.sendFile(`${req.query.filename}-thumb.jpg`, {
                root: path_1.default.join(__dirname, '../../../images/thumbs'),
            });
            myCache.set('filename', req.query.filename);
            myCache.set('width', req.query.width);
            myCache.set('height', req.query.height);
        }
    })
);
exports.default = { img, resizeImage };

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//  Import npm sharp module to resize images
const sharp_1 = __importDefault(require("sharp"));
//  Asyncronous Function to resize input image and return it as output image
const resizeImage = (inputImage, widthImage, heightImage, outputImage) => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, sharp_1.default)(inputImage)
        .resize({
        width: widthImage,
        height: heightImage,
        fit: 'contain',
        position: 'center',
        background: { r: 255, g: 255, b: 255, alpha: 0.5 },
    })
        .toFile(outputImage)
        .then(() => console.log('done...'))
        .catch((error) => console.log('error', error));
});
exports.default = resizeImage;

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
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const imgprocessing_1 = __importDefault(require("../../utility/imgprocessing"));
const img = express_1.default.Router();
//   Function to check if a file already exists in the given path or not
function checkFileExists(outputImage) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fs_1.default.promises.access(outputImage, fs_1.default.constants.F_OK);
            return true;
        }
        catch (_a) {
            return false;
        }
    });
}
//  Get method that apply to resize image
img.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const inputImage = `./images/full/${req.query.filename}.jpg`;
    const outputImage = `./images/thumbs/${req.query.filename}${req.query.width}-${req.query.height}.jpg`;
    const widthImage = Number(req.query.width);
    const heightImage = Number(req.query.height);
    if (Number.isNaN(Number(widthImage)) ||
        Number.isNaN(Number(heightImage)) ||
        widthImage <= 0 ||
        heightImage <= 0) {
        res.send('Error,Width or Height or both is not valid number');
    }
    else if ((yield checkFileExists(inputImage)) === false) {
        res.send('Error,The souce image is not exist');
    }
    else if (
    //   Check if a file already exists in the given path or not
    yield checkFileExists(outputImage)) {
        res.sendFile(`${req.query.filename}${req.query.width}-${req.query.height}.jpg`, {
            root: path_1.default.join(__dirname, '../../../images/thumbs'),
        });
    }
    else {
        //  Wait the image to resize and get output
        yield (0, imgprocessing_1.default)(inputImage, widthImage, heightImage, outputImage);
        res.sendFile(`${req.query.filename}${req.query.width}-${req.query.height}.jpg`, {
            root: path_1.default.join(__dirname, '../../../images/thumbs'),
        });
    }
}));
exports.default = img;

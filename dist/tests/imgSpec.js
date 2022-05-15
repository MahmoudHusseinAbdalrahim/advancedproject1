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
const fs_1 = __importDefault(require('fs'));
const img_1 = __importDefault(require('../routes/api/img'));
const inputImage = `./images/full/fjord.jpg`;
const outputImage = `./images/thumbs/fjord-thumb.jpg`;
const widthImage = 200;
const heightImage = 200;
describe('Test Image Pocessing', () => {
    it('Test for fjord image', () =>
        __awaiter(void 0, void 0, void 0, function* () {
            yield img_1.default.resizeImage(
                inputImage,
                widthImage,
                heightImage,
                outputImage
            );
            expect(fs_1.default.existsSync(outputImage)).toBeTruthy();
        }));
});

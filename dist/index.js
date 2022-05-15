"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
//  Create express object
const app = (0, express_1.default)();
const port = 3000;
//  Get method send response connect to ensure server work
app.get('/api', (req, res) => {
    res.send('CONNECTED');
});
app.listen(port, () => {
    console.log(`Server started at localhost: ${port}`);
});
//  Using routes
app.use('/api', index_1.default);
exports.default = app;

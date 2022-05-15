import express from 'express';
import img from './api/img';

//  Create router object
const routes = express.Router();
routes.use('/images', img);

export default routes;

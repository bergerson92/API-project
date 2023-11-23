import express from 'express';
import images from './api/images';
import test from './api/test';
import path from 'path';
import imageList from './api/imageList';
import { appendFile } from 'fs';
const routes = express.Router();

// needed to run /api
routes.get('/', (req, res) => {
    res.send("main api route");
});

routes.use('/images', images);

routes.get('/imageList', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public', 'imageList.html'))
});

routes.use('/test', test);

export default routes;
import express from 'express';
import images from './api/images';
import path from 'path';
import fs from 'fs/promises';
const routes = express.Router();

// needed to run /api
routes.get('/', (req, res) => {
    res.send("main api route");
});

routes.use('/images', images);

// Create an API endpoint to get the list of filenames
routes.get('/images/list', async (req, res) => {
    try {
        const fullFolderPath = path.join(__dirname, '../../assets/thumb');
        const files = await fs.readdir(fullFolderPath);

        const filteredFiles = files.filter(file => !file.startsWith('.'));

        const filenames = filteredFiles.map(file => path.parse(file).name);
        res.json(filenames);

    } catch (error) {
        console.error('Error reading full folder:', error);
        res.status(500).send('Internal Server Error');
    }
});

export default routes;
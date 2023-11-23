import express from 'express';
import path from 'path';
import fs from 'fs';

const imageList = express.Router();

imageList.get('/', (req, res) => {
    const thumbDirectory = path.join(__dirname, '../assets/thumb');

    fs.readdir(thumbDirectory, (err, files) => {
        if (err) {
            console.error('Error reading thumb directory:', err);
            return res.status(500).send('Internal Server Error');
        }

        const imageFiles = files.filter(file => /\.(jpg)$/i.test(file));
        const imageUrls = imageFiles.map(file => `/api/images/${file}`);

        res.json({ images: imageUrls });
    });
});

export default imageList;

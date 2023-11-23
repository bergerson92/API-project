import express from 'express';
import { resizeImage } from '../../processing/imageProcessor';
import fs from 'fs/promises';
import path from 'path';
//import imageList from './imageList';
import cache from 'memory-cache';

const images = express.Router();

images.get('/', async (req, res) => {
    // Extract filename, width, and height from query parameters
    const { filename, width: widthStr, height: heightStr } = req.query;

    // Check if filename, width, and height are provided
    if (!filename || !widthStr || !heightStr) {
        // If parameters are missing, return a message
        res.status(200).send("Please provide filename, width, and height parameters.");
        return;
    }

    // Set default values or handle missing parameters as needed
    const fileName = filename ? String(filename) : 'fjord';
    const inputDirectory = path.join(__dirname, '../../../assets/full/');
    const outputDirectory = path.join(__dirname, '../../../assets/thumb/');

    // Provide default values for width and height, or use parseInt only if the values are present
    const width = widthStr ? parseInt(String(widthStr), 10) : 200;
    const height = heightStr ? parseInt(String(heightStr), 10) : 200;

    const inputPath = path.join(inputDirectory, `${fileName}.jpg`);
    const outputFileName = `${fileName}-resized-${width}x${height}.jpg`;
    const outputPath = path.join(outputDirectory, outputFileName);

    try {
        if (Number.isNaN(width) || Number.isNaN(height)) {
            throw new Error('Invalid width or height');
        }

        // Check if the image is already in the cache
        const cachedImage = cache.get(outputPath);

        if (cachedImage) {
            console.log('Image found in cache. Sending cached image.');
            // Send the cached image as a response
            return res.sendFile(cachedImage);
        }

        // Check if the input file exists
        const fileExists = await fs.access(inputPath).then(() => true).catch(() => false);

        if (!fileExists) {
            // If the input file is missing, send a response with a 200 status and a message
            res.status(200).send('No images available.');
            return;
        }

        //console.log('Processing image:', fileName, 'with dimensions:', width, 'x', height);

        await resizeImage(inputPath, outputPath, { width, height });

        //console.log('Image processed successfully. Sending file:', outputPath);


        // Send the resized image as a response
        res.sendFile(outputPath);
    } catch (error) {
        console.error('Image processing error:', error);
        res.status(500).send('Internal Server Error');
    }
});

//images.use('/list', imageList);

export default images;

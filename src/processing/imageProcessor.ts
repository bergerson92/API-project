// modules/imageProcessor.ts
import sharp from 'sharp';

interface ResizeOptions {
    width?: number;
    height?: number;
}

export async function resizeImage(inputPath: string, outputPath: string, options: ResizeOptions): Promise<void> {
    try {
        await sharp(inputPath)
            .resize(options.width, options.height)
            .toFile(outputPath);
        console.log('Image resized successfully!');
    } catch (error) {
        console.error('Error resizing image:', error);
        throw error;
    }
}

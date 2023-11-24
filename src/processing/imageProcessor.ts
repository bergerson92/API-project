import sharp from 'sharp';

interface ResizeOptions {
    width?: number;
    height?: number;
}

// Using sharp to resize the images
export async function resizeImage(inputPath: string, outputPath: string, options: ResizeOptions): Promise<void> {
    try {
        await sharp(inputPath)
            .resize(options.width, options.height)
            .toFile(outputPath);
    } catch (error) {
        console.error('Error resizing image:', error);
        throw error;
    }
}

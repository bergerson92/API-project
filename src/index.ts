import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();
const port = 3000;


app.use('/api', routes);

// Serve static assets
app.use(express.static(path.join(__dirname, '../public')));

// Serve static files from the 'assets' folder
app.use('/assets', express.static(path.join(__dirname, '../assets')));

// Define routes for different HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// start the express server
app.listen(port, () => {
    console.log('server started at http://localhost:${port}');
});

export default app;
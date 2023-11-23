import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();
const port = 3000;

//app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', routes);

// not needed anymore due to static
//app.get('/', (req, res) => {
//    res.send('Welcome to the API!');
//});

// Serve static assets
app.use(express.static(path.join(__dirname, '../public')));

// Define routes for different HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// start the express server
app.listen(port, () => {
    console.log('server started at http://localhost:${port}');
});

export default app;
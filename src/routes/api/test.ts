import express from 'express';
const test = express.Router();

test.get('/', (req, res) => {
    res.send('test route');
});

export default test;
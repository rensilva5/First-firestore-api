import express from 'express';

const app = express.json();
const PORT = 3002;

// put our routes here
app.get('/', (req, res) => {
    res.send('Express is working!');
})
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT} ...`);
});
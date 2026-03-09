import express from 'express';
const app = express();

app.use(express.static('assets'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.sendFile('home.html', { root: 'assets/html' });
});


app.listen(8000, () => {
    console.log('Server is running on http://localhost:8000');
});

app.post('/api/user', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.json({ message: `Hello, ${name}!` });
    } else {
        res.status(400).json({ error: 'Name is required' });
    }
});
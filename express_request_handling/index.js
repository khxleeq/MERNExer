const express = require('express');
const app = express();
app.listen(5000);

app.get('/', (req, res) => res.send('Hello, my name is Khaleeq!'));

let names = ['Khaleeq', 'Faizaan', 'Sky', 'Dale', 'Bob'];

app.get('/getAll', (req, res) => res.send(names));

app.get('/get/:id', (req, res) => res.send(names[req.params.id]));

app.get('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

app.get('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

app.post('/replace/:index', (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
});
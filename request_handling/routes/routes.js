const router = require('express').Router();

let names = ['JH', 'Chris', 'Rhys', 'Dale', 'Bob'];

router.get('/', (req, res) => res.send('Hello, my name is JH!'));

router.get('/getAll', (req, res) => res.send(names));

router.get('/get/:id', (req, res) => res.send(names[req.params.id]));

router.delete('/delete/:id', (req, res) => {
    res.send(names.splice(req.params.id, 1));
});

router.post('/create', (req, res) => {
    const name = req.body.name;
    names.push(name);
    res.status(201).send(`${name} added successfully`);
});

router.post('/replace/:index', (req, res) => {
    const name = req.query.name;
    const index = req.params.index;
    const old = names[index];
    names[index] = name;
    res.status(202).send(`${old} successfully replaced with ${name}`);
});

module.exports = router;
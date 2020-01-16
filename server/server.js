const express = require('express');
const app = express();

require('./config/config');
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.json('Hello World')
});


app.get('/usuario', function (req, res) {
    res.json('Get usuario')
});

app.post('/usuario', function (req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            comentario: 'O nome é necesario'
        })
    } else {
        res.json({
            persona: body
        });
    }


});

app.put('/usuario/:id', function (req, res) {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', function (req, res) {
    res.json('delete usuario');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`escoitando porto: ${PORT}`);
});




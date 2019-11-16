const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const apiRoutes = require('./api/routes');
const connection = require('./database/db');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Oh no! Something broke!');
});

app.use('/', apiRoutes);

app.get('/', (req, res) => {
    res.status(200).sendFile('/index.html');
});

app.set('port', process.env.PORT || 8080);
connection.once('open', () => {
    console.log('connected to database');
    app.listen(app.settings.port, () => {
        console.log(`Listening on port ${app.settings.port}`);
    });
});

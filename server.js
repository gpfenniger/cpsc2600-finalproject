const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const apiRoutes = require('./api/routes');
const errorMiddleware = require('./api/middleware/errors');
const connection = require('./database/db');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(errorMiddleware);
app.use(bodyParser.json());
app.use('/', apiRoutes);

app.set('port', process.env.PORT || 8080);
connection.once('open', () => {
    console.log('connected to database');
    app.listen(app.settings.port, () => {
        console.log(`Listening on port ${app.settings.port}`);
    });
});

'use strict';

const { port, app, appName } = require('./config/bootstrap');

app.get('/', (req, res) => {
    res.render('index', { appName });
});

app.get('*', (req, res) => {
    res.status(404).render('404', { appName });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
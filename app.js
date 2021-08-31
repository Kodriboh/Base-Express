'use strict';

require('./config/global');

const { port, app, appName } = include('/resources/bootstrap/app');

app.get('/', (req, res) => {
    res.render('index', { appName });
});

app.get('*', (req, res) => {
    res.status(404).render('404', { appName });
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
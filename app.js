'use strict';

const { port, app } = require('./config/bootstrap');

app.get('/', (req, res) => {
    res.render('index');
});

app.get('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(port, () => console.log(`Listening on port: ${port}`));
'use strict';

require('./config/global');

const { port, app } = include('/resources/bootstrap/app');

const pageRoutes = include('/routes/web/pageRoutes.js');

app.use(pageRoutes);

app.listen(port, () => console.log(`Listening on port: ${port}`));
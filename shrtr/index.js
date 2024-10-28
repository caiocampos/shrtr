import app from './api/app.js';

const port = process.env.PORT || 5000;
app.config().listen(port, () => console.info(`server started on port ${port}`));

const app = require('./api/app');

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));

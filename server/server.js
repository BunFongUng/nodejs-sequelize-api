require('dotenv').config();

const express = require('express');

const { appMiddleware } = require('./middleware/middleware');

const { studentRoutes } = require('./routes/student.route');

const PORT = process.env.PORT;

const app = express();

appMiddleware(app);

app.use('/api', studentRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});

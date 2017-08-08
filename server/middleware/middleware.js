const bodyParser = require('body-parser');

const morgan = require('morgan');

module.exports = {
    appMiddleware: app => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(morgan('dev'));
    }
};
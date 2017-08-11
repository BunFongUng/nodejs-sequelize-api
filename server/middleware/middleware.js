const bodyParser = require('body-parser');

const morgan = require('morgan');

const cors = require('cors');

module.exports = {
    appMiddleware: app => {
        app.use(bodyParser.json());

        app.use(bodyParser.urlencoded({ extended: true }));

        app.use(cors());

        app.use(morgan('dev'));
    }
};

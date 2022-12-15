module.exports = (app, express) => {
    require('dotenv').config();
    app.use(express.json());
    app.use(require('./routes/student'))
    app.use(require('./routes/subject'))
    require('./database/pg')
}
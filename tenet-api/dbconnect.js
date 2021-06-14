require('dotenv').config()
const pg = require('pg');

const config = {
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'tenet',
    port: 5432,
    ssl: false
};

const DBclient = new pg.Client(config);

DBclient.connect(err => {
    if (err) console.log(err);
    else {
        console.log("DB connection established");
    }
});

module.exports = DBclient;

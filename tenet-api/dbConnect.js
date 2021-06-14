const pg = require('pg');

const config = {
    host: 'localhost',
    user: 'postgres',     
    password: 'a9g277hbbe65',
    database: 'tenet',
    port: 5432,
    ssl: false
};

const DBclient = new pg.Client(config);

DBclient.connect(err => {
    if (err) console.log(err);
    else {
        console.log("DB connectée");
    }
});

module.exports = DBclient;

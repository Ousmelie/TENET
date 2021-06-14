var DBclient = require('../dbconnect');

function createUser(email, password, userType, fullName, birthDate) {
    DBclient.query('INSERT INTO users (email, password, user_type, full_name, birth_date) VALUES ($1, $2, $3, $4, $5)',
        [email, password, userType, fullName, birthDate],
        (error, results) => {
            if (error) {
                console.log("Register User Error? " + error);
            }
        })
}

module.exports = {
    createUser,
}
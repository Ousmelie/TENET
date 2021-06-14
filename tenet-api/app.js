var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require('cors');

const bcrypt = require('bcrypt');
const saltRounds = 10;

var indexRouter = require('./routes/index');
var testAPIRouter = require('./routes/testAPI');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/testAPI', testAPIRouter);


var DBclient = require('./dbconnect');

var users = require('./queries/users');

app.post('/register', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const fullName = req.body.fullName;
    const birthDate = req.body.birthDate;
    const userType = req.body.userType;

    bcrypt.hash(password, saltRounds, (err, hashed) => {
        if (err){
            console.log(err);
        }

        users.createUser(email, hashed, userType, fullName, birthDate);
    });
})

app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    DBclient.query('SELECT * FROM users WHERE email = $1',
        [email],
        (error, results) => {
            if (error) {
                console.log(error);
                res.send({error: error});
            }

            if (results.rows.length>0) {
                bcrypt.compare(password, results.rows[0].password, (err, response) =>{
                    if (response){
                        console.log(results.rows);
                        res.send(results.rows);
                    }else{
                        console.log("Wrong username/password combination")
                        res.send({message: "Wrong username/password combination"});
                    }
                })
            }else{
                console.log("User does not exist")
                res.send({message: "User does not exist"});
            }
        })
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

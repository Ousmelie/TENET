var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var testAPIRouter = require('./routes/testAPI');

const dbUsers = require('./routes/users');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/testAPI', testAPIRouter);



const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tenet',
    password: 'admin',
    port: 5432,
})

// app.get('/users', dbUsers.getUsers)
// app.get('/users/:id', dbUsers.getUserById)
// app.post('/users', dbUsers.createUser)
// app.put('/users/:id', dbUsers.updateUser)
// app.delete('/users/:id', dbUsers.deleteUser)


app.get('/register', (req, res) => {
    console.log("Entered get")
    pool.query('SELECT * FROM user ORDER BY user_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
})

//
// app.post('/register', (req, res) => {
//     const email = req.body.email;
//     const password = req.body.password;
//
//     console.log("----------------");
//     console.log(email);
//     console.log(password);
//
//     users.push([email, password]);
//     console.log(users);
//     res.send(users);
// })



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

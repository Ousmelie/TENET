var express = require('express');
var router = express.Router();
var queries = require("../queries");


router.get('/friend', function(req, res, next) {

    queries.GetUsersFriendsIdByType(2,'difficulte').then( (result) =>{
        for(i=0;i<result.rowCount;i++){
            console.log(result.rows[i])
        }
    });
});
module.exports = router;
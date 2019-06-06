const express = require('express');
const router = express.Router();


const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.selectAll((data) => {      
        var hbsObject = {
            burgers: data
        };
        res.render('index', hbsObject);
    });
});


// Export routes for server.js to use.
module.exports = router;
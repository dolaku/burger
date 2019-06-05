const express = require('express');
const router = express.Router();


const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        // let hbsObject = {
        //     burger: data
        // }
    });
    res.render('index');
});


// Export routes for server.js to use.
module.exports = router;
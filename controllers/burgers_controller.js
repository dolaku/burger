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

router.post('/api/burgers', (req, res) => {
    burger.insertOne([
        req.body.burger_name, req.body.devoured
    ], (result) => {
        res.json({ id: result.id });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    let condition = req.params.id;
    console.log(condition);
});


// Export routes for server.js to use.
module.exports = router;
const express = require('express');

// routing for backend
const router = express.Router();


router.get('/', (req,res) => {
    res.send('Hello world from the router.js')
});

// if user is filling the data and we need to get that data then use POST

router.post('/register', (req,res) => {
    console.log(req.body);
    res.json({message: req.body})
    res.send('Hi sending response from server');
})


module.exports = router;
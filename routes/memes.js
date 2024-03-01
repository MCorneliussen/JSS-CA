var express = require('express');
var router = express.Router();
const memeData = require('../services/memeData');

router.get('/', function (req, res) {
    const searchQuery = req.query.search || '';
    //console.log("Search Query: ", searchQuery);
    let memesToShow = memeData.getMemes();

    if (searchQuery) {
        memesToShow = memesToShow.filter(meme => meme.name.toLowerCase().includes(searchQuery.toLowerCase()));
        //console.log("Filtered Memes: ", memesToShow);
    } 
        res.render('memes', { memes: memesToShow, user: req.user });
});

module.exports = router;
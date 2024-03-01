var express = require('express');
var router = express.Router();
const memeData = require('../services/memeData');

router.get('/:memeId', function (req, res) {
    if (!req.user) {
        res.redirect('/login');
    } else {
        const memeId = parseInt(req.params.memeId);
        const meme = memeData.getMemes().find(m => m.id === memeId);

        if (meme) {
            res.render('meme', { meme: meme, user: req.user });
        } else {
            res.status(404).send('Meme not found');
        }
    }
});

module.exports = router;

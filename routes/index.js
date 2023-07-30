const router = require('express').Router();
const path = require('path');

// this sends the index file to the client
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
 // this sends notes file to client
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

module.exports = router;
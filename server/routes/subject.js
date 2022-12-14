const express = require('express')
const router = express.Router();

router.get('/subject', (req, res) => {
    res.send('Get subjects route called');
})

router.post('/subject', (req, res) => {
    res.send('Post subjects route called')
})

module.exports = router

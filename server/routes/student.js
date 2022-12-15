const express = require('express')
const router = express.Router();

router.get('/student', (req, res) => {
    res.send('Get students route called');
})

router.post('/student', (req, res) => {
    res.send('Post students route called')
})

module.exports = router
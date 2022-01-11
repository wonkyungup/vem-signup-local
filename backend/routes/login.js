const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    console.log(req)
})

router.get('/login/signup', (req, res, next) => {
    res.send('/login/signup')
})

module.exports = router

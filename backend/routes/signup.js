const express = require('express')
const router = express.Router()

/* GET home page. */
router.post('/', (req, res, next) => {
    const email = req.body.email
    const profileName = req.body.profileName
    const password = req.body.password

    console.log(email)
    console.log(profileName)
    console.log(password)

    // mongoDB

    res.send('createAccount')
})

module.exports = router

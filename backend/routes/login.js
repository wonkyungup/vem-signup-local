const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

/* GET home page. */
router.post('/', async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    // mongoDB
    const members = mongoose.model('members')
    if (await isCheckEmail(members, email) != null) {
        // password check
        const config = await isCheckEmail(members, email)
        if (config.password === password) {
            res.send({ msg: 'login', config: config })
        } else {
            res.send({ msg: 'CheckPassword' })
        }
    } else {
        res.send({ msg: 'membershipRequired' })
    }
})

function isCheckEmail (members, email) {
    return new Promise(resolve => {
        members.find({ email: email }, (err, user) => {
            if (err) {
                console.log('email find error')
            }

            try {
                // Find User
                resolve(user[0])
            } catch (err) {
                // Not Fine User
                resolve(null)
            }
        })
    })
}

module.exports = router

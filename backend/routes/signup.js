const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

/* GET home page. */
router.post('/', async (req, res, next) => {
    const email = req.body.email
    const profileName = req.body.profileName
    const password = req.body.password

    // mongoDB
    const members = mongoose.model('members')
    const newUser = new members({
        email: email,
        profileName: profileName,
        password: password
    })

    if (await isCheckEmail(members, email) == null) {
        // check name
        if (await isCheckProfileName(members, profileName) == null) {
            // save
            newUser.save()
                .then(() => {
                    res.send({ msg: 'signup' })
                })
        } else {
            res.send({ msg: 'ChangeProfileName' })
        }
    } else {
        res.send({ msg: 'ChangeEmail' })
    }
})

function isCheckEmail (members, email) {
    return new Promise(resolve => {
        members.find({ email: email }, (err, user) => {
            if (err) {
                console.log('email find error')
            }

            try {
                // duplication email
                resolve(user[0].email)
            } catch (err) {
                // new email
                resolve(null)
            }
        })
    })
}

function isCheckProfileName (members, profileName) {
    return new Promise(resolve => {
        members.find({ profileName: profileName }, (err, user) => {
            if (err) {
                console.log('profileName find error')
            }

            try {
                // duplication profileName
                resolve(user[0].profileName)
            } catch (err) {
                // new profileName
                resolve(null)
            }
        })
    })
}

module.exports = router

import {
    dbCheckEmail,
    dbCheckProfileName,
    dbInsertAccount
} from '../Model/db'
const express = require('express')
const router = express.Router()

const STR_SIGNUP_EMAIL_DUPLICATE = 'signup_email_duplicate'
const STR_SIGNUP_PROFILENAME_DUPLICATE = 'signup_profileName_duplicate'

/* GET home page. */
router.post('/', async (req, res, next) => {
    const email = req.body.email
    const profileName = req.body.profileName
    const password = req.body.password

    // mongoDB
    const dbEmail = await dbCheckEmail(email)
    const dbProfileName = await dbCheckProfileName(profileName)

    if (dbEmail.length > 0) { // Duplicate mail detection
        res.send({ index: 0, content: STR_SIGNUP_EMAIL_DUPLICATE })
    } else if (dbProfileName.length > 0) { // Duplicate profile name detection
        res.send({ index: 0, content: STR_SIGNUP_PROFILENAME_DUPLICATE })
    } else { // Create membership
        await dbInsertAccount(email, profileName, password)
        res.send({ index: 1, content: null })
    }
})

module.exports = router

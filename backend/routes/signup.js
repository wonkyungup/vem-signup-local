import mongodController from '../Model/db'
import { encrypt } from '../assets/security'

const express = require('express')
const router = express.Router()

const STR_SIGNUP_EMAIL_DUPLICATE = 'signup_email_duplicate'
const STR_SIGNUP_PROFILENAME_DUPLICATE = 'signup_profileName_duplicate'

/* GET home page. */
router.post('/', async (req, res, next) => {
    const email = req.body.email
    const profileName = req.body.profileName
    const password = encrypt(req.body.password)

    // mongoDB
    const members = new mongodController()
    const dbEmail = await members.dbCheckEmailSync(email)
    const dbProfileName = await members.dbCheckProfileNameSync(profileName)

    if (dbEmail.length > 0) {
        res.send({ index: 0, content: STR_SIGNUP_EMAIL_DUPLICATE })
    } else if (dbProfileName.length > 0) {
        res.send({ index: 0, content: STR_SIGNUP_PROFILENAME_DUPLICATE })
    } else {
        members.dbInsertAccount(email, profileName, password)
        res.send({ index: 1, content: null })
    }
})

module.exports = router

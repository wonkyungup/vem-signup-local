import mongodController from '../Model/db'
import { encrypt } from '../assets/security'

const express = require('express')
const router = express.Router()

/* GET home page. */
router.post('/', async (req, res, next) => {
    const email = req.body.email
    const password = encrypt(req.body.password)

    // mongoDB
    const members = new mongodController()
    const dbCheckAccount = await members.dbCheckAccountSync(email, password)

    if (dbCheckAccount.length > 0) {
        res.send({ index: 1, content: dbCheckAccount })
    } else {
        res.send({ index: 0, content: null })
    }
})

module.exports = router

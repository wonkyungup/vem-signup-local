import { dbConfirmationMembership } from '../Model/db'
const express = require('express')
const router = express.Router()

/* GET home page. */
router.post('/', async (req, res, next) => {
    const email = req.body.email
    const password = req.body.password

    // mongoDB
    const config = await dbConfirmationMembership(email, password)

    if (config.length > 0) {
        res.send({ index: 1, content: await dbConfirmationMembership(email, password) })
    } else {
        res.send({ index: 0, content: null })
    }
})

module.exports = router

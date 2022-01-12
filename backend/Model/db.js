const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/members'

module.exports = () => {
    mongoose.connect(url, (err, db) => {
        if (err) {
            console.log('signup db connect failed')
        } else {
            mongoose.model('members', new mongoose.Schema({
                seq: Number,
                email: String,
                profileName: String,
                password: String
            }))
        }
    })
}

const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/members'

export function initializeDb () {
    mongoose.connect(url, (err) => {
        if (err) {
            console.log('Connect mongodb failed')
        } else {
            mongoose.model('members', new mongoose.Schema({
                seq: Number,
                email: String,
                profileName: String,
                password: String
            }))
            console.log('Connected mongodb And Set Schema')
        }
    })
}

export function disconnectDb () {
    mongoose.connection.close()
    console.log('Disconnect mongodb')
}

export default class mongodController {
    constructor () {
        this.members = mongoose.model('members')
    }

    dbCheckEmailSync (email) {
        return new Promise(resolve => {
            const _members = this.members
            if (_members) {
                _members.find({ email: email }, (err, userInfo) => {
                    if (err) {
                        console.log('DB check email error')
                        return
                    }
                    resolve(userInfo)
                })
            }
        })
    }

    dbCheckProfileNameSync (profileName) {
        return new Promise(resolve => {
            const _members = this.members
            if (_members) {
                _members.find({ profileName: profileName }, (err, userInfo) => {
                    if (err) {
                        console.log('DB check profile name error')
                        return
                    }
                    resolve(userInfo)
                })
            }
        })
    }

    dbCheckAccountSync (email, password) {
        return new Promise(resolve => {
            const _members = this.members
            if (_members) {
                _members.find({ email: email, password: password }, (err, userInfo) => {
                    if (err) {
                        console.log('DB check account error')
                        return
                    }
                    resolve(userInfo)
                })
            }
        })
    }

    dbInsertAccount (email, profileName, password) {
        const _members = this.members
        if (_members) {
            const account = new _members({
                email: email,
                profileName: profileName,
                password: password
            })

            if (account) {
                account
                    .save()
                    .then(() => {
                        console.log('Membership successful')
                    })
            }
        }
    }
}

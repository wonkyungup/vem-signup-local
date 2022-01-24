// 1. class
// 2. connect + select

const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/members'
let mongoDB = null

export async function dbInitialize () {
    if (mongoDB == null) {
        mongoDB = await dbConnect()
    }
}

function dbConnect () { // connect
    return new Promise(resolve => {
        if (mongoDB == null) {
            mongoose.connect(url, (err, db) => {
                if (err) {
                    console.log('mongoDB connect failed')
                } else {
                    console.log('mongoDB connected')
                    resolve(db)
                }
            })
        } else {
            resolve(mongoDB)
        }
    })
}

function getModel () { // select colletion
    const members = mongoose.model('members')
    if (members) {
        return members
    }
}

export function dbCheckEmail (email) {
    return new Promise(resolve => {
        getModel().find({ email: email }, (err, user) => {
            if (err) {
                console.log('email find error')
            } else {
                if (user) {
                    resolve(user)
                }
            }
        })
    })
}

export function dbCheckProfileName (name) {
    return new Promise(resolve => {
        getModel().find({ profileName: name }, (err, user) => {
            if (err) {
                console.log('profileName find error')
            } else {
                if (user) {
                    resolve(user)
                }
            }
        })
    })
}

export function dbConfirmationMembership (email, password) {
    return new Promise(resolve => {
        getModel().find({ email:email, password: password }, (err, user) => {
            if (err) {
                console.log('dbCheckPassword find error')
            } else {
                if (user) {
                    resolve(user)
                }
            }
        })
    })
}

export function dbInsertAccount (email, name, password) {
    return new Promise(resolve => {
        const model = getModel()
        const newUser = new model({
            email: email,
            profileName: name,
            password: password
        })

        if (newUser) {
            newUser
                .save()
                .then(() => { resolve(1) })
        }
    })
}

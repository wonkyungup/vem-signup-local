const crypto = require('crypto')
const algorithm = 'aes256'
const key = 'password'

export function encrypt (text) {
    const cipher = crypto.createCipher(algorithm, key)
    let encrypted = cipher.update(text, 'utf8', 'hex')
    encrypted += cipher.final('hex')
    return encrypted
}

export function decrypt (text) {
    const decipher = crypto.createDecipher(algorithm, key)
    let decrypted = decipher.update(text, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
}

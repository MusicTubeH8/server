const jwt = require('jsonwebtoken');

module.exports = {
    createToken: function(name, email) {
        return jwt.sign({
            name: name,
            email: email
        }, process.env.JWTTOKEN)
    },
    decodeToken: function(token) {
        let decoded = jwt.verify(token, process.env.JWTTOKEN)
        return decoded
    }
}
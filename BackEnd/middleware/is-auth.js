const { decode } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');

exports.isAuth = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        res.status(401).json({ message: "The Authorization header is not set" })
    }
    const token = authHeader.split(' ')[1]

    const decodedToken = jwt.verify(token, 'happykumarjayswal')
    if (!decodedToken) {
        res.status(302)
        res.json({ message: "Authentication Failure or the token is expired." })
        res.end()
    }
    console.log("Auth Success")
    next();
};
const { json } = require('express/lib/response')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
exports.signup = (req, res, next) => {
    User.findAll({ where: { email: req.body.email } }).then(
        (users) => {
            if (users.length > 0) {
                res.status(401).json({ message: "The user already exists Please try a different user" })
            } else {
                User.create({
                    email: req.body.email,
                    name: req.body.name,
                    password: req.body.password
                }).then((user) => {
                    res.status(200).json({ message: "User Created Succesfully", isAuth: true })
                }).catch((err) => { res.status(401).json({ message: "Couldnt Create User.Try Again" }) })
            }
        }
    )
}


exports.login = (req, res, next) => {
    User.findAll({ where: { email: req.body.email } }).then(
        (users) => {
            user = users[0]
            if (users.length > 0) {
                if (user.password == req.body.password) {
                    res.status(200).json({ message: "Login successfull", token: token, userId: user.id, userName: user.name })
                } else {
                    res.status(401).json({ message: "Incorrect Password.Retry" })
                }
            } else {
                res.status(402).json({ message: "The user does not exist or check your email" })
            }
        }
    )
    const token = jwt.sign({ email: req.body.email, password: req.body.password }, 'happykumarjayswal')

}
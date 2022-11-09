const User = require('../models/user')
const bcrypt = require('bcrypt')

module.exports = {
    login: async(req, res) => {
        const data = await req.body

        const matchEmail = await User.findOne({email: data.email})

        if(matchEmail){
            const check = await bcrypt.compare(data.password, matchEmail.password)

            if (check){
                res.status(200).json({
                    message: "Login success",
                    data: matchEmail
                })
            } else {
                res.status(401).json({"message": "Email or password does not match"})
            }
        } else {
            res.status(401).json({"message": "Email or password does not match"})
        }
    }
}
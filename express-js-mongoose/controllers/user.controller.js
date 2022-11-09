const User = require('../models/user')

const bcrypt = require('bcrypt')

module.exports = {
  getAllUser: async(req, res) => {
    const users = await User.find({}, '-__v -password')

    res.status(200).json(users)
  },

  getUserByID: async(req, res) => {
    const id = await req.params.id
    const user = await User.findById(id).select("-__v -password")

    res.status(200).json(user)
  },

  addUser: (req, res) => {
    const data = req.body

    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds)
    data.password = hash

    const user = new User(data)
    user.save()

    res.status(201).json({message: "Data created"})
  },

  deleteUserByID: async(req, res) => {
    const id = await req.params.id

    await User.deleteOne({_id: id})
    
    res.status(201).json({message: "Data deleted"})
  },

  updateUserByID: async(req, res) => {
    const id = await req.params.id
    const data = await req.body

    await User.updateOne({_id: id}, {
      fullName: data.fullName,
      email: data.email,
      password: data.password
    })
    
    res.status(201).json({message: "Data updated"})
  }
}
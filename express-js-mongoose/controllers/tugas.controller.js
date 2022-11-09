const Tugas = require('../models/tugas')

module.exports = {
  getAllTugas: async(req, res) => {
    const tugass = await Tugas.find().select("-__v").populate("user", "-__v -password")

    res.status(200).json(tugass)
  },

  getTugasByID: async(req, res) => {
    const id = await req.params.id
    const tugas = await Tugas.findById(id).select("-__v").populate("user", "-__v -password")

    res.status(200).json(tugas)
  },

  addTugas: async(req, res) => {
    const data = req.body

    await Tugas.create(data)

    res.status(201).json({message: "Data created"})
  },

  deleteTugasByID: async(req, res) => {
    const id = await req.params.id

    await Tugas.deleteOne({_id: id})
    
    res.status(201).json({message: "Data deleted"})
  },

  updateTugasByID: async(req, res) => {
    const id = await req.params.id
    const data = await req.body

    await Tugas.updateOne({_id: id}, {
      name: data.name,
      isDone: data.isDone,
    })
    
    res.status(201).json({message: "Data updated"})
  }
}
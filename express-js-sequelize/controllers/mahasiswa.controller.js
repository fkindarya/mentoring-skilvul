const models = require('../models')
const {Mahasiswa} = models

module.exports = {
    getAllMahasiswa: async (req, res) => {
      const mahasiswas = await Mahasiswa.findAll()
      
      res.status(200).json(mahasiswas)
    },
  
    getMahasiswaByID: async (req, res) => {
      // const mahasiswa = await Mahasiswa.findOne(
      //   {where:
      //     {id:req.params.id}
      //   }
      // )
      const mahasiswa = await Mahasiswa.findByPk(req.params.id)
      
      res.status(200).json(mahasiswa)
    },
  
    addMahasiswa: async (req, res) => {
      const mahasiswa = await Mahasiswa.create(
        {
          name: req.body.name,
          age: req.body.age,
          phone_number: req.body.phone_number
        }
      )
      
      res.status(201).json(mahasiswa)
    },
  
    deleteMahasiswaByID: async (req, res) => {
      await Mahasiswa.destroy({
        where: {
          id: req.params.id
        }
      })

      res.status(201).json({message:"Delete success"})
    },
  
    updateMahasiswaByID: async (req, res) => {
      await Mahasiswa.update(
        {
          name: req.body.name,
          age: req.body.age,
          phone_number: req.body.phone_number
        }, {
          where: {
            id: req.params.id
          }
        }
      )

      const mahasiswa = await Mahasiswa.findByPk(req.params.id)
      
      res.status(201).json({
        message: "Update success",
        data: mahasiswa
      })
    }
  }
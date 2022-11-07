const express = require('express')

const mahasiswaRouter = express.Router()

const {
    getAllMahasiswa,
    addMahasiswa,
    getMahasiswaByID,
    updateMahasiswaByID,
    deleteMahasiswaByID
} = require('../controllers/mahasiswa.controller')

mahasiswaRouter.get('/', getAllMahasiswa)
mahasiswaRouter.post('/', addMahasiswa)
mahasiswaRouter.get('/:id', getMahasiswaByID)
mahasiswaRouter.put('/:id', updateMahasiswaByID)
mahasiswaRouter.delete('/:id', deleteMahasiswaByID)

module.exports = mahasiswaRouter
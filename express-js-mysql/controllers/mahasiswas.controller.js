const Mahasiswa = require("../models/mahasiswas.model")

async function getMahasiswas(req, res) {
    try {
        const mahasiswas = await Mahasiswa.getMahasiswas()
        res.status(200).json(mahasiswas)
    } catch (error) {
        console.log(err)
    }
}

async function getMahasiswaDetail(req, res) {
    try {
        const mahasiswas = await Mahasiswa.getMahasiswaDetail(req.params.id)
        res.status(200).json(mahasiswas)
    } catch (error) {
        console.log(error)
    }
}

async function createMahasiswa(req, res) {
    try {
        const mahasiswa = new Mahasiswa(
            req.body.name,
            req.body.age,
            req.body.phone_number,
        )
            
        await mahasiswa.createMahasiswa()
        
        const mahasiswas = await Mahasiswa.getMahasiswas()

        res.status(201).json(mahasiswas)
    } catch (error) {
        console.log(error)
    }
}

async function deleteMahasiswa(req, res) {
    try {
        await Mahasiswa.deleteMahasiswa(req.params.id)

        const mahasiswas = await Mahasiswa.getMahasiswas()

        res.status(201).json({
            message: "Delete success",
            mahasiswas
        })
    } catch (error) {
        console.log(error)
    }
}

async function updateMahasiswa(req, res) {
    try {
        const mahasiswa = new Mahasiswa(
            req.body.name,
            req.body.age,
            req.body.phone_number,
        )

        await mahasiswa.updateMahasiswa(req.params.id)

        const mahasiswas = await Mahasiswa.getMahasiswaDetail(req.params.id)

        res.status(201).json({
            message: "Update success",
            mahasiswas
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getMahasiswas,
    getMahasiswaDetail,
    createMahasiswa,
    deleteMahasiswa,
    updateMahasiswa
}
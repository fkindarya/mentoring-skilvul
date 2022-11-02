const mahasiswas = [
    {
        id: 1,
        name: "Fabyan Kindarya",
        age: 21,
        phone_number: "085157766074"
    },
    {
        id: 2,
        name: "Zaid Abdillah",
        age: 22,
        phone_number: "081331913558"
    }
]

function getMahasiswas(req, res) {
    res.status(200).json(mahasiswas)
}

function getMahasiswaDetail(req, res) {
    const mahasiswa = mahasiswas.find((orang) => orang.id == parseInt(req.params.id))

    if(!mahasiswa) {
        res.status(404).send("Mahasiswa not found")
    } else {
        res.status(200).json(mahasiswa)
    }
}

function createMahasiswa(req, res) {
    const data = req.body

    const mahasiswa = {
        id: mahasiswas.length+1,
        name: data.name,
        age: data.age,
        phone_number: data.phone_number
    }

    mahasiswas.push(mahasiswa)
    res.status(201).json(mahasiswas)
}

function deleteMahasiswa(req, res) {
    const mahasiswaIndex = mahasiswas.findIndex((orang) => orang.id == parseInt(req.params.id))

    mahasiswas.splice(mahasiswaIndex, 1)
    res.status(201).json({
        message: "Delete success",
        mahasiswas: mahasiswas
    })
}

function updateMahasiswa(req, res) {
    const data = req.body

    const mahasiswaIndex = mahasiswas.findIndex((orang) => orang.id == parseInt(req.params.id))

    mahasiswas[mahasiswaIndex].name = data.name
    mahasiswas[mahasiswaIndex].age = data.age
    mahasiswas[mahasiswaIndex].phone_number = data.phone_number

    res.status(201).json({
        message: "Update success",
        mahasiswas: mahasiswas
    })
}

module.exports = {
    getMahasiswas,
    getMahasiswaDetail,
    createMahasiswa,
    deleteMahasiswa,
    updateMahasiswa
}
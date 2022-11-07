const express = require("express")

const router = express.Router()

const mahasiswaRouter = require('./mahasiswa.route')

router.get('/', (req, res) => {
    res.send('Hello World')
})

router.use('/mahasiswas', mahasiswaRouter)

module.exports = router
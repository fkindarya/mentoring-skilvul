const express = require("express")
const mahasiswaRouter = require("../routes/mahasiswas.route")

const router = express.Router()

router.get("/", (req, res) => {
    res.send("Hello World")
})

router.use("/mahasiswas", mahasiswaRouter)

module.exports = router
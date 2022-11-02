const express = require("express");

const mahasiswaRouter = express.Router()

const mahasiswaController = require("../controllers/mahasiswas.controller")

mahasiswaRouter.get("/", mahasiswaController.getMahasiswas)
mahasiswaRouter.post("/", mahasiswaController.createMahasiswa)
mahasiswaRouter.get("/:id", mahasiswaController.getMahasiswaDetail)
mahasiswaRouter.delete("/:id", mahasiswaController.deleteMahasiswa)
mahasiswaRouter.put("/:id", mahasiswaController.updateMahasiswa)

module.exports = mahasiswaRouter
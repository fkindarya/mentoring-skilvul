const mongoose = require('mongoose')

const db_url = 'mongodb://localhost:27017/sekolah_mongoose'

const db = mongoose.connect(db_url)

module.exports = db
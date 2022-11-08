# Tutorial Express with Mongoose
1. Melakukan instalasi mongoose `npm install mongoose`
2. Membuat config > db.js dengan isi
    ```
    const mongoose = require('mongoose')

    const db_url = 'mongodb://localhost:27017/{nama_db}'

    const db = mongoose.connect(db_url)

    module.exports = db
    ```
3. Membuat koneksi di app.js
    ```
    db.then(() => {
        console.log('database connected')
    })
    .catch((err) => {
        console.log(err)
    })
    ```
4. Membuat Schema pada models
    ```
    const mongoose = require("mongoose");

    const { Schema } = mongoose

    const userSchema = new Schema({
        fullName: String,
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    })

    const User = mongoose.model('User', userSchema)

    module.exports = User
    ```
const express = require("express");
const router = require("./routes")

const app = express()
const PORT = 4000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router)

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})
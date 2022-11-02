const express = require("express")

const app = express()
const PORT = 4000

const router = require("./routes")

app.use(express.json())
app.use(router)

app.listen(PORT, () => {
    console.log("Server is running on port", PORT)
})
const express = require('express');
const router = express.Router()

const userRouter = require('./user.route');
const authRouter = require('./auth.route');
const tugasRouter = require('./tugas.route');

router.use("/user", userRouter)
router.use("/auth", authRouter)
router.use("/tugas", tugasRouter)

module.exports = router

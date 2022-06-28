const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const dbConnect = require("./config/db")

app.use(express.json({ extended: false }))

app.use("/api", require("./route/generateUrl"))
app.use("/", require("./route/forwardUrl"))

dbConnect()
app.listen(PORT, () => console.log(`Server running on ${PORT}`))


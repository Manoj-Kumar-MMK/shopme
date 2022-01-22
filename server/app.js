const express = require("express")
const mongoose = require("mongoose")
const morgan = require("morgan")
const cors = require("cors")
const config = require("./config")

const app = express()
const PORT = process.env.PORT || 5000

app.use(morgan("dev"))
app.use(express.json({ limit: "10mb" }))
app.use(cors())

app.disable("etag")

const userRouter = require("./routes/user")

app.use("/api/user", userRouter)

app.use((req, res, next) => {
	const error = new Error("Not found")
	error.status = 404
	next(error)
})

app.use((error, req, res, next) => {
	res.status(error.status || 500).json({
		error: error.message || "Internal Server Error",
	})
})

app.listen(PORT, () => console.log(`SERVER STARTED AT----${PORT}`))

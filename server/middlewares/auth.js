const jwt = require("jsonwebtoken")
const config = require("../config")
let app = {
	verify: (req, res, next) => {
		//check token exists
		const token = req.headers.authorization?.split(" ")[1]
		if (!token) return res.status(400).json({ error: "Token not found" })

		//decrypt token
		req.user = jwt.verify(token, config.jwt.key)
		next()
	},
}

module.exports = app

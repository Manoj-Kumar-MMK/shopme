const config = require("../config")

let app = {
	getUserDetails: {},
	login: (req, res, next) => {
		try {
			//check email exists
			const { mobile, password } = req.body

			if (!mobile || !password)
				return res.status(400).json({ error: "Mobile or password not found" })

			//validate password
			const isValid = await crypt.compare(password, user.password) //original salted )
			if (!isValid) return res.status(400).json({ error: "Password is wrong" })

			//jwt-sign
			const token = jwt.sign({ id: user._id, mobile }, config.jwt.key, {
				expiresIn: "100h",
				algorithm: config.jwt.type,
			})
			if (token) res.status(200).json({ token })
			else res.status(500).json({ error: "Error Creating token" })
		} catch (err) {
			next(err)
		}
	},
}

module.exports = app

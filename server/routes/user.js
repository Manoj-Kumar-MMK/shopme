const router = require("express").Router()

router.post("/test", (req, res) => res.status(200).json({ message: "test" }))
module.exports = router

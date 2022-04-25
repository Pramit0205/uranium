const express = require('express');
const router = express.Router();

const controller= require("../controllers/controller.js")
const midi2= require("../auth/auth.js")



router.post("/createuser", controller.createUser)
router.post("/login", controller.loginUser)
router.get("/users/:userId",midi2.midi1, controller.getUserData)
router.put("/users/:userId",midi2.midi1, controller.updateUser)
router.delete("/users/:userId",midi2.midi1, controller.deleteUser)





module.exports = router;
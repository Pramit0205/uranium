const express = require('express');
const router = express.Router();

const controller= require("../controllers/controller.js")
const midi2= require("../auth/auth.js")

// const midi1 = function(req, res, next){

//     const header = req.headers.isfreeappuser
//     if(header){
//         if(header === "true")
//         req['isFreeAppUser'] = true
//         if(header === "false")
//         req['isFreeAppUser'] = false
//     next()
//     }
//     else res.send({msg: "An usefull header is missing"})
//     }


router.post("/createuser", controller.createUser)
router.post("/login", controller.loginUser)
router.get("/users/:userId", controller.getUserData)
router.put("/users/:userId",midi2.midi1, controller.updateUser)
router.delete("/users/:userId",midi2.midi1, controller.deleteUser)








// router.post("/createorder", midi1, controller1.createOrder)
// router.post("/createbatches", controller1.createbatches)
// router.post("/createdeveloper", newcontroller.createdeveloper)
// router.get("/scholarship-developers", newcontroller.scholarship)
// router.get("/getdeveloper", newcontroller.getdeveloper)

module.exports = router;
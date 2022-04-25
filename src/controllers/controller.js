const jwt = require("jsonwebtoken");
const userModel = require("../models/user1.js");

//problem:1
const createUser = async function (req, res) {
  try {
    let data = req.body;
    console.log(data)
    if (Object.keys(data).length != 0) {
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData })
    }
    else res.status(400).send({ msg: "BAD REQUEST" })
  } catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

//problem:2
const loginUser = async function (req, res) {
  try {
    let userName = req.body.emailId;
    let password = req.body.password;

    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.status(404).send({
        status: false,
        msg: "username or the password is not corerct",
      })
    let token = jwt.sign(
      {
        userId: user._id.toString(),
        batch: "uranium",
        organisation: "FUnctionUp",
      },
      "functionup-uranium"
    );
    res.setHeader("x-auth-token", token);
    res.status(201).send({ status: true, data: token });
  } catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

//problem:3
const getUserData = async function (req, res) {
  try {
   
    let userid = req.params.userId;
    let userDetails = await userModel.findById(userid);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });
       if (userDetails.isDeleted){
      return res.status(400).send({ status: false, msg: "user not found, may be deleted" })
    }

    res.status(201).send({ status: true, data: userDetails });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

//problem:4
const updateUser = async function (req, res) {
  try {
   
    let userData = req.body;
    let updatedUser = await userModel.findOneAndUpdate({ _id: req.params.userId }, userData, { new: true });
    res.status(201).send({ status: updatedUser, data: updatedUser });
  } catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}

//problem:5
const deleteUser = async function (req, res) {
  try {
    
    let deletedtedUser = await userModel.findOneAndUpdate({ _id: req.params.userId }, { $set: { isDeleted: true } }, { new: true });
    res.status(201).send({ msg: "done", data: deletedtedUser });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
}



module.exports = { createUser, loginUser, getUserData, updateUser, deleteUser }

// module.exports.loginUser = loginUser;
// module.exports.getUserData = getUserData;
// module.exports.updateUser = updateUser;
// module.exports.deleteUser = deleteUser;
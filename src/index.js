const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

const moment = require("moment");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://urajrishu:aUHDB96UyJaq9SB@cluster0.1wief.mongodb.net/pramit1234", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// let time = moment();
// app.use (function(req, res, next)
// {
//     let url = req.originalUrl
//     console.log(url);
//     let ip= req.ip
//     console.log(ip);
//     console.log(time.format("h:mm:ss a"))
//     console.log(time.format("yyyy:mm:DD"))
//     next()
// })

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

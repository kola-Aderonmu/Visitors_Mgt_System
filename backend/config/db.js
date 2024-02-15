const mongoose = require("mongoose")

const connectDB = async () => {
    return mongoose
    .connect("mongodb://localhost/vms_mern")
    .then(() => console.log(`connection to database established...`))
    .catch((err) => console.log(err))
} ;

module.exports = connectDB


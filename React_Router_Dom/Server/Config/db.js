const mongoose = require('mongoose');
require("dotenv").config();

const db=process.env.db;
const dbconnect=async()=>{
    await mongoose.connect(db);
    console.log("Database connection established Successfully");
};

module.exports=dbconnect;
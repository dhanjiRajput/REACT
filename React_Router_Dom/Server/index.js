const express=require('express');
const dbconnect = require('./Config/db');
const cors = require("cors");
const indexRoutes = require('./Routes/index_route');
const decodeToken = require('./MIddleware/decode');
require("dotenv").config();
const app=express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1",decodeToken,indexRoutes);


const port=process.env.port ||8090;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
    dbconnect();
});
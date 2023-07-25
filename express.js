const express = require('express');
const app = express()
const mongoose = require('mongoose');
const router = require("./route");
const env = require("dotenv");
const postRoute = require("./post");

const PORT = 5000

app.use(express.json());
app.use("/user",router);
app.use("/authoriseUser", postRoute);

env.config();

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DB_connection)
.then(()=>{
    console.log("Connection Created")
})
.catch((err)=>{
    console.log(`There will be some error ${err}`)
})
    

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
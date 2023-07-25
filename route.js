const express = require('express').Router();
const route = require('express').Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModule = require("./module");
const {registerValidation, loginvalidation} = require("./validation");

  //Register User//
route.post("/register",async(req,res)=>{

  const {error} = registerValidation(req.body);
  if(error) return res.status(404).send (error.details[0].message);

  const salt = await bcrypt.genSalt(10)
  const hashpasswd = await bcrypt.hash(req.body.password,salt);

  const emailExist = await userModule.findOne({email : req.body.email});
  if(emailExist) return res.status(404).send("This email is already exist")

    const newUser = new userModule({
        name: req.body.name,
        email: req.body.email,
        MobileNo: req.body.MobileNo,
        password: hashpasswd
    })

    try{
        const saveData = await newUser.save();
        res.send(saveData)

    }catch (error){
      console.log(error)
    }
})

 //Show Data//
 route.get("/showData",async(req,res)=>{
    try{
      const showData = await userModule.find();
      res.send(showData)

    }catch (error){
      console.log(error);
    }
 })

 // Delete Data//

 route.delete("/delete",async(req,res)=>{
    let id = req.query.id;
    try{
        const deletedata = await userModule.findByIdAndDelete(id);
        res.send("Data successfully Delete")

    } catch (error){
        console.log(error);

    }
    
 }) 

 //Update Data//

 route.post("/update",async(req,res)=>{
    let _id = req.body._id;
    try{
        const updatedata = await userModule.findByIdAndUpdate(_id, req.body);
        res.send("Data updated")

    } catch (error){
        console.log(error);

    }
    
 }) 

 // login validate api//

 route.post("/login",async(req,res)=>{
  const {error} = loginvalidation(req.body)
  if (error) return res.status(404).send(error.details[0].message)

  //email validation//

  const userExist = await userModule.findOne({email: req.body.email})
  if(!userExist) return res.status(404).send("Invalid email id")

  //login password validation//

  const ispass = await bcrypt.compare(req.body.password, userExist.password)
  if (!ispass) return res.status(404).send("Invalid password" )

  const token = jwt.sign({_id:userExist._id},process.env.token_secret)

  res.header('auth-token',token).send(token)

  res.send("Login successful")
 

 })

 //Show one data//

 route.get("/Showone",async(req,res)=>{
    const id = req.query.id

    try{
        const Showone = await userModule.findById(id);
        res.send(Showone);

    } catch (error){
       console.log(error);
    }
 })

 

module.exports = route;
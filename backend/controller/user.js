const express = require("express");
const path= require("path")
const User = require("../model/user");
const router = express.Router();
const {upload}= require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const fs = require("fs");
// create user
router.post("/create-user",upload.single("file"), async (req, res, next) => {
    
      const { name, email, password, avatar } = req.body;
      const userEmail = await User.findOne({ email });
  
      if (userEmail) {
    
        
        const filename =req.file.filename;
        const filepath= `uploads/${filename}`;
        fs.unlink(filepath,(err)=>{
          if(err){
            console.log(err)
            res.status(500).json({message: "error deleting file"})
          } else {
            res.json({message: "file deleted successfully"})
          }
          
        }
        )
        return next(new ErrorHandler("User already exists", 400));
      }
      const filename=req.file.filename;
      const fileUrl=path.join(filename);
  
      const user = {
        name: name,
        email: email,
        password: password,
        avatar:fileUrl,
      };
      const newUser= await User.create(user);
      res.status(201).json({
        success: true,
        newUser,
      });
    })


    module.exports =router;
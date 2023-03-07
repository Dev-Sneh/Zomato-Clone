import express from "express";
import { UserModel } from "../database/user";
import  Jwt  from "jsonwebtoken";
import passport from "passport";
const Router=express.Router();

Router.post("/signup", async(req,res)=>{
try{
    const {email,phoneNumber}=req.body.credentials;
   await UserModel.findByEmailAndPhone(req.body.credentials);
    //hash password
    //const bcryptSalt=await bcrypt.genSalt(8);
    //const hashedPassword=await bcrypt.hash(password,bcryptSalt);
    
    //save to Db
    const newUser= await UserModel.create(req.body.credentials);
    //generate jwt auth token
    const token=newUser.generateJwtToken();
    return res.status(200).json({token,status:"success"});

}
catch(error){
return res.status(500).json({error:error.message});
}
});


//Signin
Router.post("/signin", async(req,res)=>{
    try{
          //hash password
       // const bcryptSalt=await bcrypt.genSalt(8);
        //const hashedPassword=await bcrypt.hash(password,bcryptSalt);
        const user=await UserModel.findByEmailAndPassword(req.body.credentials);
        
        //generate jwt auth token
        const token=user.generateJwtToken();
        return res.status(200).json({token,status:"success"});
    
    }
    catch(error){
    return res.status(500).json({error:error.message});
    }
});


/*
Route         /google
Descrip       Google Signin
Params        None
Access        Public
Method        GET
*/

Router.get(
    '/google',
    passport.authenticate('google', {
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email',
      ],
    })
  );
  
  /*
  Route         /google/callback
  Descrip       Google Signin callback
  Params        None
  Access        Public
  Method        GET
  */
  
  Router.get(
    '/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    (req, res) => {
      return res.json({ token: req.session.passport.user.token });
    }
  );
  






export default Router;


//Methods
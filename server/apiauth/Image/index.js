import express from "express";
import passport from "passport";
import multer from "multer";
//Utilities
import {s3Upload} from "../../Utils/s3";
//DB Model 
import {ImageModel} from "../../database/allModel";

const Router=express.Router();
//Multer Config
const storage=multer.memoryStorage();
const upload=multer({storage});

/*
//Route            //Image
//Des           Uploads Given Image to s3 bucket and saves file link to mongoDb
//Params           _id
//Access           Public
//Method           GET
*/
Router.post("/", upload.single("file"), async (req,res) =>{
try{
const file=req.file;
const bucketOptions={
Bucket:"zomatoclone23",
Key: file.originalname,
Body: file.buffer,
ContentType:file.mimetype,
ACL:"public-read",
};

const uploadImage=await s3Upload(bucketOptions);
return res.status(200).json({uploadImage});
}
catch(error){
    return res.status(500).json({error:error.message});
}
});

export default Router;
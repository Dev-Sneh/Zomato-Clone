import AWS from "aws-sdk";
require("dotenv").config();
const s3bucket =new AWS.S3({
    apiVersion:"latest",
    accessKeyId:process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey:process.env.AWS_S3_SECRET_KEY,
    region:"ap-south-1",

});
export const s3Upload=(options)=>{
    return new Promise((resolve,reject)=>
    s3bucket.upload(options,(error,data)=>{
        if(error) return reject(error);
        return resolve(data);
    })
    );
};
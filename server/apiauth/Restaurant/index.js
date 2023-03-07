import express from "express";
import passport from "passport";
//DB Model 
import {RestaurantModel} from "../../database/allModel";

const Router=express.Router();
//Route Restaurant details
Router.get("/",async(req,res)=>{
try{
    const {city}=req.query.city;//for filter
    const allRestaurant = await RestaurantModel.find({city});
    return res.json({restaurants});
}
catch(error){
return res.status(500).json({error:error.message});
}
});

//
Router.get("/:_id",async(req,res)=>
{
    try{
        const {_id}=req.params;
        const restaurant=await RestaurantModel.findOne(_id);
    if(!restaurant)
    return res.status(404).json({error:"Restaurant Not Found"});
    return res.json({restaurant});
    }
    catch(error){
        return res.status(500).json({error:error.message});

    }
});
//k
Router.get("/search",async(req,res)=>{
try{
const {searchString}=req.body;
const restaurants=await RestaurantModel.find({name:{$regex:searchString,$options:"i"},
});
if(!restaurants)
return res.status(404).json({error:"No Restaurant Matched with ${searchString}"});
return res.json({restaurants});
}
catch(error){
    return res.status(500).json({error:error.message});

}
});


export default Router;
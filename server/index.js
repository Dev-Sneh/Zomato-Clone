require("dotenv").config();
//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
//microservice routes
import Auth from "./apiauth";
//
import Restaurant from "./apiauth/Restaurant";
import Food from "./apiauth/Food";
import Image from "./apiauth/Image";
import order from "./apiauth/order";
import Reviews from "./apiauth/Reviews";

//config
import googleAuthConfig from "./config/google.config";
//database connection
import ConnectDB from "./database/connection";
import passport from "passport";
import { Passport } from "passport";
const zomato = express();
//application middlewares
zomato.use(helmet());
zomato.use(cors());
zomato.use(express.urlencoded({ extended: false }));

zomato.use(express.json());
//zomato.use(express.session({secret:"first"}));

zomato.use(require('express-session')({ secret: 'userdata', resave: true, saveUninitialized: true }));
zomato.use(passport.initialize());
zomato.use(passport.session());
//passport Configuration
googleAuthConfig(passport);
//application Routess
zomato.use("/auth", Auth)
zomato.use("/restaurant",Restaurant);
zomato.use("/food",Food);
zomato.use("/image",Image);
zomato.use("/order",order);
zomato.use("/reviews",Reviews);

//console.log(process.env.GOOGLE_CLIENT_ID);
zomato.get("/", (req, res) => { res.json({ message: "Setup Success" }); });
zomato.listen(4000, () => { ConnectDB().then(() => console.log("Server is Running")).catch((err) => console.log(err)); 
});

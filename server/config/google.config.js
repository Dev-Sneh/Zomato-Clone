import passport from "passport";
import googleOAuth from "passport-google-oauth20";
import { UserModel } from "../database/user";

const GoogleStrategy = googleOAuth.Strategy;
export default (Passport) => {
    passport.use(
        new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:4000/auth/google/callback",

        }, async (accessToken, refreshtoken, profile, done) => {
            const newUser = {
                fullname: profile.displayName,
                email: profile.emails[0].value,
                profilePic: profile.photos[0].valau,
            };
            try {
                const user = await UserModel.findOne({ email: newUser.email });
                

                if (user) {
                    const token = user.generateJwtToken();
                    done(null, { user, token });
                }
                else {
                    const user = await UserModel.create(newUser);
                    const token = user.generateJwtToken();
 
                    done(null, { user, token });
                }

            } catch (error) {
                done(error, null);

            }
        }
        )
    );
    passport.serializeUser((userData,done)=>done(null,{...userData}));
    passport.deserializeUser((id, done) => done(null, id));

};

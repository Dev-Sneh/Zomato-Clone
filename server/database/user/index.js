import mongoose from 'mongoose';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String },
    address: [{ detail: { type: String }, for: { type: String } }],
    phoneNumber: [{ type: Number }],
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateJwtToken = function () {
  return jwt.sign({ user: this._id.toString() }, "zomatoapp");
};

UserSchema.statics.findByEmailAndPhone = async ({ email, phoneNumber }) => {
  const checkUserByEmail = await UserModel.findOne({ email });
  const checkUserByPhone = await UserModel.findOne({ phoneNumber });

  if (checkUserByEmail || checkUserByPhone) {
    throw new Error("User Already Exists....!");
  }
  return false;
};
UserSchema.statics.findByEmailAndPassword = async ({ email, password }) => {
  const user = await UserModel.findOne({ email });
  if (!user) throw new Error("User Does not Exists!!!");
  //compare password
  const doesPasswordMatch = await bcrypt.compare(password, user.password);
  if (!doesPasswordMatch) { throw new Error("Invalid Password!!!"); }
  return user;
};

UserSchema.pre("save", function (next) {
  const user = this;
  //Password is Modified

  if (!user.isModified("password")) 
    return next();
  //generate bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);
      //Assigning hashed Password
      user.password = hash;
      return next();
    });
  });
});
export const UserModel = mongoose.model('Users', UserSchema);

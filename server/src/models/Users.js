// Library
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
});

export const UserModel = mongoose.model("users", UserSchema);

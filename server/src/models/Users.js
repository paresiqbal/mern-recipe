// Library
import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  username: { typeof: String, require: true, unique: true },
  password: { typeof: String, require: true },
});

export const UserModel = mongoose.model("users", UserSchema);

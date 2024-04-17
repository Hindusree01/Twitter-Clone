import mongoose, { model, Schema } from "mongoose";

const UserSchema = new Schema({
    name: String,
    email: String,
    image: String,
    username: String,
});

const User =  mongoose.models?.User || model("User", UserSchema);

export default User;

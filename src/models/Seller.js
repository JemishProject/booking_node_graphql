import mongoose from "mongoose";

export const Seller = mongoose.model("seller", { 
    email: String,
    password: String
 });

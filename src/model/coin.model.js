import mongoose from "mongoose";

const coinSchema = new mongoose.Schema({
    name:{
        type: String,
        enum:["bitcoin","matic","ethereum"],
        required: [true,"name of cryptocurrency is required"]
    },
    price:{
        type: [Number],
        required: true
    },
    "24hChange":{
        type: Number,
        required: true
    }
},{timestamps:true});

const Coin = mongoose.model("Coin",coinSchema);

export default Coin;
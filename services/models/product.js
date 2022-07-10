const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
    {
        title: String,
        discription: String,
        imgurl: String,
        category: String,
        deals_title: Boolean,
        price: String,
        lastPrice: String,
        quantity: Number,
        userid: String
    },
    {
        toObject: { virtuals: true },
        toJSON: { virtuals: true },
    }
);
module.exports = mongoose.model("Product", ProductSchema);
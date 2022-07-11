//use Router couse use group apis
const router = require("express").Router();
const Product = require("../models/product");

//POST request -create a new product
router.post("/products", async (req, res) => {
    try {
        let product = new Product();
        product.title = req.body.title;
        product.discription = req.body.discription;
        product.imgurl = req.body.imgurl;
        product.price = req.body.price;
        product.lastprice = req.body.lastprice;
        product.category = req.body.category;
        product.userid = req.body.userid;
        product.quantity = req.body.quantity;
        product.deals_title = req.body.deals_title;

        await product.save(); //async
        res.json({
            status: true,
            message: "successfully saved",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

//GET request-get all products
router.get("/products", async (req, res) => {
    try {
        let products = await Product.find();
        res.json({
            status: true,
            products: products,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

//GET request-get single product
router.get("/products/:id", async (req, res) => {
    try {
        let product = await Product.findOne({ _id: req.params.id }).exec();
        res.json({
            success: true,
            product: product,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

//PUT request -Update a single Product
router.put("/products/:id", async (req, res) => {
    try {
        let product = await Product.findOneAndUpdate(
            { _id: req.params.id },
            {
                $set: {
                    title: req.body.title,
                    price: req.body.price,
                    category: req.body.category,
                    userid: req.body.userid,
                    quantity: req.body.quantity,
                    imgurl: req.body.imgurl,
                    discription: req.body.discription,
                    lastPrice: req.body.lastPrice,
                    deals_title: req.body.deals_title

                },
            },
            //if this id not found in database will add as a new object
            { upsert: true }
        );
        res.json({
            success: true,
            updateProduct: product,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

//DELETE request - delete a single Product
router.delete("/products/:id", async (req, res) => {
    try {
        let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });

        if (deletedProduct) {
            res.json({
                success: true,
                message: "successfully deleted",
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});
module.exports = router;
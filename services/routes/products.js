//use Router couse use group apis
const router = require("express").Router();
const Product = require("../models/product");
// const app =express()
//POST request -create a new product
router.post("/products", async (req, res) => {
  try {
    let product = new Product();
    product.title = req.body.title;
    product.discription = req.body.discription;
    product.imgurl = req.body.imgurl;
    product.price = req.body.price;
    product.lastPrice = req.body.lastPrice;
    product.owner = req.body.owner;
    product.category = req.body.category;
    product.stockQuantity = req.body.stockQuantity;

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
    const count = +req.query.count;
    const page = +req.query.page;
    let products = await Product.find()
      .skip(count * (page - 1))
      .limit(count)
      .populate("users")
      .populate("reviews", "rating")
      .exec();

    // function (err, wins) {}
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
    let product = await Product.findOne({ _id: req.params.id })
      .populate("users")
      .populate("reviews", "rating")
      .exec();
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
router.put("/products/:id", upload.single("photo"), async (req, res) => {
  try {
    let product = await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          title: req.body.title,
          price: req.body.price,
          category: req.body.category,
          owner: req.body.owner,
          stockQuantity: req.body.stockQuantity,
          photo: req.file.location,
          discription: req.body.discription,
          lastPrice: req.body.lastPrice,
        },
      },
      //if this id not found in database will add for e a new object
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






































// const express = require("express");
// const router = express.Router()


// const products = [
//     {
//         id: '1',
//         title: "HP Notebook",
//         price: "25,550",
//         lastprice: "₹30,000",
//         imgurl: "https://i.imgur.com/9UYzfny.png",
//         category: "Laptops",
//         deals_title: true,
//         quantity: 4,
//         productdetails:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit porro aut tenetur earum tempora. Beatae reprehenderit magni cumque rem reiciendis incidunt voluptatibus libero repellat ea totam veritatis mollitia, eos laudantium?",
//     },
//     {
//         id: '2',
//         title: "HP Notebook",
//         price: "25,550",
//         lastprice: "₹30,000",
//         imgurl: "https://i.imgur.com/9UYzfny.png",
//         category: "Laptops",
//         deals_title: true,
//         quantity: 4,
//         productdetails:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit porro aut tenetur earum tempora. Beatae reprehenderit magni cumque rem reiciendis incidunt voluptatibus libero repellat ea totam veritatis mollitia, eos laudantium?",
//     },
//     {
//         id: '3',
//         title: "HP Notebook",
//         price: "25,550",
//         lastprice: "₹30,000",
//         imgurl: "https://i.imgur.com/9UYzfny.png",
//         category: "Laptops",
//         deals_title: true,
//         quantity: 4,
//         productdetails:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit porro aut tenetur earum tempora. Beatae reprehenderit magni cumque rem reiciendis incidunt voluptatibus libero repellat ea totam veritatis mollitia, eos laudantium?",
//     },
// ];

// router.get('/products',(req,res)=>{
//     console.log("Asd");
//     res.json(products)
// })

// router.get('product/:id',(req,res)=>{
//     const id = req.params.id
//     const product = products.find(product => product.id === id )
//     res.json(product)
// })

// router.delete('product/:id',(req,res)=>{
//     const id = req.params.id
//     const product = products.filter(product => product.id !== id )
//     console.log(product);
// })

// module.exports = router;

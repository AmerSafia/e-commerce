import React, { useState } from "react";
import { Input } from "../components/common/input";

const AddProduct = () => {
  const [product, setProduct] = useState({});

  const onSetProduct = (event) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
    console.log(product,"product");
  };
  return (
    <div className="container w-100 card-style ">
      <div className="d-flex justify-content-between mb-5 ">
        <h2>Add Product</h2>
      </div>
      <form className="container">
        <Input
          label="Title"
          name="title"
          // value={onSetProduct["title"]}
          onSetInput={onSetProduct}
        />
        <Input
          label="Category"
          name="category"
          // value={onSetProduct["category"]}
          onSetInput={onSetProduct}
        />
        <Input
          label="Image Url"
          name="imgurl"
          // value={onSetProduct["imgurl"]}
          onSetInput={onSetProduct}
        />
        <Input
          type="number"
          label="Price"
          name="price"
          // value={onSetProduct["price"]}
          onSetInput={onSetProduct}
        />
        <Input
          type="number"
          label="Previous Price"
          name="previousprice"
          // value={onSetProduct["previousprice"]}
          onSetInput={onSetProduct}
        />
        <Input
          type="number"
          label="Quantity in stock"
          name="quantity"
          // value={onSetProduct["quantity"]}
          onSetInput={onSetProduct}
        />
         <Input
          label="productdetails"
          name="productdetails"
          // value={onSetProduct["category"]}
          onSetInput={onSetProduct}
        />
        <button type="submit" className="btn btn-primary mt-3">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

import React, { useState, useEffect } from "react";
import { Input } from "../components/common/input";
import { productApi } from "../api/productApi";
import { useLocation, useHistory } from "react-router-dom";

const AddProduct = () => {
  const [product, setProduct] = useState({});
  const { productId } = useLocation();
  const history = useHistory();

  const onSetProduct = (event) => {
    const { value, name } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(productId,"asasdasd");
  }, []);
  const onAddOrEditProduct = async (event) => {
    event.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    const userid = user.id.toString();
    try {
      await productApi.postproduct({ ...product, userid });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="container card-style">
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
          label="discription"
          name="discription"
          // value={onSetProduct["category"]}
          onSetInput={onSetProduct}
        />
        <button
          type="submit"
          onClick={onAddOrEditProduct}
          className="btn btn-primary mt-3"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

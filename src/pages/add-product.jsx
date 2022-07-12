import React, { useState, useEffect } from "react";
import { Input } from "../components/common/input";
import { productApi } from "../api/productApi";
import { useParams, useHistory } from "react-router-dom";
import { selectUser } from "../redux/userSlice";
import { useSelector } from "react-redux";


const AddProduct = () => {
  const [product, setProduct] = useState({});
  const { id: productId } = useParams();
  const history = useHistory();
  const user = useSelector(selectUser);

  
  const onSetProduct = (event) => {
    const { value, name } = event.target;

    setProduct({
      ...product,
      [name]: value,
    });
  };

  useEffect(() => {
    if (productId) {
      getProduct(productId);
    }
  }, []);

  const getProduct = async (id) => {
    try {
      const { product } = await productApi.getProduct(id);
      setProduct({ ...product });
      console.log(product);
    } catch (error) {
      console.log(error);
    }
  };

  const onAddOrEditProduct = async (event) => {
    event.preventDefault();
    const userid = user.id;
    try {
      if (productId) {
        await productApi.updateproduct({ ...product, userid });
      } else {
        await productApi.postproduct({ ...product });
      }
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
          value={product["title"]}
          onSetInput={onSetProduct}
        />
        <Input
          label="Category"
          name="category"
          value={product["category"]}
          onSetInput={onSetProduct}
        />
        <Input
          label="Image Url"
          name="imgurl"
          value={product["imgurl"]}
          onSetInput={onSetProduct}
        />
        <Input
          type="number"
          label="Price"
          name="price"
          value={product["price"]}
          onSetInput={onSetProduct}
        />
        <Input
          type="number"
          label="Previous Price"
          name="previousprice"
          value={product["lastprice"]}
          onSetInput={onSetProduct}
        />
        <Input
          type="number"
          label="Quantity in stock"
          name="quantity"
          value={product["quantity"]}
          onSetInput={onSetProduct}
        />
        <Input
          label="discription"
          name="discription"
          value={product["category"]}
          onSetInput={onSetProduct}
        />
        <button
          type="submit"
          onClick={onAddOrEditProduct}
          className="btn btn-primary mt-3"
        >
          {!productId && <span>Add Product</span>}
          {productId && <span>Update Product</span>}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

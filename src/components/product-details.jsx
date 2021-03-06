import "./product-details.css";
import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/userSlice";
import { productApi } from "../api/productApi";

const ProductDetails = () => {
  const [isAdminUser, setIsAdminUser] = useState(false);
  const { state } = useLocation();
  const history = useHistory();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (user && state.userid == user.id) {
      setIsAdminUser(true);
    }
  }, []);

  const onEdit = (product) => {
    history.push(`/edit-product/${product.id}`);
  };

  const onDelete = async (product) => {
    console.log(product.id);
    await productApi.deleteproduct(product.id);
    history.push(`/`);
  };

  return (
    <div className="container">
      <div className="col-lg-8  p-3 w-100 card-style py-5 mt-1">
        <div className="row m-0">
          <div className="col-lg-4 left-side-product-box pb-3">
            <img src={state.imgurl} className=" p-3" />
          </div>
          <div className="col-lg-8">
            <div className="right-side-pro-detail p-3 m-0">
              <div className="row">
                <div className="col-lg-12">
                  <p className="m-0 p-0">{state.title}</p>
                </div>
                <div className="col-lg-12">
                  <p className="m-0 p-0 price-pro">${state.price}</p>
                  <hr className="p-0 m-0" />
                </div>
                <div className="col-lg-12 pt-2">
                  <h5>Product Detail</h5>
                  <span>{state.discription}</span>
                  <hr className="m-0 pt-2 mt-2" />
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="row">
                    <div className="col-lg-4 pb-2">
                      <button className="btn w-100">Add To Cart</button>
                    </div>
                    <div className="col-lg-4 pb-2">
                      {isAdminUser && (
                        <button
                          className="btn w-100"
                          onClick={() => onEdit(state)}
                        >
                          Edit
                        </button>
                      )}
                    </div>
                    <div className="col-lg-4">
                      {isAdminUser && (
                        <button
                          className="btn w-100"
                          onClick={() => onDelete(state)}
                        >
                          delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center pt-3">
            <h4>More Product</h4>
          </div>
        </div>
        <div className="row mt-3 p-0 text-center pro-box-section">
          <div className="col-lg-3 pb-2">
            <div className="pro-box p-0 m-0">
              <img src="http://nicesnippets.com/demo/pd-b-image1.jpg" />
            </div>
          </div>
          <div className="col-lg-3 pb-2">
            <div className="pro-box p-0 m-0">
              <img src="http://nicesnippets.com/demo/pd-b-images2.jpg" />
            </div>
          </div>
          <div className="col-lg-3 pb-2">
            <div className="pro-box p-0 m-0">
              <img src="http://nicesnippets.com/demo/pd-b-images3.jpg" />
            </div>
          </div>
          <div className="col-lg-3 pb-2">
            <div className="pro-box p-0 m-0">
              <img src="http://nicesnippets.com/demo/pd-b-images4.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

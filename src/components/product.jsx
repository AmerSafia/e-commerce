import "./product.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { productApi } from "../api/productApi";

const Product = () => {
  const history = useHistory();
  const [products, setPorducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const onDetailsProduct = (product) => {
    history.push("/product-details", product);
  };

  const getProducts = async () => {
    try {
      const res = await productApi.getProducts();
      setPorducts(res.products);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div className="container min-vh-100">
      <div className="row">
        {products &&
          products.map((product) => {
            return (
              <div
                className="col-md-2 col-sm-6 mt-3" key={product._id}
                onClick={() => onDetailsProduct(product)}
              >
                <div className="bbb_deals">
                  <div className="ribbon ribbon-top-right">
                    <span>
                      <small className="cross">x</small>
                      {product.quantity}
                    </span>
                  </div>
                  {product.deals_title && (
                    <div className="bbb_deals_title">Today's Combo Offer</div>
                  )}
                  <div className="bbb_deals_slider_container">
                    <div className=" bbb_deals_item">
                      <div className="bbb_deals_image">
                        <img src={product.imgurl} alt="" />
                      </div>
                      <div className="bbb_deals_content">
                        <div className="bbb_deals_info_line bold d-flex flex-row justify-content-between">
                          <div className="bbb_deals_item_category">
                            <a >{product.category}</a>
                          </div>
                          <div className="bbb_deals_item_price_a ml-auto">
                            <strike>{product.lastprice}</strike>
                          </div>
                        </div>
                        <div className="bbb_deals_info_line d-flex flex-row justify-content-between">
                          <div className="bbb_deals_item_name">
                            {product.title}
                          </div>
                          <div className="bbb_deals_item_price ml-auto">
                            ${product.price}
                          </div>
                        </div>
                          <div className="available_line">
                            <div className="available_title">
                              Available: <span>{product.quantity}</span>
                            </div>
                          </div>
                          <div className="sold_stars">
                            <i className="fa fa-star"></i>{" "}
                            <i className="fa fa-star"></i>{" "}
                            <i className="fa fa-star"></i>{" "}
                            <i className="fa fa-star"></i>{" "}
                            <i className="fa fa-star"></i>{" "}
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Product;

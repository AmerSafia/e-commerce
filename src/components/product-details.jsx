import { useLocation } from "react-router-dom";
import "./product-details.css";
const ProductDetails = () => {
  const { state } = useLocation();
  console.log(location);
  return (
    <div className="container">
      <div className="col-lg-8  p-3 main-section w-100 card-style py-5 mt-1">
        <div className="row m-0">
          <div className="col-lg-4 left-side-product-box pb-3">
            <img src={state.imgurl} className=" p-3" />
            {/* <span className="sub-img">
                            <img src="http://nicesnippets.com/demo/pd-image2.jpg" className="border p-2" />
                            <img src="http://nicesnippets.com/demo/pd-image3.jpg" className="border p-2" />
                            <img src="http://nicesnippets.com/demo/pd-image4.jpg" className="border p-2" />
                        </span> */}
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
                  <span>{state.productdetails}</span>
                  <hr className="m-0 pt-2 mt-2" />
                </div>
                <div className="col-lg-12 mt-3">
                  <div className="row">
                    <div className="col-lg-6 pb-2">
                      <button className="btn w-100">Add To Cart</button>
                    </div>
                    <div className="col-lg-6">
                      <button className="btn  w-100">Shop Now</button>
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
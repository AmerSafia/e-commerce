import { useHistory } from "react-router-dom";
import "./product.css";

const Product = () => {
  const history = useHistory();

  const products = [
    {
      title: "HP Notebook",
      price: "25,550",
      lastprice: "₹30,000",
      imgurl: "https://i.imgur.com/9UYzfny.png",
      category: "Laptops",
      deals_title: true,
      quantity: 4,
      productdetails:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit porro aut tenetur earum tempora. Beatae reprehenderit magni cumque rem reiciendis incidunt voluptatibus libero repellat ea totam veritatis mollitia, eos laudantium?",
    },
    {
      title: "HP Notebook",
      price: "25,550",
      lastprice: "₹30,000",
      imgurl: "https://i.imgur.com/9UYzfny.png",
      category: "Laptops",
      deals_title: true,
      quantity: 4,
      productdetails:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit porro aut tenetur earum tempora. Beatae reprehenderit magni cumque rem reiciendis incidunt voluptatibus libero repellat ea totam veritatis mollitia, eos laudantium?",
    },
    {
      title: "HP Notebook",
      price: "25,550",
      lastprice: "₹30,000",
      imgurl: "https://i.imgur.com/9UYzfny.png",
      category: "Laptops",
      deals_title: true,
      quantity: 4,
      productdetails:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit porro aut tenetur earum tempora. Beatae reprehenderit magni cumque rem reiciendis incidunt voluptatibus libero repellat ea totam veritatis mollitia, eos laudantium?",
    },
  ];

  const routershowpage = (product) => {
    history.push("/product-details", product);
  };
  return (
    <div className="container mydiv">
      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-3" onClick={() => routershowpage(product)}>
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
                      <div className="bbb_deals_info_line bold d-flex flex-row justify-content-start">
                        <div className="bbb_deals_item_category">
                          <a href="#">{product.category}</a>
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
                          {product.price}
                        </div>
                      </div>
                      <div className="available d-flex justify-content-between">
                        <div className="available_line">
                          <div className="available_title">
                            Available: <span>{product.quantity}</span>
                          </div>
                        </div>
                        <div className="sold_stars ml-auto">
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;

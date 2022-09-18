import Layout from "../../hoc/layout";

import product from "../../services/json/product.json";


export default function Product() {
  
  

  return (
    <Layout
      headerTitle="Big and bigger."
      headerText="Welcome to ikart."
      activePage="product"
    >
      <h1>New Arrivals</h1>
      <h3>Which iPhone is right for you?</h3>
      <div className="row">
        {product.map((product, key) => {
          return (
            <div className="col-4 mb-3">
              <div class="card">
                <img src={product.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class=" card tille">{product.productName}</h5>
                  <p class="card-text">
                    <strong>${product.price.toFixed(2)}</strong>
                  </p>
                  <p class="card-text">{product.productDesc}</p>
                  <a href="/" class="btn btn-primary">
                    Add to Cart
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}
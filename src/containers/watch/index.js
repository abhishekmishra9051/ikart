import Layout from "../../hoc/layout";

import watch from "../../services/json/watch.json";



export default function Watch() {
  
  

  return (
    <Layout
      headerTitle="Adventure awaits."
      headerText="Welcome to ikart"
      activePage="watch"
    >
      <h1>New Arrivals</h1>
      <div className="row">
        {watch.map((watch, key) => {
          return (
            <div className="col-4 mb-3">
              <div class="card">
                <img src={watch.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class=" card tille">{watch.productName}</h5>
                  <p class="card-text">
                    <strong>${watch.price.toFixed(2)}</strong>
                  </p>
                  <p class="card-text">{watch.productDesc}</p>
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
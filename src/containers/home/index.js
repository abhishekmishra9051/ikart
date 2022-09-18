import Layout from "../../hoc/layout";
import Store from "../../services/json/store.json";

export default function Home() {
  return (
    <Layout
      headerTitle="ikart"
      headerText="Welcome to ikart"
      activePage="home"
    >
      <h1>
        <strong>Store.</strong>The best way to buy the products you love.
      </h1>
      <p>
      <strong>ikart</strong> focused on online sales of electronic gadgets and a variety of other products and accesssories.
      </p>
      <h3><strong><font color="blue">The latest.</font ></strong> Take a look at what’s new right now.</h3>
      <div className="row">
        {Store.map((Store, key) => {
          return (
            <div className="col-4 mb-3">
              <div class="card">
                <img src={Store.image} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class=" card tille">{Store.productName}</h5>
                  <p class="card-text">
                    <strong>${Store.price.toFixed(2)}</strong>
                  </p>
                  <p class="card-text">{Store.productDesc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

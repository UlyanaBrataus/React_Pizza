import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  /* we put function into useEffect to prevent it's multiple rerenders */
  useEffect(() => {
    fetch("https://62c6b6ff74e1381c0a66e8cb.mockapi.io/items")
      .then(res => res.json())
      .then(arr => {
        setItems(arr);
      });
  }, []);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            {/* <Categories /> */}
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map(item => (
              <PizzaBlock
                key={item.id} /* or {... obj} with spread */
                title={item.title}
                price={item.price}
                image={item.imageUrl}
                sizes={item.sizes}
                types={item.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

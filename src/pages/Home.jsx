import { useEffect, useState } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Skeleton from "../components/PizzaBlock/Skeleton";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "популярности",
    sortProperty: "rating",
  });

  console.log(categoryId, sortType);
  /* we put function into useEffect to prevent it's multiple rerenders */
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://62c6b6ff74e1381c0a66e8cb.mockapi.io/items?category=" + categoryId
    ) /* async req */
      .then(res => res.json())
      .then(arr => {
        setItems(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0); /* auto scroll top on first render  */
  }, [categoryId, sortType]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={i => setCategoryId(i)}
        />
        <Sort sortValue={sortType} onChangeSort={i => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map(item => (
              <PizzaBlock
                key={item.id}
                title={item.title} /* or {... obj} with spread */
                price={item.price}
                image={item.imageUrl}
                sizes={item.sizes}
                types={item.types}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;

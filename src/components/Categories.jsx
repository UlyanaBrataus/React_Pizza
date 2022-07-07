import React, { useState } from "react";

function Categories() {
  const categories = [
    "Все",
    "Мясные",
    "Вегетарианские",
    "Гриль",
    "Острые",
    "Закрытые",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const onClickCategory = index => {
    setActiveIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            key={
              index
            } /* we can use index for rendering static lists, but not for dynamic. For dynamic lists we should use id */
            onClick={() => onClickCategory(index)}
            className={activeIndex === index ? "active" : ""}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;

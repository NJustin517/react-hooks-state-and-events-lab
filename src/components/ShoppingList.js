import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilter] = useState("All");

  function handleState(event) {
    setFilter(event.target.value);
  }

  function handleFilter(item) {
    if (filterBy === "All") {
      return item;
    }
    return item.category === filterBy;
  }

  const filteredList = items.filter((item) => handleFilter(item));

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleState} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredList.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

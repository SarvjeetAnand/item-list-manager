import React, { useState } from "react";
import "./ItemListManager.css";

const ItemListManager = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="item-list-manager">
      <h1>Item List</h1>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter an item"
        />
      </div>
      <button onClick={handleAddItem}>Add Item</button>

      <ul className="styled-list">
        {items.map((item, index) => (
          <li key={index}>"{item}"</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListManager;

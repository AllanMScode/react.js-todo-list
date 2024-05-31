import React, { useState } from "react";
import "./App.css";

function App() {
  // Stete hook - `useState`
  const [newItem, setNewItem] = useState("");

  // Array to hold all of the items (tasks)
  const [items, setItems] = useState([]);

  // Helper Functions
  function addItem() {
    // console.log(newItem);

    if (!newItem) {
      alert("Enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");

    console.log(items);
  }

  function deleteItem(id) {
    // console.log(id);

    // Our new array will be everything excluding the deleted item id
    const newArray = items.filter((item) => item.id !== id); // take each item & check if this item id does not equal to the id that we passed in

    setItems(newArray);
  }

  return (
    <div className="App">
      {/* 1. Header */}
      <h1>Todo List App</h1>

      {/* 2. Input (input and button) */}
      <input
        type="text"
        placeholder="Add an item..."
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />

      <button onClick={() => addItem()}>Add</button>

      {/* 3. List of Items (unordered list with list items inside) */}
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button
                className="delete-button"
                onClick={() => deleteItem(item.id)}>
                ❌
              </button>{" "}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;

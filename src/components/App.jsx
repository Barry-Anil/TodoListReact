import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [addItem, setAddITem] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function handleClick() {
    setAddITem((preValue) => {
      return [...preValue, inputText];
    });
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {addItem.map((todoList) => (
            <li> {todoList} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add a todo"
        value={input}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInput(e.target.value)
        }
      />
      <button className="todo-button">Add todo</button>
    </form>
  );
}

export default Form;

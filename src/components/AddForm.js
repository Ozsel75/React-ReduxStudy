import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Addform = ({ todos, setTodos }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTodo = {
      id: String(new Date().getTime()),
      text: text,
      isDone: false,
      date: new Date(),
    };
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input value={text} onChange={(event) => setText(event.target.value)} />
        <button type="submit">Ekle</button>
      </div>
    </form>
  );
};

export default Addform;

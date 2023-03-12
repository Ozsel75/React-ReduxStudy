import React from "react";
import { useDispatch } from "react-redux";

const SingleTodo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch({ type: "DELETE_TODO", payload: todo.id });
    // const filteredTodos = todos.filter((item) => item.id !== todo.id);
    // setTodos(filteredTodos);   redux olmadan önceki hali
  };

  return (
    <div>
      <h2>{todo.text}</h2>
      <button onClick={handleDelete}>Sil</button>
      <hr />
    </div>
  );
};

export default SingleTodo;

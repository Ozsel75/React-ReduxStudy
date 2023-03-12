import React from "react";

const SingleTodo = ({ todo }) => {
  const handleDelete = () => {
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

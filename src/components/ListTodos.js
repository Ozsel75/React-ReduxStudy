import React from "react";
import SingleTodo from "./SingleTodo";
import { useSelector } from "react-redux";

const ListTodos = () => {
  const { todosState } = useSelector((state) => state);

  return (
    <div>
      ListTodos
      {todosState.todos.length === 0 ? (
        <p>Henüz kayıtlı todo yok</p>
      ) : (
        <>
          {todosState.todos.map((todo) => (
            <SingleTodo todo={todo} />
          ))}
        </>
      )}
    </div>
  );
};

export default ListTodos;

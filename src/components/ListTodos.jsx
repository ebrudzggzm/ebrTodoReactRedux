import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
const ListTodos = () => {
  const storeState = useSelector((store) => store.todoReducer);
  console.log(storeState);
  return (
    <div className="d-flex flex-column gap-3">
      {storeState.todos.map((todo) => (
        <TodoCard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default ListTodos;

import { useEffect } from "react";
import AddForm from "./components/AddForm";
import ListTodos from "./components/ListTodos";
import { useDispatch } from "react-redux";
import { setTodo } from "./store/actions/todoActions";
import api from "./utils/api";

const App = () => {
 const dispatch =  useDispatch();
  useEffect(() => {
    api
      .get("/todos")
      .then((res) => dispatch(setTodo(res.data)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="d-flex flex-column justify-content-start align-items-center mt-5">
      <div>
        <h1>
          REACT <span className="text-warning">CRUD</span>
        </h1>
      </div>

      <div className="m-5">
        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;

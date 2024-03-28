import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { addTodo } from "../store/actions/todoActions";
import { toast } from "react-toastify";
import api from "../utils/api";

const AddForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    console.log(text);

    const newTodo = {
      id: v4(),
      title: text,
      is_done: false,
      // created_At: new Date().toLocaleDateString('en'),
      created_At: new Date().toLocaleDateString("tr"),
    };
    console.log(newTodo, "new");

    const promise = api
    .post("/todos", newTodo)
    .then(() => dispatch(addTodo(newTodo)))
    .catch((err) => {throw new Error()});

   
    toast.promise(promise, {
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    });
    e.target.reset();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="d-flex gap-2 my-5">
        <input
          className="form-control"
          placeholder="örn:typescript projesi"
          type="text"
        />
        <button className="btn btn-warning">Gönder</button>
      </form>
    </div>
  );
};

export default AddForm;

import Modal from "../components/Modal";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../store/actions/todoActions";
import axios from "axios";
import api from "../utils/api";

const TodoCard = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    api
      .delete(`/todos/${todo.id}`)
      .then(() => dispatch(deleteTodo(todo.id)))
      .catch((err) => console.log(err));
  };
  const toggleIsDone = () => {
    const updated = {
      ...todo,
      is_done: !todo.is_done,
    };
    console.log(updated, "is=done");
    api.put(`/todos/${todo.id}`,updated)
    .then(()=>dispatch(updateTodo(updated)))
    .catch((err)=>(alert('Bir hata oluştu')))
    
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="list-group">
      <div className="list-group-item d-flex justify-content-between gap-5 align-items-center">
        <h5>{todo.title}</h5>
        <h6>{todo.is_done ? "Tamamlandı" : "Devam Ediyor"}</h6>

        <h6>{todo.created_At}</h6>
        <div className=" d-flex gap-2 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-success"
          >
            Düzenle
          </button>
          <button onClick={toggleIsDone} className="btn btn-primary ">
            {todo.is_done ? "Geri Al" : "Tamamla"}
          </button>
          <button onClick={handleDelete} className="btn btn-danger">
            Sil
          </button>

          {isOpen && <Modal todo={todo} close={() => setIsOpen(false)} />}
        </div>
      </div>
    </div>
  );
};

export default TodoCard;

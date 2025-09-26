//borrar isCompleted de todo
//todoRow cambiar fecha para q pueda ser null 
import React, { useEffect, isCompleted, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { fetchNewtodoRow, fetchNewtodoRowId } from "../../Store/todoRowSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [estado, setEstado] = useState("Pendiente");
  const toggle = () => setOpen(!open);
  const [edit, setEdit] = useState(false);
  const edited = () => setEdit(!edit);
  const todoRow = useSelector((state) => state.todoRow.byTodoId[id] || []);
  const { status, error } = useSelector((state) => state.todoRow);


  useEffect(() => {
    if (id) {
      dispatch(fetchNewtodoRowId(id));
    }
  }, [dispatch, id]);

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [state, setState] = useState({
    "idToDo": id,
    "name": "",
    "trimeEnd": ""

  });


  useEffect(() => {
    if (status === "failed" && error) {
      alert(error);
    }
  }, [status, error]);

  const [errors, setErrors] = useState({
    title: "",
     trimeEnd: ""
  });

  const validate = (state, name) => {
    if (name === "name") {
      if (state.name === "")
        setErrors({ ...errors, name: "Title no puede estar vacío" });
      else {
        setErrors({ ...errors, name: "" });
        return;
      }
    }
    if (name === "trimeEnd") {
      if (state.trimeEnd === "")
        setErrors({ ...errors, trimeEnd: "Date no puede estar vacío" });
      else {
        setErrors({ ...errors, trimeEnd: "" });
        return;
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState((prev) => ({
      ...prev,
      [name]: value, // guardo el valor con la clave dinámica
    }));

    validate(
      {
        ...state,
        [name]: value,
      },
      name
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);


    const finalState = {
      ...state,

    };

    dispatch(fetchNewtodoRow(finalState))

      .catch((err) => {
        console.log("error:", err);
      });
  };

  const disable = () => {
    if (formSubmitted) return true;
    return Object.values(errors).some((error) => error !== "");
  };
  const hasErrors = Object.values(errors).some((error) => error === "*");



  return (
    <div className="w-[600px] h-auto  max-h-[800px] bg-gray-100 rounded-2xl text-xl">
      <div>
        <div className="pl-4 pr-4 bg-violet-300 h-auto max-h-[700px] grid-row items-center rounded-2xl">
          <div key={id} className="mb-6 bg-violet-200 rounded-xl p-4">
            <header className="font-bold text-2xl pb-2">
              <h2>{title}</h2>
            </header>
            {todoRow.map((row) => (
              <div
                key={row.id}
                onClick={edited}
                className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2"
              >
                <input type="checkbox" checked={row.isCompleted} readOnly />
                <input
                  type="text"
                  defaultValue={row.name}
                  className="flex-1 border rounded px-2"
                />
                {row.trimeEnd && (<input
                  type="date"
                  defaultValue={row.trimeEnd.split("T")[0]}
                  className="border rounded px-2"
                />)}

              </div>

            ))}
          </div>

          <footer className=" grid grid-flow-col  items-center rounded-2xl p-2 pt-4 pb-4">
            {isFavorite === false && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>

            )}
            {isFavorite === true && (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-8 text-yellow-300 ">
                <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 cursor-pointer"
              onClick={toggle}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>

            {todoRow.filter((row) => row.idToDo === id).length ===
              todoRow.filter((row) => row.idToDo === id && row.isCompleted === true).length ? (
              <h2 className="bg-yellow-200 rounded-2xl flex justify-center items-center">
                Completed
              </h2>
            ) : (
              <h2 className="bg-yellow-200 rounded-2xl flex justify-center items-center">
                Pending
              </h2>
            )}
            <h2 className="pl-4">
              {todoRow
                .filter((row) => row.idToDo === id)          // primero por id
                .filter((row) => row.isCompleted === true)   // después por completados
                .length}/
              {todoRow.filter((row) => row.idToDo === id).length}
            </h2>
          </footer>
        </div>
      </div>
      <Modal className="text-4xl" isOpen={open} toggle={toggle}>
        <form onSubmit={handleSubmit}>
          <ModalHeader toggle={toggle}>Add Daily to {title}</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="name">Title</Label>
              <Input type="text" id="name"     required
                  name="name"
                 
                  onChange={handleChange} className="m-2">
              </Input>
              <Label for="trimeEnd">Date</Label>
              <Input type="date" name="trimeEnd" id="trimeEnd"  onChange={handleChange} className="border rounded m-2" />

            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit" onClick={toggle}>
              Save
            </Button>
            {/* <Button color="secondary" onClick={toggle}>Close</Button> */}
          </ModalFooter>
        </form>
      </Modal>
      <Modal isOpen={edit} edited={edited}>
        <ModalHeader edited={edited}>Edit Daily</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="text" id="description">

            </Input>
            <Label for="date">Date</Label>
            <Input type="date" id="date">
              {" "}
            </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={edited}>
            Save
          </Button>
          {/* <Button color="secondary" onClick={toggle}>Close</Button> */}
        </ModalFooter>

      </Modal>
    </div>
  );
};

export default Card;
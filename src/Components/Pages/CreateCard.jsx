import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewtodo } from "../../Store/todoSlice";

const CreateCard = () => {
    const [open, setOpen] = useState(false); 
    const toggle = () => setOpen(!open); 
    const todo = useSelector((state) => state.todo.alltodo);
const { status, error } = useSelector((state) => state.todo);

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [state, setState] = useState({
   "title": "",
    "isCompleted": false,
    "isFavorite": false

  });


  useEffect(() => {
    if (status === "failed" && error) {
      alert(error);
    }
  }, [status, error]);

const [errors, setErrors] = useState({
  title: "",
});

  const validate = (state, name) => {
    if (name === "title") {
      if (state.title === "")
        setErrors({ ...errors, title: "Title no puede estar vacío" });
      else {
        setErrors({ ...errors, title: "" });
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

  dispatch(fetchNewtodo(finalState))
    
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
    <div className="w-[450px] h-[253px] bg-gray-100 rounded-2xl text-xl flex justify-center items-center border-4 border-dashed border-purple-300 text-purple-400 cursor-pointer" onClick={toggle}>
      
       <h2>Add To-Do List</h2>
         <Modal className='text-4xl' isOpen={open} toggle={toggle} >
           <form onSubmit={handleSubmit}>
                   <ModalHeader  toggle={toggle}>
             New To-Do List
                   </ModalHeader>
                   <ModalBody>
             <FormGroup>
               <Label for="title">Title</Label>
               <Input type="text" id="title" 
                  required
                  name="title"
                  onChange={handleChange}> </Input>
             </FormGroup>
                   </ModalBody>
                   <ModalFooter>
             <Button color="success" onClick={toggle} type="submit">Create Todo</Button>
             {/* <Button color="secondary" onClick={toggle}>Close</Button> */}
                   </ModalFooter>
                   </form>
                 </Modal>
      </div>
    
  );
};



export default CreateCard;

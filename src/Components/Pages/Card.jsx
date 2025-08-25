import React, { useState } from "react";
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

const Card = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
    const [edit, setEdit] = useState(false);
  const edited = () => setEdit(!edit);
  return (
    <div className="w-[600px] h-auto  max-h-[800px] bg-gray-100 rounded-2xl text-xl">
      <div className="pl-4 pr-4 bg-violet-300 h-auto max-h-[700px] grid-row items-center rounded-2xl">
        <header className="font-bold pt-2 pl-6">
          <h2 >Title</h2>
        
        </header>
        <div className="overflow-y-auto max-h-[560px]  flex-1">
          <div  onClick={edited} className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div>
 <div className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div> <div className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div> <div className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div> <div className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div> <div className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div> <div className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div>
           <div className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div> <div className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div> <div className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div> <div className="newToDo bg-white flex items-center rounded-2xl p-2 m-2 border-2 border-gray-400 shadow-md gap-2">
            <input type="checkbox" />
            <input type="text" className="flex-1 border rounded px-2" />
            <input type="date" className="border rounded px-2" />
          </div>
          
        </div>
        <footer className=" grid grid-flow-col  items-center rounded-2xl p-2 pt-4 pb-4">
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
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>

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

          <h2 className="bg-yellow-200 rounded-2xl flex justify-center items-center">
            Pendiente
          </h2>
          <h2 className='pl-4' >2/6</h2>
        </footer>
      </div>
      <Modal className="text-4xl" isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Daily</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" id="title" className="m-2">
              {" "}
            </Input>
            <Label for="date">Date</Label>
            <Input type="date" className="border rounded m-2" />
            
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={toggle}>
            Save
          </Button>
          {/* <Button color="secondary" onClick={toggle}>Close</Button> */}
        </ModalFooter>
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

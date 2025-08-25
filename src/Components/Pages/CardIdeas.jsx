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

const CardIdeas = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [edit, setEdit] = useState(false);
  const edited = () => setEdit(!edit);
  return (
    <div className="">
      <form className="grid grid-cols-4 gap-2 w-full text-xl">
        {/* Filtro */}
        <h2 className="bg-pink-200 rounded-2xl pl-4 col-span-4">Ideas</h2>
        <div
          className="pb-2 pt-2 mb-4 mt-4 border-4 cursor-pointer border-dashed border-green-500 rounded-2xl p-1 col-span-4 flex justify-center text-green-500 font-bold text-xl"
          onClick={toggle}
        >
          {" "}
          New Row
        </div>
        {/* Encabezados */}

        <div className="font-bold text-center">Description</div>
        <div className="font-bold text-center">Detail</div>
        <div className="font-bold text-center">Edit</div>
        <div className="font-bold text-center">Delete</div>

        {/* Filas */}
        {Array.from({ length: 10 }).map((_, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <input
              type="text"
              className="border rounded p-1"
              placeholder="Description"
            />

            <input
              type="text"
              className="border rounded p-1"
              placeholder="Detail"
            />

            <button
             onClick={edited}
              type="button"
              className="bg-blue-500 text-white rounded px-2 py-1 hover:bg-blue-600 flex justify-center"
            >
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                />
              </svg>
            </button>
            <button
              type="button"
              className="bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600 flex justify-center"
            >
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
            </button>
          </React.Fragment>
        ))}
      </form>
      <Modal isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>New Idea</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="text" id="description">
              {" "}
            </Input>
              <Label for="detail">Detail</Label>
            <Input type="text" id="detail">
              {" "}
            </Input>
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
        <ModalHeader edited={edited}>Edit Idea</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="text" id="description">
              {" "}
            </Input>
            <Label for="detail">Detail</Label>
            <Input type="text" id="detail">
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

export default CardIdeas;

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from "reactstrap";

const NewCardNote = () => {
   const [open, setOpen] = useState(false); 
  const toggle = () => setOpen(!open);
  return (
    <div className="w-[450px] h-[253px] border-4 border-green-300 border-dashed rounded-2xl flex justify-center items-center text-green-400 cursor-pointer"  onClick={toggle}>
      
      <h2>New Note</h2>
      <Modal className="text-4xl" isOpen={open} toggle={toggle}>
            <ModalHeader  toggle={toggle}>
     New Note
            </ModalHeader>
            <ModalBody>
      <FormGroup>
        <Label for="title">Title</Label>
                             <Input type="text" id="title" className="m-2"> </Input>
                              <Label for="date">Date</Label>
                                   <Input type="date" className="border rounded m-2" />
        <Label for="description">Description</Label>
        <Input type="text" id="description"> </Input>
      </FormGroup>
            </ModalBody>
            <ModalFooter>
      <Button color="success" onClick={toggle}>Save</Button>
      {/* <Button color="secondary" onClick={toggle}>Close</Button> */}
            </ModalFooter>
          </Modal>
    </div>
  );
};

export default NewCardNote;

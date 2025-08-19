import React, { useState } from "react";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from "reactstrap";

const Dashboard = () => {
  const [open, setOpen] = useState(false); 
const toggle = () => setOpen(!open);
  return (
      <>
    <div className="bg-gray-400 flex flex-col items-center pt-4 pb-4 h-screen overflow-hidden">
      <div>
    
        <Button className="bg-gray-300 p-4 rounded-2xl" onClick={toggle}>Add</Button>
      </div>
    </div>
    <Modal  isOpen={open} toggle={toggle}>
      <ModalHeader  toggle={toggle}>
To-Do List
      </ModalHeader>
      <ModalBody>
<FormGroup>
  <Label for="description">Description</Label>
  <Input type="text" id="description"> </Input>
</FormGroup>
      </ModalBody>
      <ModalFooter>
<Button color="success" onClick={toggle}>Save</Button>
{/* <Button color="secondary" onClick={toggle}>Close</Button> */}
      </ModalFooter>
    </Modal>
    </>
  );
};

export default Dashboard;

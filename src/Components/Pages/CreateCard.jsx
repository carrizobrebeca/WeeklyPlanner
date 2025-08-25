import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from "reactstrap";

const CreateCard = () => {
    const [open, setOpen] = useState(false); 
    const toggle = () => setOpen(!open); 
  return (
    <div className="w-[450px] h-[253px] bg-gray-100 rounded-2xl text-xl flex justify-center items-center border-4 border-dashed border-purple-300 text-purple-400 cursor-pointer" onClick={toggle}>
      
       <h2>Add To-Do List</h2>
         <Modal className='text-4xl' isOpen={open} toggle={toggle}>
                   <ModalHeader  toggle={toggle}>
             New To-Do List
                   </ModalHeader>
                   <ModalBody>
             <FormGroup>
               <Label for="title">Title</Label>
               <Input type="text" id="title"> </Input>
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



export default CreateCard;

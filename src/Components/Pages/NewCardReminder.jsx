import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from "reactstrap";

const NewCardReminder = () => {
  //  const optionsArray = [
        
  //     { value: '1', label: '1' },
  //     { value: '2', label: '2' },
  //     { value: '3', label: '3' },
  //           { value: '4', label: '4' },
  //     { value: '5', label: '5' },
  //     { value: '6', label: '6' },
  //           { value: '7', label: '7' },
  //     { value: '8', label: '8' },
  //     { value: '9', label: '9' },
         
  //     { value: '10', label: '10' },
  //     { value: '11', label: '11' },

  //     { value: '12', label: '12' },
  //     { value: '13', label: '13' },
  //           { value: '14', label: '14' },
  //     { value: '15', label: '15' },
  //     { value: '16', label: '16' },
  //           { value: '17', label: '17' },
  //     { value: '18', label: '18' },
  //     { value: '19', label: '19' },
  //     { value: '20', label: '20' },
  //      { value: '21', label: '1' },
  //     { value: '22', label: '22' },
  //     { value: '23', label: '23' },
  //           { value: '24', label: '24' },
  //     { value: '25', label: '25' },
  //     { value: '26', label: '26' },
  //           { value: '27', label: '27' },
  //     { value: '28', label: '28' },
  //     { value: '9', label: '9' },
         
  //     { value: '10', label: '10' },
      
  //   ];
   const number = [
  "1", "2", "3", "4",
  "5", "6", "7", "8",
  "9", "10", "11", "12" , "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"
];

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const [open, setOpen] = useState(false); 
const toggle = () => setOpen(!open);
  return (
    <div className="w-[450px] h-[400px] flex justify-center  border-4 border-orange-300 border-dashed text-orange-300 rounded-2xl ">
      <div className="p-4 flex items-center cursor-pointer rounded-2xl" onClick={toggle}>
        <h2>New Reminder</h2>
        
      </div>
          <Modal  isOpen={open} toggle={toggle} className='text-4xl'>
      <ModalHeader  toggle={toggle}>
New Reminder
      </ModalHeader>
      <ModalBody>
<FormGroup>
  <Label for="title">Title</Label>
  <Input type="text" id="title" className="border rounded m-2"> </Input>
  <Label for="date">Date</Label>
      <Input type="date" className="border rounded m-2" />
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

export default NewCardReminder

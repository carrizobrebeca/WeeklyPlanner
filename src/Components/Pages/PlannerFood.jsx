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
const PlannerFood = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);
 const am = ["6:00","6:30" ,"7:00",  "7:30","8:00", "8:30","9:00", "9:30","10:00","10:30", "11:00", "11:30","12:00", "12:30"];
  const pm = [
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "18:00",
       "18:30",
    "19:00",
      "19:30",
      "20:00",
  ];
  const rest = ["20:30", "21:00", "21:30", "22:00", "22:30","23:00","23:30"];
  return (
    <div className=" ">
      <div className="text-left">
        <h2>Food</h2>
      </div>
      <div>
        <form className="text-2xl">
          {/* Grid principal con 2 columnas */}
          <div className="grid grid-cols-3 gap-8">
            {/* Columna izquierda */}
            <div className="bg-purple-200 rounded-2xl p-2">
              {am.map((a) => (
                <div key={a} className=" grid grid-cols-2 gap-2 mb-2">
                  <label className="flex items-center font-medium">{a}</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                     onClick={toggle}
                    key={a}
                  />
                  <div></div>
                  
                </div>
              ))}
            </div>

            {/* Columna derecha */}
            <div className="bg-pink-200 rounded-2xl p-2">
              {pm.map((p) => (
                <div key={p} className="grid grid-cols-2 gap-2 mb-2">
                  <label className="flex items-center font-medium">{p}</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                     onClick={toggle}
                    key={p}
                  />
                  <div></div>
                  
                </div>
              ))}
            </div>
            <div className="bg-yellow-200 rounded-2xl p-2">
              {rest.map((r) => (
                <div key={r} className="grid grid-cols-2 gap-2 mb-2">
                  <label className="flex items-center font-medium ">{r}</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-1 "
                     onClick={toggle}
                    key={r}
                  />
                  <div></div>
                  
                </div>
              ))}

              <div className="bg-green-300 p-2 rounded-2xl m-2">
                <h2>
                    HABITS
                </h2>
                <div className="p-2">
                     <input type="text" className="m-2 w-full">
                     </input>
                     <input type="text" className="m-2  w-full">
                     </input>
                     <input type="text" className="m-2  w-full "/><input type="text" className="m-2  w-full"/>
                     <input type="text" className="m-2  w-full" />
                </div>
             
              </div>
            </div>
          </div>
        </form>
      </div>
      <Modal className="text-4xl" isOpen={open} toggle={toggle}>
            <ModalHeader  toggle={toggle}>
     Edit Note
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
    </div>
  );
};

export default PlannerFood;

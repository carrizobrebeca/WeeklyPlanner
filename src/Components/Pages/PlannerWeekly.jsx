  // const am = ["6:00", "6:30", "7:00", "7:30", "8:00", "8:30", "9:00", "9:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30"];
import React, { useEffect, useState } from "react";
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
import { fetchPutweekly, fetchweekly } from "../../Store/weeklySlice";
import { useDispatch, useSelector } from "react-redux";
const PlannerWeekly = () => {
    const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
   const [edit, setEdit] = useState(false);
    const edited = () => setEdit(!edit);
    const weekly = useSelector((state) => state.weekly.allweekly);
  const { status} = useSelector((state) => state.weekly);
 const [selectedItem, setSelectedItem] = useState(null); // Item que vamos a editar
  const [newDay, setNewDay] = useState("");
  const [newTask, setNewTask] = useState("");


  useEffect(() => {
     if (status === "idle") {
      dispatch(fetchweekly());
    }
  }, [dispatch, status]);
const toMinutes = (hour) => {
  const [h, m] = hour.split(":").map(Number);
  return h * 60 + m;
};

const am = weekly.filter(item => {
  const min = toMinutes(item.hour);
  return min >= toMinutes("6:00") && min <= toMinutes("12:30");
});
const pm = weekly.filter(item => {
  const min = toMinutes(item.hour);
  return min >= toMinutes("13:00") && min <= toMinutes("20:00");
});
const rest = weekly.filter(item => {
  const min = toMinutes(item.hour);
  return min >= toMinutes("20:30") && min <= toMinutes("23:30");
});



  const dayOptions = [
    { value: "Mon", label: "Mon" },
    { value: "Tue", label: "Tue" },
    { value: "Wed", label: "Wed" },
    { value: "Thu", label: "Thu" },
    { value: "Fri", label: "Fri" },
    { value: "Sat", label: "Sat" },
    { value: "Sun", label: "Sun" },
  ];
const handleEditClick = (item) => {
    setSelectedItem(item);
    setNewDay(item.day || "");
    setNewTask(item.task || "");
    setOpen(true);
  };

  // Enviar PUT
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedItem) return;

    try {
      await dispatch(fetchPutweekly({
        hour: selectedItem.hour,
        day: newDay,
        task: newTask
      }));
      setOpen(false);
    } catch (err) {
      console.log("Error:", err);
    }
  };

  return (
    <div className=" ">
      <div className="text-left">
        <h2>Weekly planner</h2>
      </div>
      <div>
        <form className="text-2xl">
          {/* Grid principal con 2 columnas */}
          <div className="grid grid-cols-3 gap-8">
            {/* Columna izquierda */}
            <div className="bg-purple-200 rounded-2xl p-2">
              {am.map((item) => (
                <div key={item.id} className=" grid grid-cols-3 gap-2 mb-2" >
                  <label className="flex items-center font-medium">{item.hour}</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                    onClick={toggle}
                    key={item.day}
                    placeholder={item.day ?? ""}
                  />
                  <input
                    type="text"
                    className="border rounded px-3 py-1"
                    onClick={toggle}
                  key={item.task}
                    placeholder={item.task ?? ""}
                  />
                  <div></div>

                </div>
              ))}
            </div>

            {/* Columna derecha */}
            <div className="bg-pink-200 rounded-2xl p-2">
              {pm.map((item) => (
                <div key={item.id} className=" grid grid-cols-3 gap-2 mb-2" >
                  <label className="flex items-center font-medium">{item.hour}</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                    onClick={toggle}
                    key={item.day}
                    placeholder={item.day ?? ""}
                  />
                  <input
                    type="text"
                    className="border rounded px-3 py-1"
                    onClick={toggle}
                  key={item.task}
                    placeholder={item.task ?? ""}
                  />
                  <div></div>

                </div>
              ))}
            </div>
            <div className="bg-yellow-200 rounded-2xl p-2">
              {rest.map((item) => (
                <div key={item.id} className=" grid grid-cols-3 gap-2 mb-2" >
                  <label className="flex items-center font-medium">{item.hour}</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                    onClick={toggle}
                    key={item.day}
                    placeholder={item.day ?? ""}
                  />
                  <input
                    type="text"
                    className="border rounded px-3 py-1"
                    onClick={toggle}
                  key={item.task}
                    placeholder={item.task ?? ""}
                  />
                  <div></div>

                </div>
              ))}
              <div className="bg-green-300 p-2 rounded-2xl m-2">
                <div className="flex justify-between ">
                  <div>
                    <h2 className="pl-4 pt-4 cursor-pointer" onClick={edited}>
                      TITLE
                    </h2>
                  </div>
   <div className="flex justify-center bg-orange-100 pl-2 pr-2  rounded-full" >
                  <button className=" text-4xl">
                    «
                  </button>
                  <h2 className="text-base pl-4 pr-4 flex items-cemter pt-7">
                    Pages 
                  </h2>
                  <button className="text-4xl ">
                    »                </button>
                </div>
                  
                </div>
             

                <div className="p-2">
                  <input type="text" className="m-2 w-full">
                  </input>
                  <input type="text" className="m-2  w-full">
                  </input>
                  <input type="text" className="m-2  w-full " /><input type="text" className="m-2  w-full" />
                  <input type="text" className="m-2  w-full" />
                  <input type="text" className="m-2  w-full" />
                  <input type="text" className="m-2  w-full" />
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>
      <Modal className="text-4xl" isOpen={open} toggle={toggle}>
    <form onSubmit={handleSubmit}>
        <ModalHeader toggle={toggle}>
          Edit Row
        </ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="task">Task</Label>
            <Input type="text"  id="task"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}> </Input>
            <Label for="day">Day</Label>
            <select className="flex justify-center pb-2" value={newDay}
                onChange={(e) => setNewDay(e.target.value)}>
               {dayOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" type="submit" onClick={toggle}>Save</Button>
          {/* <Button color="secondary" onClick={toggle}>Close</Button> */}
        </ModalFooter>
        </form>
      </Modal>
       <Modal className="text-4xl" isOpen={edit} edited={edited}>
        <ModalHeader edited={edited}>
          Edit Title
        </ModalHeader>
        <ModalBody>
          <FormGroup>

            <Label for="description">Title</Label>
            <Input type="text" id="description"> </Input>
            
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={edited}>Save</Button>
          {/* <Button color="secondary" onClick={toggle}>Close</Button> */}
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PlannerWeekly;

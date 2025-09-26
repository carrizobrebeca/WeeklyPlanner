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
import { fetchNewreminderRowId } from "../../Store/reminderRowSlice";
import { useDispatch, useSelector } from "react-redux";

const CardReminder = ({id, date}) => {
     const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [edit, setEdit] = useState(false);
  const edited = () => setEdit(!edit);
  const allreminderRow = useSelector((state) => state.reminderRow.allreminderRow);
const reminderStatus = useSelector((state) => state.reminderRow.status);


useEffect(() => {
  if (reminderStatus === "idle") {
    dispatch(fetchNewreminderRowId(id));
  }
}, [dispatch, reminderStatus]);
  const number = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="w-[450px] h-[400px] bg-white  border-t-4 border-orange-400 rounded-2xl ">

      
      <div className="p-4 flex flex-col justify-between h-full rounded-2xl">
        <header className="flex justify-startfont-bold pl-2 text-xl  rounded-2xl p-2" key={id}>
          <div className="flex items-center pr-4 pl-4  text-orange-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-10"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
              />
            </svg>
          </div>
          <h2 className="text-red-400 pr-4">  {new Date(date).toLocaleDateString("en-US", { weekday: "long" })}</h2>
          <h2 className="text-blue-400" >{date.split("-")[2]}</h2>
        </header>
        <div className="h-[240px] overflow-y-auto">
          <div
            onClick={edited}
            className="newdaily border-l-4 border-green-500 p-2 m-2  bg-green-200 text-green-400 "
          >
            <h2>{allreminderRow.name}</h2>
            <h2 className="text-green-500 ">{allreminderRow.timeStart
}</h2>
          </div>

         
        </div>
        <footer className="flex bg-white items-right rounded-2xl p-2 gap-4">
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
        </footer>
      </div>
      <Modal className="text-4xl" isOpen={open} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Daily</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="text" id="title" className="border rounded m-2">
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
      <Modal className="text-4xl" isOpen={edit} edited={edited}>
              <ModalHeader edited={edited}>Edit Daily</ModalHeader>
              <ModalBody>
                <FormGroup>
                   
                  <Label for="title">Title</Label>
                  <Input type="text" id="title">
                    
                  </Input>
                  <Label for="hour" className="flex justify-start">Hour:</Label>
                  <Label for="from">From</Label>
                  <Input type="time" id="from">
                  
                  </Input><Label for="to">To</Label>
                  <Input type="time" id="to"></Input>
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

export default CardReminder;

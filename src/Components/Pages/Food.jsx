import React, { useEffect, useMemo, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { fetchFood } from "../../Store/foodSlice";

const Meal = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const [edit, setEdit] = useState(false);
  const edited = () => setEdit(!edit);

  const allfood = useSelector((state) => state.food.allfood);
  const status = useSelector((state) => state.food.status);

  const [selectedMeal, setSelectedMeal] = useState(null);
  const handleEditClick = (meal) => {
    setSelectedMeal(meal);  // guardo el objeto que clickeaste
    setEdit(true);          // abro modal de edición
  };

  const [selectedHour, setSelectedHour] = useState(null);
  const handleAddClick = (hour) => {
    setSelectedHour(hour);
    setOpen(true);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchFood());
    }
  }, [dispatch, status]);

  // 👇 Agrupo los alimentos por "hour"
  const mealsByHour = useMemo(() => {
    return allfood.reduce((acc, item) => {
      if (!acc[item.hour]) acc[item.hour] = [];
      acc[item.hour].push(item);
      return acc;
    }, {});
  }, [allfood]);
  return (
    <div className="grid grid-cols-3 gap-6">
      {Object.entries(mealsByHour).map(([hour, meals]) => (
        <div
          key={hour}
          className="w-[450px] h-[400px] bg-white border-t-4 border-orange-400 rounded-2xl"
        >



          <div className="p-4 flex flex-col justify-between h-full rounded-2xl">




            <header className="flex justify-startfont-bold pl-2 text-xl  rounded-2xl p-2">
              <div className="flex items-center pr-4 pl-4  text-orange-400">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
                </svg>

              </div>
              <h2 className="text-red-400">{hour}</h2>


            </header>
            <div className="h-[240px] overflow-y-auto">
              {meals.map((m) => (

                <div
                  key={m.id}
                  onClick={() => handleEditClick(m)}
                  className="border-l-4 border-green-500 p-2 m-2 bg-green-200 text-green-700 rounded"
                >
                  <h2>{m.meal}</h2>
                </div>
              ))}
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
                 onClick={() => handleAddClick(hour)}

              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </footer>

          </div>

        </div>))}
      <Modal className="text-4xl" isOpen={open} toggle={toggle} backdrop="static">
        <ModalHeader toggle={toggle}  >{selectedHour}</ModalHeader>
        <ModalBody>
          <FormGroup>

            <Label for="title">Add Meal</Label>
          
            <Input type="text" id="title" className="border rounded m-2">
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
      <Modal className="text-4xl" isOpen={edit} edited={edited}>
        <ModalHeader edited={edited}>{selectedMeal?.hour}</ModalHeader>
        <ModalBody>
          <FormGroup>
         
            <Label for="meal">Edit Meal</Label>
            <Input type="meal" id="title" placeholder={selectedMeal?.meal}>
            </Input>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="success" onClick={edited}>
            Save
          </Button>
          <Button color="secondary" onClick={edited}>Delete</Button>
        </ModalFooter>
      </Modal></div>
  );
};

export default Meal;

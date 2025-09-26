import React, { useEffect, useState, useMemo } from "react";
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
            {/* Header */}
            <header className="flex items-center font-bold pl-2 text-xl rounded-2xl p-2">
              <div className="flex items-center pr-4 pl-4 text-orange-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                  />
                </svg>
              </div>
              <h2 className="text-red-400">{hour}</h2>
            </header>

            {/* Lista de comidas */}
            <div className="h-[240px] overflow-y-auto">
              {meals.map((m) => (
                <div
                  key={m.id}
                  onClick={edited}
                  className="border-l-4 border-green-500 p-2 m-2 bg-green-200 text-green-700 rounded"
                >
                  <h2>{m.meal}</h2>
                </div>
              ))}
            </div>

            {/* Footer con botones */}
            <footer className="flex bg-white items-right rounded-2xl p-2 gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </footer>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Meal;

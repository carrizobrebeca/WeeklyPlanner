import React from "react";
import { useNavigate } from "react-router-dom";

const Planner = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-pink-100 flex  flex-col items-center  pt-4 pb-4 h-screen overflow-hidden">
      <div className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-2xl  pl-4 pr-4  aspect-square">
        <div
          className="bg-teal-300 flex items-center justify-center rounded-2xl"
          onClick={() => navigate("/home")}
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
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </div>
             <div className="bg-gray-300 flex items-center justify-center rounded-2xl">
         <h2>Planner</h2>
        </div>
        <div className="bg-orange-300 flex items-center justify-center rounded-2xl">
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
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
            />
          </svg>
        </div>

   
      </div>
      <div className=" w-full max-w-2xl  pl-4 pr-4 ">
        <h2 className="bg-yellow-200  p-4 border-2 border-yellow-300">Planner</h2>
      </div>
      <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div>
      <div className=" pt-4 w-full max-w-2xl  pl-4 pr-4 flex justify-center items-center ">
        <button className="bg-yellow-200 rounded-2xl p-4 flex justify-center items-center border-2 border-yellow-300">
          Save
        </button>
      </div>
    </div>
  );
};

export default Planner;

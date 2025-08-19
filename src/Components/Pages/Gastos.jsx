import React from "react";
import { useNavigate } from "react-router-dom";

const Gastos = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-pink-100 flex  flex-col items-center  pt-4 pb-4 h-screen overflow-hidden">
      

      <div className="w-full max-w-2xl pl-4 pr-4 flex justify-between items-center gap-4 pb-4 ">
        <div
          className="bg-teal-300 flex items-center justify-center rounded-2xl p-4"
          onClick={() => navigate("/home")}
        >
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
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </div>
        <div className="bg-gray-300 flex items-center justify-center rounded-2xl p-4 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
</svg>

        </div>

        <div className="bg-purple-300 flex items-center justify-center rounded-2xl p-4">
          <h2 className="size-10 flex justify-center items-center font-bold">Jan</h2>
        </div>
      </div>
      <div className=" w-full max-w-2xl  pl-4 pr-4 ">
        <h2 className="bg-yellow-200  p-4 border-2 border-yellow-300">January</h2>
      </div>
      <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div>
       <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div>
       <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div>
       <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div>
       <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div> <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div>
       <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div>
       <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div> <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div> <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div> <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
      </div> <div className="w-full max-w-2xl  pl-4 pr-4 ">
        <input className=" p-4 flex justify-center items-center border-2 border-yellow-300 w-full max-w-2xl  pl-4 pr-4 "></input>
     
      </div>
    
        
    
      
    </div>
  );
};

export default Gastos;

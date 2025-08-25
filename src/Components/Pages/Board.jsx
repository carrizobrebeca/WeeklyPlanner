import React, { useEffect, useState } from "react";
import Card from "./Card";
import CreateCard from "./CreateCard";
import CardNote from "./CardNote";
import PlannerWeekly from "./PlannerWeekly";
import Ideas from "./Ideas";
import CardGastos from "./CardGastos";
import CardReminder from "./CardReminder";
import CardIdeas from "./CardIdeas";
import CardCalendar from "./CardCalendar";
import PlannerFood from "./PlannerFood";
import NewCardReminder from "./NewCardReminder";
import NewCardNote from "./NewCardNote";

const Board = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [activeTab, setActiveTab] = useState("dash");
  // Actualizar cada segundo

    const phrases = [
    "Carpe Diem.-",
    "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.- Nelson Mandela",
    "If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles.- Wayne Dyer",
    "Believe you can and you're halfway there.- Theodore Roosevelt -",
    "Learn the rules like a pro, so you can break them like an artist.- Pablo Picasso -",
    "Do one thing every day that scares you.- Eleanor Roosevelt -",
    "I didn't get there by wishing for it or hoping for it, but by working for it.- Estée Lauder -",
     "Even if you are on the right track, you'll get run over if you just sit there.- Will Rogers -",
     "Success is not final, failure is not fatal: it is the courage to continue that counts.- Winston Churchill-",
  ];

  
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 20000); // 20 segundos

    return () => clearInterval(interval); // limpiar intervalo al desmontar
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formatos
  const formattedDate = dateTime.toLocaleDateString("es-AR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = dateTime.toLocaleTimeString("es-AR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header className="bg-purple-400 text-white p-4">
        <h1 className="text-xl font-bold">Hola Rebeca</h1>
        <div className="text-right">
          <p className="text-sm capitalize">{formattedDate}</p>
          <p className="text-lg font-semibold">{formattedTime}</p>
        </div>
      </header>

      {/* MAIN */}
      <div className="flex flex-1">
        {/* SIDEBAR LEFT */}
        <aside className="hidden lg:flex lg:w-64 bg-gray-100 p-4 border-r">
          <nav className="flex flex-col gap-2 w-full">
            <button
              className="bg-yellow-300 rounded-2xl p-4 flex justify-center items-center"
              onClick={() => setActiveTab("planner")}
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
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>
            </button>
            <button
              className="bg-red-300 rounded-2xl p-4 flex justify-center items-center"
              onClick={() => setActiveTab("todo")}
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
                  d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </button>
            <button
              className="bg-blue-300 rounded-2xl p-4 flex justify-center items-center"
              onClick={() => setActiveTab("reminder")}
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
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                />
              </svg>
            </button>
            <button
              className="bg-pink-300 rounded-2xl p-4 flex justify-center items-center"
              onClick={() => setActiveTab("ideas")}
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
                  d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
              </svg>
            </button>
            <button
              className="bg-green-300 rounded-2xl p-4 flex justify-center items-center"
              onClick={() => setActiveTab("food")}
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
                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                />
              </svg>
            </button>

            <button
              className="bg-teal-300 rounded-2xl p-4 flex justify-center items-center"
              onClick={() => setActiveTab("gastos")}
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
                  d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                />
              </svg>
            </button>
            <button
              className="bg-orange-300 rounded-2xl p-4 flex justify-center items-center"
              onClick={() => setActiveTab("notes")}
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
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
             
            </button>
             <button
                className="bg-purple-300 rounded-2xl p-4 flex justify-center items-center"
                onClick={() => setActiveTab("schedule")}
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
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
              </button>
          </nav>
        </aside>

        {/* CONTENT */}
        <main className="flex-1 p-6 bg-gray-50">
            {/* NAVBAR SM */}
          <h2 className="text-2xl font-semibold mb-2 mt-2">
            Contenido Principal
          </h2>
          <p className="mb-2 text-right text-xl">
              {phrases[index]} 
          </p>
          <div className="flex justify-start">
            <p className="mb-4">
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
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </p>
            <p className="mb-4">
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
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
            </p>
          </div>
           {activeTab === "dash" && (
            <div className="h-[1000px] bg-gray-100 shadow rounded-xl p-4 flex justify-start gap-4"></div>
          )}
           {activeTab === "planner" && (
            <div className="h-[1000px] bg-gray-100 shadow rounded-xl p-4 flex justify-start gap-4">
                <PlannerWeekly />
                
                
            </div>
          )}

          {activeTab === "todo" && (
             <div className="w-[2100px] h-[800px]  bg-gray-100 shadow rounded-xl p-4 overflow-x-auto">
   
    <div className="flex gap-6 ">
  <div className="flex-shrink-0 "><Card /></div>
  <div className="flex-shrink-0"><Card /></div>
  <div className="flex-shrink-0"><Card /></div>
  <div className="flex-shrink-0"><Card /></div>
  <div className="flex-shrink-0"><Card /></div>
  <div className="flex-shrink-0"><CreateCard /></div>
</div>
  
  </div>
          )}
 {activeTab === "reminder" && (
            <div className="h-[1000px] bg-gray-100 shadow rounded-xl p-4 flex justify-start gap-4">
              <CardReminder />
               <NewCardReminder />
              
            </div>
          )}
          {activeTab === "ideas" && (
            <div className="h-[1000px] bg-gray-100 shadow rounded-xl p-4 flex justify-start gap-4">

                 <CardIdeas />
            </div>
          )}
           {activeTab === "food" && (
            <div className="h-[1000px] bg-gray-100 shadow rounded-xl p-4 flex justify-start gap-4">
              <PlannerFood />
            </div>
          )}
           {activeTab === "gastos" && (
            <div className="h-[1000px] bg-gray-100 shadow rounded-xl p-4 pb-4 flex justify-start gap-4  overflow-y-auto">
               <CardGastos />
            </div>
          )}
           {activeTab === "notes" && (
            <div className="h-[1000px] bg-gray-100 shadow rounded-xl p-4 flex justify-start gap-4">
 <CardNote />
 <CardNote />
 <NewCardNote />
              

            </div>
          )}
           {activeTab === "schedule" && (
            <div className="h-[1000px] bg-gray-100 shadow rounded-xl p-4 flex justify-start gap-4">
               <CardCalendar />
            </div>
          )}
        </main>

        {/* SIDEBAR RIGHT */}
        <aside className="hidden xl:flex xl:w-72 bg-gray-100 p-4 border-l">
          <div className="flex flex-col gap-2 w-full">
            <div className="p-2 bg-white rounded shadow">DAILY</div>
            <div className="p-2 bg-white rounded shadow">KEEKLY</div>
            <div className="p-2 bg-white rounded shadow">MONTHLY</div>
          </div>
        </aside>
      </div>

      {/* FOOTER */}
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>© 2025 Rebeca Carrizo Bourlot</p>
      </footer>
    </div>
  );
};

export default Board;

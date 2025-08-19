import React from 'react'

const Ideas = () => {

const am = ["6 A.M", "7 A.M", "8 A.M", "9 A.M", "10 A.M", "11 A.M", "12 P.M"];
  const pm = [
    "13 A.M",
    "14 A.M",
    "15 A.M",
    "16 A.M",
    "17 A.M",
    "18 A.M",
    "19 P.M",
  ];
  const rest = ["20 A.M", "21 A.M", "22 A.M", "23 A.M"];
  return (
    <div className=" ">
      <div className="text-left">
        <h2>Proyects - Ideas</h2>
      </div>
      <div>
        <form className="text-2xl">
          {/* Grid principal con 2 columnas */}
          <div className="grid grid-cols-3 gap-8">
            {/* Columna izquierda */}
            <div className="bg-purple-200 rounded-2xl p-2">
              {am.map((a) => (
                <div key={a} className=" grid grid-cols-2 gap-2 mb-4">
                  <label className="flex items-center font-medium">{a}</label>
                  <input
                    type="checkbox"
                    className="border rounded px-2 py-1"
                    
                  />
                  <div></div>
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                    
                  />
                </div>
              ))}
            </div>

            {/* Columna derecha */}
            <div className="bg-pink-200 rounded-2xl p-2">
              {pm.map((p) => (
                <div key={p} className="grid grid-cols-2 gap-2 mb-4">
                  <label className="flex items-center font-medium">{p}</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                    
                  />
                  <div></div>
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                    
                  />
                </div>
              ))}
            </div>
            <div className="bg-yellow-200 rounded-2xl p-2">
              {rest.map((r) => (
                <div key={r} className="grid grid-cols-2 gap-2 mb-4">
                  <label className="flex items-center font-medium ">{r}</label>
                  <input
                    type="text"
                    className="border rounded px-2 py-1 "
                    
                  />
                  <div></div>
                  <input
                    type="text"
                    className="border rounded px-2 py-1"
                    
                  />
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
    </div>
  );
}

export default Ideas
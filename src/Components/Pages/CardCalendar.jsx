import React from 'react'
 const months = [
  "Enero", "Febrero", "Marzo", "Abril",
  "Mayo", "Junio", "Julio", "Agosto",
  "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

const days = ["L", "M", "X", "J", "V", "S", "D"];
function getMonthDays(year, month) {
  const firstDay = new Date(year, month, 1).getDay(); // 0=Domingo, 1=Lunes...
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Ajuste: queremos que la semana empiece en Lunes (0=Lunes)
  const offset = firstDay === 0 ? 6 : firstDay - 1;

  const daysArray = Array(offset).fill(null); // espacios vacíos
  for (let d = 1; d <= totalDays; d++) {
    daysArray.push(d);
  }
  return daysArray;
}
const CardCalendar = () => {
const year = new Date().getFullYear();
  return (
   <div className="grid grid-cols-6 grid-rows-3 gap-4 p-4">
      {months.map((month, i) => {
        const daysArray = getMonthDays(year, i);
        return (
          <div key={i} className="border rounded-lg shadow p-2 bg-white">
            <h3 className="text-center font-bold mb-2 text-sm">
              {months[i]} {year}
            </h3>

            {/* Encabezado de días */}
            <div className="grid grid-cols-7 text-xs font-bold text-center">
              {days.map((d, idx) => (
                <div key={idx}>{d}</div>
              ))}
            </div>

            {/* Días del mes */}
            <div className="grid grid-cols-7 text-xs text-center">
              {daysArray.map((d, idx) => (
                <div key={idx} className="p-1">
                  {d ? d : ""}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardCalendar

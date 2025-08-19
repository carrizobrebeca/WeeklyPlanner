import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Components/Views/Landing";
import Home from "./Components/Views/Home";
import Notes from "./Components/Pages/Notes";
import ToDo from "./Components/Pages/ToDo";
import Schedule from "./Components/Pages/Schedule";
import Planner from "./Components/Pages/Planner";
import Gastos from "./Components/Pages/Gastos";
import Reminder from "./Components/Pages/Reminder";
import Tablero from "./Components/Pages/Tablero";
import Dashboard from "./Components/Pages/Dashboard";
import Board from "./Components/Pages/Board";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/reminder" element={<Reminder />} />
        <Route path="/tablero" element={<Tablero />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/board" element={<Board />} />
        <Route path="/todo" element={<ToDo />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

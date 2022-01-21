import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import ToDo from "./Components/ToDo";
import Timer from "./Components/Timer";
import Pomodoro from "./Components/Pomodoro ";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ToDo />} />
        <Route path="ToDo" element={<ToDo />} />
        <Route path="Pomodoro" element={<Pomodoro />} />
        <Route path="Timer" element={<Timer />} />
      </Route>
    </Routes>
  );
};

export default App;

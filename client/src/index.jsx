import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ToDo from "./Components/ToDo";
import Pomodoro from "./Components/Pomodoro ";
import Timer from "./Components/Timer";

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="ToDo" element={<ToDo />} />
          <Route path="Timer" element={<Timer />} />
          <Route path="Pomodoro" element={<Pomodoro />} />
        </Routes>
      </Router>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

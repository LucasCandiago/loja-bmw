import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/signup";
import YearOrder from "./pages/yearOrder";
import PriceOrder from "./pages/priceOrder";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/pages/signup" element={<Signup />} />
        <Route path="/" element={<App />} />
        <Route path="/pages/yearOrder" element={<YearOrder />} />
        <Route path="/pages/priceOrder" element={<PriceOrder />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

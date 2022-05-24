import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";

import Expenses from "./pages/Expenses";
import Invoices from "./pages/Invoices";
import Invoice from "./pages/Invoice";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={<p style={{ padding: "1rem" }}>Select an invoice</p>}
            />
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>
          <Route path="*" element={<main>There's nothing here!</main>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

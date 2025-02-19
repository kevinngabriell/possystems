import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from "./client/Order";
import ConfirmOrder from "./client/ConfirmOrder";

function App() {
  return (

      <Routes>
        <Route path="/order/table/:tableId" element={<Order />} />
        <Route path="/confirmorder/table/:tableId" element={<ConfirmOrder />} />
      </Routes>

  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Order from "./client/Order";
import ConfirmOrder from "./client/ConfirmOrder";
import Login from "./backoffice/Login";
import OrderBO from "./backoffice/OrderBO";
import Dashboard from "./backoffice/Dashboard";

function App() {
  return (
      <Routes>
        <Route path="/order/table/:tableId" element={<Order />} />
        <Route path="/confirmorder/table/:tableId" element={<ConfirmOrder />} />
        
        <Route path="/" element={<Login/>}/>
        <Route path="/BO/order" element={<OrderBO/>}/>
        <Route path="/BO/dashboard" element={<Dashboard/>}/>
      </Routes>

  );
}

export default App;

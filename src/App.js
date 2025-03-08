import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConfirmOrder from "./client/ConfirmOrder";
import Login from "./backoffice/Login";
import OrderBO from "./backoffice/OrderBO";
import Dashboard from "./backoffice/Dashboard";
import Sales from "./backoffice/Sales";
import Stocks from "./backoffice/Stocks";
import Rnd from "./backoffice/RnD";
import Order from "./client/Order";
import Menu from "./backoffice/Menu";

function App() {
  return (
      <Routes>
        <Route path="/order/table/:tableId" element={<Order/>} />
        <Route path="/confirmorder/table/:tableId" element={<ConfirmOrder />} />
        
        <Route path="/" element={<Login/>}/>
        <Route path="/BO/order" element={<OrderBO/>}/>
        <Route path="/BO/dashboard" element={<Dashboard/>}/>
        <Route path="/BO/sales" element={<Sales/>}/>
        <Route path="/BO/menu" element={<Menu/>}/>
        <Route path="/BO/stocks" element={<Stocks/>}/>
        <Route path="/BO/RnD" element={<Rnd/>}/>
      </Routes>

  );
}

export default App;

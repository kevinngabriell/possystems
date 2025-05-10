import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ConfirmOrder from "./client/ConfirmOrder";
import Login from "./backoffice/Login";
import OrderBO from "./backoffice/Order";
import Dashboard from "./backoffice/Dashboard";
import Stocks from "./backoffice/Stocks";
import Rnd from "./backoffice/Table";
import Order from "./client/Order";
import Menu from "./backoffice/Menu";
import Table from "./backoffice/Table";
import Inventory from "./backoffice/Inventory";
import Report from "./backoffice/Report";
import Settings from "./backoffice/Settings";

function App() {
  return (
      <Routes>
        <Route path="/order/table/:tableId" element={<Order/>} />
        <Route path="/confirmorder/table/:tableId" element={<ConfirmOrder />} />
        
        <Route path="/" element={<Login/>}/>
        <Route path="/BO/order" element={<OrderBO/>}/>
        <Route path="/BO/dashboard" element={<Dashboard/>}/>
        <Route path="/BO/orderDashboard" element={<OrderBO/>}/>
        <Route path="/BO/menu" element={<Menu/>}/>
        <Route path="/BO/stocks" element={<Stocks/>}/>
        <Route path="/BO/table" element={<Table/>}/>
        <Route path="/BO/inventory" element={<Inventory/>}/>
        <Route path="/BO/report" element={<Report/>}/>
        <Route path="/BO/setting" element={<Settings/>}/>
      </Routes>

  );
}

export default App;

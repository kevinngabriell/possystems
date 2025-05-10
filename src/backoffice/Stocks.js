import { useNavigate } from "react-router-dom";
import LeftNavBar from "../components/LeftNavBar";

import Draggable from 'react-draggable';
import React, { useState } from 'react';

function updateTablePosition(id, x, y) {
    // Kirim ke API
    console.log(x);
  }

const Table = ({ table, onClick }) => (
    
    <Draggable onStop={(e, data) => {
        updateTablePosition(table.id, data.x, data.y);
      }}>
      <div
        onClick={() => onClick(table.id)}
        style={{
          position: 'absolute',
          
          left: table.x,
          top: table.y,
          width: 60,
          height: 60,
          borderRadius: '8px',
          backgroundColor: table.status === 'sold' ? 'red' : 
                           table.status === 'selected' ? 'yellow' : 
                           'green',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }}
      >
        {table.id}
      </div>
    </Draggable>
  );
  
  const Stocks = () => {
    const [tables, setTables] = useState([
      { id: 'T-1', x: 100, y: 100, status: 'available' },
      { id: 'T-2', x: 200, y: 100, status: 'sold' },
      { id: 'T-3', x: 300, y: 100, status: 'available' }
    ]);
  
    const handleClick = (id) => {
      setTables(prev =>
        prev.map(t => t.id === id ? {
          ...t,
          status: t.status === 'available' ? 'selected' :
                  t.status === 'selected' ? 'available' : t.status
        } : t)
      );
    };
  
    return (
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
        {tables.map(table => (
          <Table key={table.id} table={table} onClick={handleClick} />
        ))}
      </div>
    );
  };
  
  export default Stocks;
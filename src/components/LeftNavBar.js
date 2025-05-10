import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import dashboardIconActive from "../assets/DashboardActive.png";
import menuIcon from "../assets/Menu.png";
import orderIcon from "../assets/Orders.png";
import tableIcon from "../assets/Table.png";
import inventoryIcon from "../assets/Inventory.png";
import reportIcon from "../assets/Report.png";
import settingIcon from "../assets/Settings.png";
import { useState } from "react";


function LeftNavBar({activeMenu}){
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/')
    } 

    const handleDashboard = () => {
        navigate('/BO/Dashboard')
    }

    const handleSales = () => {
        navigate('/BO/sales')
    }

    const handleMenu = () => {
        navigate('/BO/menu')
    }

    const handleStocks = () => {
        navigate('/BO/stocks')
    }

    const handleRnD = () => {
        navigate('/BO/rnd')
    }

    const menuItems = [
        { label: 'Dashboard', icon: dashboardIconActive, handler: handleDashboard },
        { label: 'Menu', icon: menuIcon, handler: handleMenu },
        { label: 'Orders', icon: orderIcon, handler: handleSales },
        { label: 'Table', icon: tableIcon, handler: handleRnD },
        { label: 'Inventory', icon: inventoryIcon, handler: handleStocks },
        { label: 'Report', icon: reportIcon, handler: handleStocks },
        { label: 'Settings', icon: settingIcon, handler: handleStocks },
        { label: 'Logout', icon: null, handler: handleLogout, isFontAwesome: true },
    ];

    return(
        <div className="leftnavbar">
            <ul className="leftnavbar-list">
                {menuItems.map((item) => (
                    <li
                    key={item.label}
                    onClick={() => {
                        // setActiveMenu(item.label);
                        item.handler();
                    }}
                    className={activeMenu === item.label ? 'active' : ''}
                    >
                    {item.isFontAwesome ? (
                        <FontAwesomeIcon icon={faSignOut} />
                    ) : (
                        <img src={item.icon} />
                    )}
                    {item.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LeftNavBar;
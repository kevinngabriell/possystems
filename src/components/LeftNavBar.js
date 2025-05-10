import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import dashboardIconActive from "../assets/DashboardActive.png";
import dashboardIcon from "../assets/Dashboard.png";
import menuIconActive from "../assets/MenuActive.png";
import menuIcon from "../assets/Menu.png";
import orderIconActive from "../assets/OrdersActive.png";
import orderIcon from "../assets/Orders.png";
import tableIconActive from "../assets/TableActive.png";
import tableIcon from "../assets/Table.png";
import inventoryIconActive from "../assets/InventoryActive.png";
import inventoryIcon from "../assets/Inventory.png";
import reportIconActive from "../assets/ReportActive.png";
import reportIcon from "../assets/Report.png";
import settingIconActive from "../assets/SettingsActive.png";
import settingIcon from "../assets/Settings.png";


function LeftNavBar({activeMenu}){
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/')
    } 

    const handleDashboard = () => {
        navigate('/BO/Dashboard')
    }

    const handleOrder = () => {
        navigate('/BO/orderDashboard')
    }

    const handleMenu = () => {
        navigate('/BO/menu')
    }

    const handleStocks = () => {
        navigate('/BO/stocks')
    }

    const handleInventory = () => {
        navigate('/BO/inventory')
    }

    const handleTable = () => {
        navigate('/BO/table')
    }

    const handleReport = () => {
        navigate('/BO/report')
    }

    const handleSettings = () => {
        navigate('/BO/setting')
    }

    const menuItems = [
        { label: 'Dashboard', activeIcon: dashboardIconActive, icon: dashboardIcon, handler: handleDashboard },
        { label: 'Menu', activeIcon: menuIconActive, icon: menuIcon, handler: handleMenu },
        { label: 'Orders', activeicon: orderIconActive,  icon: orderIcon, handler: handleOrder },
        { label: 'Table', activeIcon: tableIconActive, icon: tableIcon, handler: handleTable },
        { label: 'Inventory', activeIcon: inventoryIconActive, icon: inventoryIcon, handler: handleInventory },
        { label: 'Report', activeIcon: reportIconActive, icon: reportIcon, handler: handleReport },
        { label: 'Settings', activeIcon: settingIconActive, icon: settingIcon, handler: handleSettings },
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
                        <img src={activeMenu === item.label ? item.activeIcon : item.icon} alt={item.label} />
                    )}
                    {item.label}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default LeftNavBar;
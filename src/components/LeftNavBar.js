import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faMoneyBill1Wave } from "@fortawesome/free-solid-svg-icons/faMoneyBill1Wave";
import { faRectangleList } from "@fortawesome/free-solid-svg-icons/faRectangleList";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons/faWarehouse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function LeftNavBar(){
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

    return(
        <div className="leftnavbar">
            <ul className="leftnavbar-list">
                <li onClick={handleDashboard}>
                    <FontAwesomeIcon icon={faHome}/>
                    Dashboard
                </li>
                <li onClick={handleSales}> 
                    <FontAwesomeIcon icon={faMoneyBill1Wave}/>
                    Menu
                </li>
                <li onClick={handleMenu}>
                    <FontAwesomeIcon icon={faRectangleList}/>
                    Orders
                </li>
                <li onClick={handleRnD}>
                    Table
                </li>
                <li onClick={handleStocks}>
                    <FontAwesomeIcon icon={faWarehouse}/>
                    Inventory
                </li>
                <li onClick={handleStocks}>
                    <FontAwesomeIcon icon={faWarehouse}/>
                    Report
                </li>
                <li onClick={handleStocks}>
                    <FontAwesomeIcon icon={faWarehouse}/>
                    Settings
                </li>
                <li onClick={handleLogout}>
                    <FontAwesomeIcon icon={faSignOut}/>
                    Logout
                </li>
            </ul>
        </div>
    )
}

export default LeftNavBar;
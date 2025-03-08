import { useNavigate } from "react-router-dom";
import { faTachometerAlt, faChartLine, faFlask, faCogs, faSignOutAlt, faHome, faMoneyBill, faHamburger, faOutdent, faSignOut, faStop, faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sales(){
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

    const handleStocks = () => {
        navigate('/BO/stocks')
    }

    const handleRnD = () => {
        navigate('/BO/rnd')
    }

    const handleMenu = () => {
        navigate('/BO/menu')
    }

    return(
        <div className="order-page" style={{display: "flex", flexDirection: "row", width: "100vw", minHeight: "100vh"}}>
            <div style={{width: "12vw", paddingLeft: "1.5%", paddingTop: "2%", backgroundColor: "#FFF"}}>
                {/* List Area Of Menu */}
                <ul style={{margin: "0%", padding: "0%", fontSize: "0.9rem", fontWeight: "600"}}>
                    <li onClick={handleDashboard} style={{ display: "flex", alignItems: "center", cursor: "pointer", listStyleType: "none", minHeight: "40px" }}>
                        <FontAwesomeIcon icon={faHome} style={{ marginRight: "10px" }} />
                        Dashboard
                    </li>
                    <li onClick={handleSales} style={{ display: "flex", alignItems: "center", cursor: "pointer", listStyleType: "none", minHeight: "40px"  }}>
                        <FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: "10px" }} />
                        Sales
                    </li>
                    <li onClick={handleMenu} style={{ display: "flex", alignItems: "center", cursor: "pointer", listStyleType: "none", minHeight: "40px"  }}>
                        <FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: "10px" }} />
                        Menu
                    </li>
                    <li onClick={handleRnD} style={{ display: "flex", alignItems: "center", cursor: "pointer", listStyleType: "none", minHeight: "40px"  }}>
                        <FontAwesomeIcon icon={faHamburger} style={{ marginRight: "10px" }} />
                        Rnd
                    </li>
                    <li onClick={handleRnD} style={{ display: "flex", alignItems: "center", cursor: "pointer", listStyleType: "none", minHeight: "40px"  }}>
                        <FontAwesomeIcon icon={faBox} style={{ marginRight: "10px" }} />
                        Stocks
                    </li>
                    <li onClick={handleLogout} style={{color: "red",  cursor: "pointer", position: "absolute", bottom: "0", marginBottom: "3%", listStyleType: "none" }}>
                        <FontAwesomeIcon icon={faSignOut} style={{ marginRight: "10px", color: "red", fontWeight: "800" }} />
                        Logout
                    </li>
                </ul>
            </div>     

            <div style={{width: "85vw", paddingLeft: "2%", paddingRight: "2%"}}>
                <h1 style={{fontSize: "1.4rem"}}>PadangKu Sales</h1>    
            </div>       
        </div>
    );
}

export default Sales;
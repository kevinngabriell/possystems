import { faTachometerAlt, faChartLine, faFlask, faCogs, faSignOutAlt, faHome, faMoneyBill, faHamburger, faOutdent, faSignOut, faStop, faBox } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Dashboard(){
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


    return(
        <div className="order-page" style={{display: "flex", flexDirection: "row", width: "100vw", minHeight: "100vh"}}>
            <div style={{width: "10vw", marginLeft: "1.5%", marginTop: "2%"}}>
                {/* List Area Of Menu */}
                <ul style={{margin: "0%", padding: "0%", fontSize: "0.9rem"}}>
                    <li onClick={handleDashboard} style={{ display: "flex", alignItems: "center", cursor: "pointer", listStyleType: "none" }}>
                        <FontAwesomeIcon icon={faHome} style={{ marginRight: "10px" }} />
                        Dashboard
                    </li>
                    <li onClick={handleSales} style={{ display: "flex", alignItems: "center", cursor: "pointer", listStyleType: "none" }}>
                        <FontAwesomeIcon icon={faMoneyBill} style={{ marginRight: "10px" }} />
                        Sales
                    </li>
                    <li onClick={handleRnD} style={{ display: "flex", alignItems: "center", cursor: "pointer", listStyleType: "none" }}>
                        <FontAwesomeIcon icon={faHamburger} style={{ marginRight: "10px" }} />
                        Rnd
                    </li>
                    <li onClick={handleRnD} style={{ display: "flex", alignItems: "center", cursor: "pointer", listStyleType: "none" }}>
                        <FontAwesomeIcon icon={faBox} style={{ marginRight: "10px" }} />
                        Stocks
                    </li>
                    <li onClick={handleLogout} style={{color: "red",  cursor: "pointer", position: "absolute", bottom: "0", marginBottom: "3%", listStyleType: "none" }}>
                        <FontAwesomeIcon icon={faSignOut} style={{ marginRight: "10px", color: "red", fontWeight: "800" }} />
                        Logout
                    </li>
                </ul>
            </div>
            <div style={{width: "85vw"}}>
                <h1 style={{fontSize: "1.4rem"}}>PadangKu Dashboard</h1>


                <div style={{marginTop: "2%", display: "flex", width: "100%", justifyContent: "space-between", gap: "20px"}}>
                    <div style={{width: "100%", border: "1px solid red", borderRadius: "6px", padding: "1%"}}>
                        <h3>Total Sales</h3>
                    </div>
                    <div style={{width: "100%", border: "1px solid red", borderRadius: "6px", padding: "1%"}}>
                        <h3>Orders</h3>
                    </div>
                    <div style={{width: "100%", border: "1px solid red", borderRadius: "6px", padding: "1%"}}>
                        <h3>Stock Status</h3>
                    </div>
                    <div style={{width: "100%", border: "1px solid red", borderRadius: "6px", padding: "1%"}}>
                        <h3>Customers</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
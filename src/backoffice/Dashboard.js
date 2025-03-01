import { useNavigate } from "react-router-dom";

function Dashboard(){
    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/')
    } 

    const handleDashboard = () => {
        navigate('/BO/Dashboard')
    }


    return(
        <div className="order-page" style={{display: "flex", flexDirection: "row", width: "100vw", minHeight: "100vh"}}>
            <div style={{width: "15vw", marginLeft: "1.5%", marginTop: "2%"}}>
                {/* List Area Of Menu */}
                <ul style={{margin: "0%", padding: "0%"}}>
                    <li onClick={handleDashboard} style={{cursor: "pointer"}}>Dashboard</li>
                    <li>Sales</li>
                    <li>RnD</li>
                    <li>Stocks</li>
                    <li onClick={handleLogout} style={{cursor: "pointer", position: "absolute", bottom: "0", marginBottom: "3%"}}>Logout</li>
                </ul>
            </div>
            <div style={{width: "85vw"}}>
                Split Two
            </div>
        </div>
    );
}

export default Dashboard;
import { useNavigate } from "react-router-dom";
import LeftNavBar from '../components/LeftNavBar';
import { useState } from "react";
import SearchProfile from "../components/SearchProfile";

function Dashboard(){
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("Dashboard");

    return(
        <div className="dashboard">
            <LeftNavBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <div className="mainside">
                {/* Search and profile area */}
                <SearchProfile/>

                <div style={{paddingLeft: "2%", paddingRight: "2%"}}>

                    <div style={{display:"flex", justifyContent: "space-between", alignItems: "center", marginTop: "20px", marginBottom: "30px"}}>
                        <div>
                            <h1>Welcome, Mr Kevin</h1>
                            <p style={{marginTop: "2%"}}>Here's a quick overview of your business performance this month.</p>
                        </div>
                        <div>
                            <button>Create a New Reservation</button>
                        </div>
                    </div>

                    <div style={{marginTop: "2%",  display: "flex", width: "100%", justifyContent: "space-between", gap: "20px", marginBottom: "3%"}}>
                        <div>
                            <div style={{width: "100%", display:"flex", gap:"30px"}}>
                                {/* Card Top Menu */}
                                <div className="card">
                                    <h1>Top Menu</h1>
                                    <p>Top 3 best-selling items based on total sales and reviews in the last 30 days.</p>
                                </div>
                                {/* Card Top Menu */}

                                {/* Card Top Branch */}
                                <div className="card">
                                    <h1>Top Branch</h1>
                                    <p>Top 3 branches with the highest order volume and best reviews this month.</p>
                                </div>
                            </div>
                        
                            <div className="card" style={{marginTop:"30px", gap: "10px"}}>
                                    space area
                            </div>
                        </div>

                        {/* Card Sales Overview */}
                        <div className="card">
                            <h1>Sales Overview</h1>
                            <p>Total revenue, order growth, and customer traffic trends over the last 30 days.</p>
                        </div>
                        {/* Card Sales Overview */}

                    </div>

                </div>
                
            </div>
        </div>
    );
}

export default Dashboard;
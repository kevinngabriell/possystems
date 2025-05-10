import { useNavigate } from "react-router-dom";
import LeftNavBar from '../components/LeftNavBar';
import { useState } from "react";
import SearchProfile from "../components/SearchProfile";
import PopupMessage from "../components/popup";

function Dashboard(){
    const navigate = useNavigate();
    const [titlePopupMessage, setTitlePopupMessage] = useState("");
    const [messagePopupMessage, setMessagePopupMessage] = useState("");
    const [activeMenu, setActiveMenu] = useState("Dashboard");
    const [showDialog, setShowDialog] = useState(false);  

    // setup for popup dialog
    const handleCloseDialog = () => {
        setShowDialog(false);
    };

    const popup = <PopupMessage onCloseDialog={handleCloseDialog} Title={titlePopupMessage} Message={messagePopupMessage} />;
    // setup for popup dialog

    const handleNewReservation = () => {
        setShowDialog(true);
        setTitlePopupMessage("Error");
        setMessagePopupMessage("Fitur ini belum tersedia pada versi ini !!")
    }
    
    return(
        <div className="dashboard">
            <LeftNavBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            <div className="mainside">
                {showDialog && popup}

                {/* Search and profile area */}
                <SearchProfile/>

                <div style={{paddingLeft: "2%", paddingRight: "2%"}}>

                    <div className="twoitems">
                        <div>
                            <h1>Welcome, Mr Kevin</h1>
                            <p style={{marginTop: "2%"}}>Here's a quick overview of your business performance this month.</p>
                        </div>
                        <div>
                            <button onClick={handleNewReservation}>Create a New Reservation</button>
                        </div>
                    </div>

                    <div className="cardcontainer">
                        <div>
                            <div className="gapcard">
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
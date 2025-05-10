import { useNavigate } from "react-router-dom";
import LeftNavBar from "../components/LeftNavBar";
import { useState } from "react";
import SearchProfile from "../components/SearchProfile";

function Order(){
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("Orders");

    return(
        <div className="dashboard">
            <LeftNavBar activeMenu={"Orders"} />

            <div className="mainside">

                <SearchProfile/>

                <div style={{paddingLeft: "2%", paddingRight: "2%"}}>
                    <h1>Order</h1>   
                    <p style={{marginTop: "2%"}}>View and manage all available food and drink items across branches.</p> 
                </div>

            </div>     
        </div>
    );
}

export default Order;
import { useNavigate } from "react-router-dom";
import LeftNavBar from "../components/LeftNavBar";
import { useState } from "react";

function Sales(){
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("Orders");

    return(
        <div className="order-page" style={{display: "flex", flexDirection: "row", width: "100vw", minHeight: "100vh"}}>
            <LeftNavBar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

            <div style={{width: "85vw", paddingLeft: "2%", paddingRight: "2%"}}>
                <h1 style={{fontSize: "1.4rem"}}>PadangKu Sales</h1>    
            </div>       
        </div>
    );
}

export default Sales;
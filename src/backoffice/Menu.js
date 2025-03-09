import { useNavigate } from "react-router-dom";
import LeftNavBar from "../components/LeftNavBar";

function Menu(){
    const navigate = useNavigate();

    return(
        <div className="order-page" style={{display: "flex", flexDirection: "row", width: "100vw", minHeight: "100vh"}}>
            <LeftNavBar/>   

            <div style={{width: "85vw", paddingLeft: "2%", paddingRight: "2%"}}>
                <h1 style={{fontSize: "1.4rem"}}>PadangKu Menu</h1>    
            </div> 
        </div>
    );
}

export default Menu;
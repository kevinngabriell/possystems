import { useNavigate } from "react-router-dom";
import LeftNavBar from "../components/LeftNavBar";
import SearchProfile from "../components/SearchProfile";

function Table(){
    const navigate = useNavigate();

    return(
        <div className="dashboard">
            <LeftNavBar activeMenu={"Table"}/>   

            <div className="mainside">

                <SearchProfile/>

                <div style={{paddingLeft: "2%", paddingRight: "2%"}}>
                    <h1>Table</h1>   
                    
                </div>

            </div> 
        </div>
    );
}

export default Table;
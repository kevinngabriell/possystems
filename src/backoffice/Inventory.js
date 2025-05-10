import LeftNavBar from "../components/LeftNavBar";
import SearchProfile from "../components/SearchProfile";

function Inventory(){
    return(
        <div className="dashboard">
            <LeftNavBar activeMenu={"Inventory"}/>   

            <div className="mainside">

                <SearchProfile/>

                <div style={{paddingLeft: "2%", paddingRight: "2%"}}>
                    <h1>Inventory</h1>   
                    
                </div>

            </div> 
        </div>
    );
}

export default Inventory;
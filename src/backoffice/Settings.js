import LeftNavBar from "../components/LeftNavBar";
import SearchProfile from "../components/SearchProfile";

function Settings(){
    return(
        <div className="dashboard">
            <LeftNavBar activeMenu={"Settings"}/>   

            <div className="mainside">

                <SearchProfile/>

                <div style={{paddingLeft: "2%", paddingRight: "2%"}}>
                    <h1>Settings</h1>   
                    {/* <p style={{marginTop: "2%"}}>View and manage all available food and drink items across branches.</p>  */}
                </div>

            </div> 
        </div>
    );
}

export default Settings;
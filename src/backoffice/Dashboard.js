import { useNavigate } from "react-router-dom";
import LeftNavBar from '../components/LeftNavBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";

function Dashboard(){
    const navigate = useNavigate();

    return(
        <div className="order-page" style={{display: "flex", flexDirection: "row", width: "100vw", minHeight: "100vh"}}>
            <LeftNavBar/>

            <div style={{width: "85vw", paddingLeft: "2%", paddingRight: "2%"}}>
                <h1 style={{fontSize: "1.4rem"}}>PadangKu Dashboard</h1>

                <div style={{marginTop: "2%", display: "flex", width: "100%", justifyContent: "space-between", gap: "20px", marginBottom: "3%"}}>
                    <div style={{display: "flex", gap: "10px", width: "100%", backgroundColor: "#FFF", borderRadius: "6px", padding: "1%", alignItems: "center"}}>
                        <FontAwesomeIcon icon={faMoneyBillWave}/>
                        <div>
                            <h3 style={{marginBottom: "8%"}}>Total Sales</h3>
                            <p style={{fontSize: "0.8rem"}}>Rp. 20.000.000</p>
                        </div>
                    </div>
                    <div style={{display: "flex", gap: "15px", width: "100%", backgroundColor: "#FFF", borderRadius: "6px", padding: "1%"}}>
                        <div>
                            <p>aaa</p>
                        </div>
                        <div>
                            <h3 style={{marginBottom: "8%"}}>Total Sales</h3>
                            <p style={{fontSize: "0.8rem"}}>Rp. 20.000.000</p>
                        </div>
                    </div>
                    <div style={{display: "flex", gap: "15px", width: "100%", backgroundColor: "#FFF", borderRadius: "6px", padding: "1%"}}>
                        <div>
                            <p>aaa</p>
                        </div>
                        <div>
                            <h3 style={{marginBottom: "8%"}}>Total Sales</h3>
                            <p style={{fontSize: "0.8rem"}}>Rp. 20.000.000</p>
                        </div>
                    </div>
                    <div style={{display: "flex", gap: "15px", width: "100%", backgroundColor: "#FFF", borderRadius: "6px", padding: "1%"}}>
                        <div>
                            <p>aaa</p>
                        </div>
                        <div>
                            <h3 style={{marginBottom: "8%"}}>Total Sales</h3>
                            <p style={{fontSize: "0.8rem"}}>Rp. 20.000.000</p>
                        </div>
                    </div>
                </div>

                <div style={{display: "flex", width: "100%", justifyContent: "space-between", gap: "50px", marginBottom: "3%"}}>
                    <div style={{width: "100%", backgroundColor: "#FFF", borderRadius: "6px", padding: "1%"}}>
                        card 1
                    </div>
                    <div style={{width: "100%", backgroundColor: "#FFF", borderRadius: "6px", padding: "1%"}}>
                        card 2
                    </div>
                </div>

                <div style={{display: "flex", width: "100%", marginBottom: "3%", flexDirection: "column"}}>
                    <h3>Quick Actions</h3>
                    <div style={{width: "100%", display: "flex", justifyContent: "space-between", gap: "50px"}}>
                        <div>Action 1</div>
                        <div>Action 2</div>
                        <div>Action 1</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
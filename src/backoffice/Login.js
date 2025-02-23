import "../style/globalstyle.css";
import "../style/backofficestyle.css"
import { useNavigate } from "react-router-dom";
import emailVector from "../assets/email.png";
import callVector from "../assets/call.png";
import { useState } from "react";

function Login(){
    const navigate = useNavigate();
    const [employeeID, setEmployeeID] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginOnClick = () => {
        // navigate("/BO/order");
        if(employeeID === "order"){
            navigate("/BO/order");
        } else if (employeeID === "owner"){
            navigate("/BO/dashboard")
        }
    }

    return(
        <div className='order-page' style={{width: "100vw", maxHeight: "100vh", display: "flex", flexDirection: "row"}}>
            <div style={{width: "100vw", maxHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                Login ye
            </div>
            <div style={{width: "100vw", maxHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h1>Padangku</h1>
                <p style={{width: "70%", textAlign: "center", marginBottom: "5%"}}>Please insert your credentials to login into our awesome pos system hehe</p>
                {/* Employee ID Area */}
                <div className="login-container">
                    <input
                        type="text"
                        placeholder="Input Employee ID"
                        className="login-area"
                        value={employeeID}
                        onChange={(e) => setEmployeeID(e.target.value)}
                    />
                </div>
                {/* Password Area */}
                <div className="login-container" style={{marginBottom: "70px"}}>
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-area"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button style={{width: "40%"}} onClick={handleLoginOnClick}>
                    Login
                </button>

                <div className="contact-area">
                    <div style={{display: "flex", alignItems: "center", gap: "10px", color: "#A4A8B1"}}>
                        <img src={callVector}></img>
                        021-111-111
                    </div>
                    <hr/>
                    <div style={{display: "flex", alignItems: "center", gap: "10px" , color: "#A4A8B1"}}>
                        <img src={emailVector}></img>
                        helpcenter@pos.com
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
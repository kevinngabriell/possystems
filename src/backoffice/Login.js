import "../style/globalstyle.css";
import "../style/backofficestyle.css";
import { useNavigate } from "react-router-dom";
import emailVector from "../assets/email.png";
import callVector from "../assets/call.png";
import { useState } from "react";
import loginPhoto from "../assets/login.png";

function Login(){
    const navigate = useNavigate();
    const [employeeID, setEmployeeID] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginOnClick = () => {
        // navigate("/BO/order");
        console.log(setEmployeeID);
        if(employeeID === "order"){
            navigate("/BO/order");
        } else if (employeeID === "owner"){
            navigate("/BO/dashboard")
        }
    }

    return(
        <div className="login-area">
            <div className="login-photo-area">
                <img src={loginPhoto}></img>
            </div>
            <div className="login-form-area">
                <h1>PadangKu</h1>
                <p>Please insert your authentication information 
                to access padangku POS systems</p>
                {/* Employee ID Area */}
                <div className="login-container">
                    <input
                        type="text"
                        placeholder="Employee ID"
                        className="login-area-form"
                        value={employeeID}
                        onChange={(e) => setEmployeeID(e.target.value)}
                    />
                </div>
                {/* Password Area */}
                <div className="login-container" style={{marginBottom: "40px"}}>
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-area-form"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button style={{width: "50%", fontSize: "0.9rem"}} onClick={handleLoginOnClick}>
                    Login
                </button>

                <div className="contact-area">
                    <div style={{display: "flex", alignItems: "center", gap: "10px", color: "#A4A8B1", fontSize: "0.7rem"}}>
                        <img src={callVector}></img>
                        021-111-111
                    </div>
                    <hr/>
                    <div style={{display: "flex", alignItems: "center", gap: "10px" , color: "#A4A8B1" , fontSize: "0.7rem"}}>
                        <img src={emailVector}></img>
                        helpcenter@pos.com
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
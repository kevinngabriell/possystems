import "../style/globalstyle.css";
import "../style/backofficestyle.css"
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();

    const handleLoginOnClick = () => {
        navigate("/BO/order");
    }

    return(
        <div className='order-page' style={{width: "100vw", display: "flex", flexDirection: "row"}}>
            <div style={{width: "100vw", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
                Login ye
            </div>
            <div style={{width: "100vw", height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h1>Padangku</h1>
                <p style={{width: "70%", textAlign: "center", marginBottom: "5%"}}>Please insert your credentials to login into our awesome pos system hehe</p>
                {/* Employee ID Area */}
                <div className="login-container">
                    <input
                        type="text"
                        placeholder="Input Employee ID"
                        className="login-area"
                    />
                </div>
                {/* Password Area */}
                <div className="login-container" style={{marginBottom: "70px"}}>
                    <input
                        type="password"
                        placeholder="Password"
                        className="login-area"
                    />
                </div>

                <button style={{width: "40%"}} onClick={handleLoginOnClick}>
                    Login
                </button>

                <div className="contact-area">Contact support area</div>
            </div>
        </div>
    );
}

export default Login;
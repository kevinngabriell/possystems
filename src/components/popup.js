import { useEffect, useState } from "react";

function PopupMessage({ Title, onCloseDialog, Message }) {
    const [showDialog, setShowDialog] = useState(false);

    useEffect(() => {
        setShowDialog(true); 
    }, []); // add [] so it runs only once on mount

    const handleCloseClick = () => {
        setShowDialog(false);
        onCloseDialog(); 
    };

    return (
        <div className="popupOverlay">
            <div className="popupContainer">
                <div className="popupHeader">
                    <h2>{Title}</h2>
                </div>
                <div className="popupMessage">{Message}</div>
                <div className="popupAction" onClick={handleCloseClick}>Close</div>
            </div>
        </div>
    );
}

export default PopupMessage;

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function ConfirmOrder(){
    const navigate = useNavigate();
    let { tableId } = useParams();
    const jumlahPesanan = useState(2);

    const ClickOnBack = () => {
        navigate("/order/table/2");
    }

    return(
        <div style={{backgroundColor: "#F2F2F2", height: "100vh"}}>
            {/* Header Cart */}
            <div className='header-area'>
                <div style={{display: "flex", justifyContent: "space-between", marginRight: "10px"}}>
                    <div>Pesanan Saya</div>
                    <div>Nomor Meja: {tableId}</div>
                </div>
            </div>
            {/* Body Cart */}
            <div>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginLeft: "15px", marginRight: "15px", marginTop: "20px"}}>
                    <div style={{fontWeight: "600"}}>Pesanan ({jumlahPesanan})</div>
                    <button className="cart-button" onClick={ClickOnBack} style={{width: "40%"}}>+ Tambah Item</button>
                </div>
                {/* List of order */}
                <div>

                </div>
                <div className="bottom-area" style={{ width: "360px", backgroundColor: "#FFFFFF" }}>
                    <div className="cart-row">
                        <div>Qty</div>
                        <div>{jumlahPesanan} item</div>
                    </div>
                    <div className="cart-row">
                        <div>Subtotal</div>
                        <div>Rp. 280.000</div>
                    </div>
                    <div className="cart-row">
                        <div>Discount</div>
                        <div>Rp. 0</div>
                    </div>
                    <div className="cart-row">
                        <div>Service (5%)</div>
                        <div>Rp. 0</div>
                    </div>
                    <div className="cart-row">
                        <div>Tax (10%)</div>
                        <div>Rp. 0</div>
                    </div>
                    <div className="cart-row grand-total">
                        <div>Grand Total</div>
                        <div>Rp. 280.000</div>
                    </div>
                    <button className="cart-button" style={{ marginTop: "10px" }}>Konfirmasi Pesanan</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmOrder;
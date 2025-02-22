function OrderBO(){
    return(
        <div className='order-page' style={{width: "100vw", display: "flex", flexDirection: "row"}}>
            <div style={{width: "100vw", height: "100vh", display: "flex"}}>order euyy</div>
            <div style={{width: "30vw", height: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#FFFFFF"}}>
                <div style={{width: "100vw", display:"flex",  justifyItems: "space-between"}}>
                    1
                    Purchase Receipt
                    3
                </div>
                <div>
                    Customer name
                    Table
                </div>
                <div>
                    Order List
                </div>
                <div>
                    Total Area
                </div>
                <button style={{position: "absolute", bottom: "30px"}}>Send Order</button>
            </div>
        </div>
    );
}

export default OrderBO;
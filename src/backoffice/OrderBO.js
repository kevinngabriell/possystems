import { useState } from "react";

function OrderBO(){
    const [orderType, setOrderType] = useState("Dine In");
    const [customerName, setCustomerName] = useState("Kevin G");
    const [table, setTable] = useState("A22 - Indoor");
    const [selectedCategory, setSelectedCategory] = useState("Semua Menu");
    const [cart, setCart] = useState({});

    //Mockup order data
    const [orders, setOrders] = useState([
        { id: 1, image: require("../assets/ayampop.jpg"), name: "Ayam Pop", price: 3, quantity: 3, note: "Sambal Pisah" },
        { id: 2, image: require("../assets/ayampop.jpg"), name: "Ayam Pop", price: 3, quantity: 3, note: "Sambal Pisah" },
        { id: 3, image: require("../assets/ayampop.jpg"), name: "Ayam Pop", price: 3, quantity: 3, note: "Sambal Pisah" },
        { id: 4, image: require("../assets/ayampop.jpg"), name: "Ayam Pop", price: 3, quantity: 3, note: "Sambal Pisah" },
        { id: 5, image: require("../assets/ayampop.jpg"), name: "Ayam Pop", price: 3, quantity: 3, note: "Sambal Pisah" }
    ]);

    // Mockup menu data
    const mockMenu = [
        { id: 1, image: require("../assets/ayamgoreng.jpeg"), name: "Ayam Goreng", category: "Ayam", description: "Ayam goreng khas Padang dengan bumbu rempah yang meresap hingga ke dalam, digoreng hingga renyah di luar dan tetap juicy di dalam." },
        { id: 2, image: require("../assets/ayampop.jpg"), name: "Ayam Pop", category: "Ayam", description: "Ayam khas Minang yang direbus dengan air kelapa dan rempah pilihan, menghasilkan tekstur lembut dan rasa gurih yang unik. Disajikan dengan sambal khas yang menggugah selera." },
        { id: 3, image: require("../assets/ayamgulai.jpg"), name: "Ayam Gulai", category: "Ayam", description: "Potongan ayam yang dimasak dengan kuah gulai kaya rempah, santan kental, dan cita rasa gurih pedas yang khas." },
        { id: 4, image: require("../assets/ayampanggang.webp"), name: "Ayam Panggang", category: "Ayam", description: "Ayam bakar dengan bumbu khas Padang, dipanggang hingga kecoklatan dan beraroma harum, dengan rasa manis, pedas, dan gurih yang menyatu sempurna." },
        { id: 5, image: require("../assets/rendangdaging.jpg"), name: "Rendang Daging", category: "Daging", description: "Hidangan ikonik khas Minang! Daging sapi dimasak perlahan dengan santan dan rempah-rempah pilihan hingga bumbu meresap sempurna, menghasilkan cita rasa gurih, pedas, dan kaya rempah." },
        { id: 6, image: require("../assets/dendengbalado.jpg"), name: "Dendeng Balado", category: "Daging", description: "Irisan tipis daging sapi yang digoreng kering hingga renyah, lalu disiram dengan sambal balado khas Padang yang pedas dan segar, dibuat dari cabai merah besar dan tomat." },
        { id: 7, name: "Gulai Cincang Sapi", category: "Daging", description: "Potongan daging sapi yang dimasak dalam kuah gulai berbumbu santan kental dengan aroma rempah yang kuat, menciptakan rasa gurih yang menggugah selera." },
        { id: 8, name: "Dendeng Lambok", category: "Daging", description: "Daging sapi yang dimasak dengan cara direbus lalu digoreng hingga empuk dan juicy, kemudian disajikan dengan bumbu rempah dan sambal khas Minang." },
        { id: 9, name: "Ikan Nila Dabu", category: "Ikan", description: "Ikan nila segar yang digoreng hingga renyah, disajikan dengan sambal dabu-dabu khas yang terdiri dari irisan cabai, tomat, dan bawang merah, memberikan rasa pedas, segar, dan gurih yang menggugah selera." },
        { id: 10, name: "Udang Saus Padang", category: "Udang" },
        { id: 11, name: "Udang Saus Padang", category: "Udang" },
        { id: 12, name: "Udang Saus Padang", category: "Udang" },
        { id: 13, name: "Udang Saus Padang", category: "Udang" },
        { id: 14, name: "Udang Saus Padang", category: "Udang" }
    ];
    
    const updateQuantity = (id, amount) => {
        setOrders(orders.map(order =>
          order.id === id ? { ...order, quantity: Math.max(1, order.quantity + amount) } : order
        ));
    };
    
    const subtotal = orders.reduce((sum, order) => sum + order.price * order.quantity, 0);
    const serviceCharge = 2;
    const taxCharge = 3;
    const total = subtotal + serviceCharge + taxCharge;

    // Filter menu based on selected category
    const filteredMenu = selectedCategory === "Semua Menu" 
        ? mockMenu 
        : mockMenu.filter(item => item.category === selectedCategory);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const increaseQuantity = (id) => {
        setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
    };

    const decreaseQuantity = (id) => {
        setCart((prev) => {
            const newCart = { ...prev };
            if (newCart[id] > 1) {
                newCart[id] -= 1;
            } else {
                delete newCart[id];
            }
            return newCart;
        });
    };

    return(
        <div className='order-page' style={{width: "100vw", maxHeight: "100vh"}}>
            <div className="top-bar">
                <h1>Padangku</h1>
                <div>Profile</div>
            </div>
            <div style={{display: "flex", maxHeight: "100vh"}}>
                <div style={{width: "100vw", maxHeight: "100vh", display: "flex", flexDirection: "column"}}>
                    
                    {/* Menu Category List */}
                    <div className='list-category'>
                        {['Semua Menu', 'Ayam', 'Daging', 'Ikan', 'Udang'].map(category => (
                            <div 
                                key={category} 
                                className={`category-item ${selectedCategory === category ? 'active' : ''}`} 
                                onClick={() => handleCategoryClick(category)}
                            >
                                {category}
                            </div>
                        ))}
                    </div>

                    {/* Menu Area */}
                    <div className="menu-area">
                        <div className="menu-list">
                            {filteredMenu.length > 0 ? (
                                filteredMenu.map(item => (
                                    <div key={item.id} className='menu-item'>
                                        <div>
                                            <img src={item.image}></img>
                                        </div>
                                        <div>
                                            <div className='title'>{item.name}</div>
                                            <p>Rp. {item.price}</p>
                                            <div className="menu-actions">
                                                {cart[item.id] ? (
                                                    <div className="quantity">
                                                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                                                        <span>{cart[item.id]}</span>
                                                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                                                    </div>
                                                ) : (
                                                    <button className="add-btn" onClick={() => increaseQuantity(item.id)}>Tambah Item</button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className='no-menu'>Tidak ada menu tersedia</div>
                            )}
                        </div>
                    </div>

                </div>
                <div style={{width: "40vw", display: "flex", flexDirection: "column", backgroundColor: "#FFFFFF", alignItems: "center", borderRadius: "15px", marginBottom: "5%"}}>
                    <div style={{display:"flex",  width: "100%", padding: "5px"}}>
                        1
                        Purchase Receipt
                        3
                    </div>
                    <div className="order-toggle">
                        {["Dine In", "Take Away", "Online Order"].map((option) => (
                            <button
                            key={option}
                            className={`toggle-button ${orderType === option ? "active" : ""}`}
                            onClick={() => setOrderType(option)}
                            >
                            {option}
                            </button>
                        ))}
                    </div>

                    {orderType === "Dine In" ? (
                        /* Customer Info */
                        <div className="customer-info">
                            <div>
                                <label>Customer name</label>
                                <input 
                                    value={customerName} 
                                    onChange={(e) => setCustomerName(e.target.value)} 
                                />
                            </div>
                            <div>
                                <label>Table</label>
                                <input 
                                    value={table} 
                                    onChange={(e) => setTable(e.target.value)} 
                                />
                            </div>
                        </div>
                    ) : (
                        <div className="customer-info">Other content here</div>
                    )}


                    {/* Order List */}
                    <div className="order-list">
                        {orders.map((order) => (
                        <div className="order-item" key={order.id}>
                            <div className="order-image">
                                <img src={order.image}></img>
                            </div>
                            <div className="order-details">
                                <h4>{order.name}</h4>
                                <p>Rp. {order.price} × {order.quantity} - {order.note}</p>
                            </div>
                            <div className="order-actions">
                                <p>Rp. {order.price * order.quantity}</p>
                                <div>
                                    <button onClick={() => updateQuantity(order.id, -1)}>-</button>
                                    <span>{order.quantity}</span>
                                    <button onClick={() => updateQuantity(order.id, 1)}>+</button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="order-summary">
                        <p>Qty <span>{subtotal} item</span></p>
                        <p>Subtotal <span>Rp. {subtotal}</span></p>
                        <p>Discount <span>Rp. {subtotal}</span></p>
                        <p>Service Charge <span>Rp. {serviceCharge}</span></p>
                        <p>Tax Charge <span>Rp. {taxCharge}</span></p>
                        <hr />
                        <p className="total">Grand Total <span>Rp. {total}</span></p>
                    </div>

                    <button style={{position: "absolute", bottom: "55px", display:"flex", justifyContent: "space-between", width: "26%", textAlign: "center !important"}}>Send Order</button>
                </div>
            </div>
        </div>
    );
}

export default OrderBO;
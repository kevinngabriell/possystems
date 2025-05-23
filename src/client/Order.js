import React, { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import "../style/clientstyle.css";
import { Search } from "lucide-react";

function Order() {
    const navigate = useNavigate();
    let { tableId } = useParams();
    
    // Mockup menu data
    const mockMenu = [
        { id: 1, image: require("../assets/ayamgoreng.jpeg"), name: "Ayam Goreng", category: "Ayam", description: "Ayam goreng khas Padang dengan bumbu rempah yang meresap hingga ke dalam, digoreng hingga renyah di luar dan tetap juicy di dalam.", harga: 40000 },
        { id: 2, image: require("../assets/ayampop.jpg"), name: "Ayam Pop", category: "Ayam", description: "Ayam khas Minang yang direbus dengan air kelapa dan rempah pilihan, menghasilkan tekstur lembut dan rasa gurih yang unik. Disajikan dengan sambal khas yang menggugah selera.", harga: 0},
        { id: 3, image: require("../assets/ayamgulai.jpg"), name: "Ayam Gulai", category: "Ayam", description: "Potongan ayam yang dimasak dengan kuah gulai kaya rempah, santan kental, dan cita rasa gurih pedas yang khas.", harga: 0 },
        { id: 4, image: require("../assets/ayampanggang.webp"), name: "Ayam Panggang", category: "Ayam", description: "Ayam bakar dengan bumbu khas Padang, dipanggang hingga kecoklatan dan beraroma harum, dengan rasa manis, pedas, dan gurih yang menyatu sempurna.", harga: 0 },
        { id: 5, image: require("../assets/rendangdaging.jpg"), name: "Rendang Daging", category: "Daging", description: "Hidangan ikonik khas Minang! Daging sapi dimasak perlahan dengan santan dan rempah-rempah pilihan hingga bumbu meresap sempurna, menghasilkan cita rasa gurih, pedas, dan kaya rempah.", harga: 0 },
        { id: 6, image: require("../assets/dendengbalado.jpg"), name: "Dendeng Balado", category: "Daging", description: "Irisan tipis daging sapi yang digoreng kering hingga renyah, lalu disiram dengan sambal balado khas Padang yang pedas dan segar, dibuat dari cabai merah besar dan tomat.", harga: 0 },
        { id: 7, name: "Gulai Cincang Sapi", category: "Daging", description: "Potongan daging sapi yang dimasak dalam kuah gulai berbumbu santan kental dengan aroma rempah yang kuat, menciptakan rasa gurih yang menggugah selera.", harga: 0 },
        { id: 8, name: "Dendeng Lambok", category: "Daging", description: "Daging sapi yang dimasak dengan cara direbus lalu digoreng hingga empuk dan juicy, kemudian disajikan dengan bumbu rempah dan sambal khas Minang." },
        { id: 9, name: "Ikan Nila Dabu", category: "Ikan", description: "Ikan nila segar yang digoreng hingga renyah, disajikan dengan sambal dabu-dabu khas yang terdiri dari irisan cabai, tomat, dan bawang merah, memberikan rasa pedas, segar, dan gurih yang menggugah selera." },
        { id: 10, name: "Udang Saus Padang", category: "Udang" },
        { id: 11, name: "Udang Saus Padang", category: "Udang" },
        { id: 12, name: "Udang Saus Padang", category: "Udang" },
        { id: 13, name: "Udang Saus Padang", category: "Udang" },
        { id: 14, name: "Udang Saus Padang", category: "Udang" }
    ];

    const [selectedCategory, setSelectedCategory] = useState("Semua Menu");

    // Filter menu based on selected category
    const filteredMenu = selectedCategory === "Semua Menu" 
        ? mockMenu 
        : mockMenu.filter(item => item.category === selectedCategory);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleOnClick = () => {
        navigate(`/confirmorder/table/${tableId}`);
    };

    return (
        <div className='order-page' style={{minHeight: "100vh"}} >
            {/* Header Order */}
            <div className='header-area'>
                <div style={{fontSize: "1rem"}}>Nomor Meja: {tableId}</div>
                <div className="search-container">
                    <Search className="search-icon" size={20} />
                    <input
                        type="text"
                        placeholder="Cari makan enak disini aja"
                        className="search-area"
                        style={{fontSize: "0.7rem"}}
                    />
                </div>
                <div className='list-category-client'>
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
            </div>

            {/* Menu Area */}
            <div className='body-menu'>
                {/* List of menu */}
                <div className='menu-list'>
                    {filteredMenu.length > 0 ? (
                        filteredMenu.map(item => (
                            <div key={item.id} className='menu-item'>
                                <div style={{weight: "100%", height: "100%", display: "flex", alignItems: "center"}}> 
                                    <img src={item.image} style={{weight: "100%", display: "flex", alignItems: "center"}}></img>
                                </div>
                                <div>
                                    <div className='title'>{item.name}</div>
                                    <div className='desc'>{item.description}</div>

                                    <div style={{display: "flex", width: "100%", marginTop: "10%", alignItems: "center", gap: "10%"}}>
                                        <div style={{fontSize: "0.8rem", fontWeight: "600", width: "100%"}}>
                                        {item.harga === null || item.harga === "" || item.harga === " " || item.harga === NaN || item.harga === undefined
                                            ? new Intl.NumberFormat("id-ID", { 
                                                style: "currency", 
                                                currency: "IDR", 
                                                minimumFractionDigits: 0 
                                                }).format(0)
                                        : new Intl.NumberFormat("id-ID", { 
                                                style: "currency", 
                                                currency: "IDR", 
                                                minimumFractionDigits: 0 
                                                }).format(item.harga)}
                                        </div>
                                        <button style={{fontSize: "0.8rem", fontWeight: "600", borderRadius: "15px", border: "2px solid red", backgroundColor: "transparent", color: "red"}}>Tambah</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='no-menu'>Tidak ada menu tersedia</div>
                    )}
                </div>
            </div>

            {/* Fixed Bottom Button */}
            <div className='bottom-area' style={{display: "flex", justifyContent: "center"}}>
                <button className='cart-button' onClick={handleOnClick}>
                    Belum ada barang di keranjang
                </button>
            </div>
        </div>
    );
}

export default Order;
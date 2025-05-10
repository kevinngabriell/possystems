import { useNavigate } from "react-router-dom";
import LeftNavBar from "../components/LeftNavBar";
import SearchProfile from "../components/SearchProfile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

function Menu(){
    const navigate = useNavigate();

    const menu = [
        {menuName: "Burrata e Pomodorini", menuCategory: "Appetizer", harga: "110000", status: "Available", rank: "2"},
        {menuName: "Carpaccio di Manzo", menuCategory: "Appetizer", harga: "145000", status: "Available", rank: "2"},
        {menuName: "Arancini al Tartufo", menuCategory: "Appetizer", harga: "98000", status: "Available", rank: "2"},
        {menuName: "Calamari Fritti", menuCategory: "Appetizer", harga: "95000", status: "Available", rank: "2"},
        {menuName: "Tagliatelle al Ragu di Manzo", menuCategory: "Pasta e Risotto", harga: "145000", status: "Available", rank: "2"},
        {menuName: "Spaghetti Aglio e Olio con Gamberi", menuCategory: "Pasta e Risotto", harga: "135000", status: "Available", rank: "2"},
        {menuName: "Risotto ai Funghi Porcini", menuCategory: "Pasta e Risotto", harga: "140000", status: "Available", rank: "2"},
        {menuName: "Linguine al Nero di Seppia", menuCategory: "Pasta e Risotto", harga: "150000", status: "Available", rank: "2"},
        {menuName: "Pollo alla Parmigiana", menuCategory: "Secondi (Main Course)", harga: "155000", status: "Available", rank: "2"},
        {menuName: "Branzino al Forno", menuCategory: "Secondi (Main Course)", harga: "180000", status: "Available", rank: "2"},
        {menuName: "Bistecca alla Fiorentina", menuCategory: "Secondi (Main Course)", harga: "480000", status: "Available", rank: "2"},
        {menuName: "Agnello Brasato", menuCategory: "Secondi (Main Course)", harga: "225000", status: "Available", rank: "2"},
        {menuName: "Insalata Caprese", menuCategory: "Insalata e Contorni (Salad & Sides)", harga: "88000", status: "Available", rank: "2"},
        {menuName: "Rucola e Grana", menuCategory: "Insalata e Contorni (Salad & Sides)", harga: "78000", status: "Available", rank: "2"},
        {menuName: "Patate al Rosmarino", menuCategory: "Insalata e Contorni (Salad & Sides)", harga: "65000", status: "Available", rank: "2"},
        {menuName: "Verdure Grigliate", menuCategory: "Insalata e Contorni (Salad & Sides)", harga: "70000", status: "Available", rank: "2"},
        {menuName: "Tiramisu Classico", menuCategory: "Dolci (Dessert)", harga: "95000", status: "Available", rank: "2"},
        {menuName: "Panna Cotta alla Vaniglia", menuCategory: "Dolci (Dessert)", harga: "90000", status: "Available", rank: "2"},
        {menuName: "Cannoli Siciliani", menuCategory: "Dolci (Dessert)", harga: "85000", status: "Available", rank: "2"},
        {menuName: "Affogato al Caffè", menuCategory: "Dolci (Dessert)", harga: "70000", status: "Available", rank: "2"},
        {menuName: "House Wine (Glass)", menuCategory: "Bevande (Drinks)", harga: "120000", status: "Available", rank: "2"},
        {menuName: "Negroni / Aperol Spritz / Limoncello", menuCategory: "Bevande (Drinks)", harga: "130000", status: "Available", rank: "2"},
        {menuName: "Espresso / Cappuccino / Caffè Latte", menuCategory: "Bevande (Drinks)", harga: "55000", status: "Available", rank: "2"},
        {menuName: "Sparkling & Still Water", menuCategory: "Bevande (Drinks)", harga: "50000", status: "Available", rank: "2"},
    ];

    return(
        <div className="dashboard">
            <LeftNavBar activeMenu={"Menu"}/>   

            <div className="mainside">

                <SearchProfile/>

                <div style={{paddingLeft: "2%", paddingRight: "2%"}}>

                    <div className="twoitems">
                        <div>
                            <h1>Menu</h1>
                            <p style={{marginTop: "2%"}}>View and manage all available food and drink items across branches.</p>
                        </div>
                        <div style={{display:"flex", gap: "20px"}}>
                            <input placeholder="Cari menu apapun disini"></input>
                            <button>New menu</button>
                            {/* <button onClick={handleNewReservation}>Create a New Reservation</button> */}
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: "#FFF",
                        padding: "20px",
                        borderRadius: "15px",
                    }}>
                        <table style={{
                            width: "100%"
                        }}>
                            <thead>
                                <tr style={{textAlign: "left"}}>
                                    <th><input type="checkbox" /></th>
                                    <th>Menu Name</th>
                                    <th>Category</th>
                                    <th>Price</th>
                                    <th>Stock Status</th>
                                    <th>Menu Item Stocks</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {menu.map((menuItem, index) => (
                                    <tr key={index} style={{
                                        borderBottom: "1px solid #e0e0e0",
                                        
                                    }}>
                                        <td style={{textAlign: "center"}}><input type="checkbox" /></td>
                                        <td>{menuItem.menuName}</td>
                                        <td style={{textAlign: "center"}}>{menuItem.menuCategory}</td>
                                        <td>{menuItem.harga}</td>
                                        <td>{menuItem.status}</td>
                                        <td style={{textAlign: "center"}}>{menuItem.rank}</td>
                                        <td style={{textAlign: "center"}}>
                                            <FontAwesomeIcon icon={faEllipsisVertical} style={{cursor: "pointer"}} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>

            </div> 
        </div>
    );
}

export default Menu;
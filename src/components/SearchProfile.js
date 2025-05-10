import { useState } from "react";
import dummyProfile from "../assets/profile.jpg";

function SearchProfile(){
    const [query, setQuery] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        //   onSearch(query);
        }
    };

    return(
        <div className="searchprofile">
            <div className="searchForm">
                <input
                    type="text"
                    placeholder="Search Anything Here.."
                    className="searchContainer"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                />
            </div>

            <div className="profile">
                <img src={dummyProfile}/>
                <div style={{fontWeight: "bold"}}>Kevin G</div>
                <span className="dropdown-icon">▼</span>
            </div>
        </div>
    );
}

export default SearchProfile;
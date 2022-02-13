import React from "react";
import './Search.css';
const Search = ({handleName}) => {
    return (        
            <div>               
                <div className="search">
                    <input                        
                        placeholder="Search"
                        onChange={(e) => handleName(e)}
                        type="text"
                        placeholder="Search..."
                    />
                    <input onClick={handleName} type="submit" value="SEARCH" />
                </div>
            </div>        
    );
};

export default Search;

import React from 'react';
import "./NavMap.css";

function NavMap() {
    return (
    <div className="mapWrapper">
        <div className="titleWrapper">   
            <h1>Testing the navigational map</h1>
        </div>
        <div className="mapImageWrapper">
            <img className="imageTest" src={process.env.PUBLIC_URL + "/nav-map.png"} alt="" />
        </div>
            <img className="imageTest" src={process.env.PUBLIC_URL + "/nav-map2.png"} alt="" />
    </div>
    );
}

export default NavMap;
